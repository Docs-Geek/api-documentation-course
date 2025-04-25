'use strict';
const sortingUtils = require('../utils/sortingUtils');
const problem = require('../utils/problem');
const mongoose = require('mongoose');
const OrderModel = mongoose.model('Order', require('../models/Order').Order);
const DishModel = mongoose.model('Dish', require('../models/Dish').Dish);
const AuthModel = mongoose.model('Auth', require('../models/Auth').Auth);
const { Types } = require('mongoose');

exports.postOrder = async function (body, token) {
  try {
    const existingAuth = await AuthModel.findOne({ access_token: token });

    if (!existingAuth) {
      throw new problem.Problem(
        problem.E_UNAUTHORIZED,
        'Bearer token is invalid.',
        401
      );
    }
    // Check if the token is expired
    if (new Date() > new Date(existingAuth.expires_at)) {
      throw new problem.Problem(
        problem.E_UNAUTHORIZED,
        'Bearer token has expired.',
        401
      );
    }

    // const existingOrder = await OrderModel.findOne({
    //   $and: [{ name: body.name }, { table_number: body.table_number }],
    // });

    // if (existingOrder) {
    //   throw new problem.Problem(
    //     problem.E_CONFLICT,
    //     'The provided name is associated with an existing order for this table.',
    //     409
    //   );
    // }

    if (body.dish_ids) {
      const dishIds = body.dish_ids;

      // Validate each dish ID
      for (const dishId of dishIds) {
        if (!Types.ObjectId.isValid(dishId)) {
          throw new problem.Problem(
            problem.E_BAD_REQUEST,
            'Invalid dish ID format. Ensure all dish IDs are valid Mongo database ObjectId strings.',
            400
          );
        }
      }

      // Fetch existing dishes
      const existingDishes = await DishModel.find({ _id: { $in: dishIds } });

      // Check for missing dishes
      const existingDishIds = existingDishes.map((dish) => dish._id.toString());
      const nonExistingDishIds = dishIds.filter(
        (id) => !existingDishIds.includes(id)
      );
      if (nonExistingDishIds.length > 0) {
        throw new problem.Problem(
          problem.E_NOT_FOUND,
          `The following dish(es) do not exist: ${nonExistingDishIds.join(
            ', '
          )}`,
          404
        );
      }
    }
    if (!body.hasOwnProperty('scheduled_at')) {
      body.scheduled_at = null;
    }
    if (!body.hasOwnProperty('table_number')) {
      body.table_number = null;
    }
    if (!body.hasOwnProperty('special_requests')) {
      body.special_requests = null;
    }
    const order = new OrderModel(body);
    order.status = 'Received';
    order.priority = 3;
    order.created_at = new Date();
    order.updated_at = new Date();
    await order.save();
    return order.toResultFormat();
  } catch (error) {
    console.error('Error encountered:', error);
    switch (error.status) {
      case 400:
        throw error;
      case 401:
        throw error;
      case 404:
        throw error;
      // case 409:
      //   throw error;
      default:
        throw new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the service layer of the API server. Report the issue to API support.'
        );
    }
  }
};
exports.getOrderList = async function (
  sort,
  order,
  fields,
  filter,
  limit,
  offset
) {
  try {
    // if ((sort && !priority) || (priority && !sort)) {
    //   throw new problem.Problem(
    //     problem.E_BAD_REQUEST,
    //     'Both `sort` and `priority` must be defined together.',
    //     400
    //   );
    // }

    if (filter && filter.includes('q.eq~')) {
      filter = filter.replace('q.eq~', 'name.eq~');
    }

    const sortOptions = sortingUtils.parseSortOptions(sort, order);
    const fieldsOptions = sortingUtils.parseFieldsOptions(fields);
    const filterOptions = sortingUtils.parseFilterOptions(filter);

    let ordersQuery = OrderModel.find(filterOptions, fieldsOptions);

    if (limit) {
      if (offset) {
        ordersQuery = ordersQuery.skip(offset).limit(limit);
      } else {
        ordersQuery = ordersQuery.limit(limit);
      }
    }

    const orders = await ordersQuery.sort(sortOptions).exec();
    const totalResults = await OrderModel.countDocuments(filterOptions);

    const response = {
      results: orders.map((order) => ({
        id: order._id,
        name: order.name,
        table_number: order.table_number,
        status: order.status,
        priority: order.priority,
        dish_ids: order.dish_ids,
        special_requests: order.special_requests,
        created_at: order.created_at,
        updated_at: order.updated_at,
        scheduled_at: order.scheduled_at,
      })),
      total_results: totalResults,
    };
    return response;
  } catch (error) {
    switch (error.status) {
      case 400:
        throw error;
      default:
        throw new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the service layer of the API server. Report the issue to API support.'
        );
    }
  }
};

exports.getOrder = async function getOrder(id, fields) {
  try {
    if (!Types.ObjectId.isValid(id)) {
      throw new problem.Problem(
        problem.E_BAD_REQUEST,
        'Invalid order ID format. Ensure the order ID is a valid Mongo database ObjectId string.',
        400
      );
    }
    const order = await OrderModel.findById(id);
    if (!order) {
      throw new problem.Problem(problem.E_NOT_FOUND, 'Order not found.', 404);
    }
    const fieldsOptions = sortingUtils.parseFieldsOptions(fields);
    let ordersQuery = OrderModel.findById(id, fieldsOptions);

    const response = await ordersQuery.exec();

    return {
      id: response._id,
      name: response.name,
      table_number: response.table_number,
      status: response.status,
      priority: response.priority,
      dish_ids: response.dish_ids,
      created_at: response.created_at,
      updated_at: response.updated_at,
      scheduled_at: response.scheduled_at,
    };
  } catch (error) {
    switch (error.status) {
      case 400:
        throw error;
      case 404:
        throw error;
      default:
        throw new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the service layer of the API server. Report the issue to API support.'
        );
    }
  }
};
exports.getOrderDishes = async function (
  id,
  sort,
  order,
  fields,
  filter,
  limit,
  offset
) {
  try {
    if (!Types.ObjectId.isValid(id)) {
      throw new problem.Problem(
        problem.E_BAD_REQUEST,
        'Invalid order ID format. Ensure the order ID is a valid Mongo database ObjectId string.',
        400
      );
    }

    // Fetch the order by ID
    const orderData = await OrderModel.findById(id);
    if (!orderData) {
      throw new problem.Problem(problem.E_NOT_FOUND, 'Order not found.', 404);
    }
    if (filter && filter.includes('q.eq~')) {
      filter = filter.replace('q.eq~', 'name.eq~');
    }

    const sortOptions = sortingUtils.parseSortOptions(sort, order);
    const fieldsOptions = sortingUtils.parseFieldsOptions(fields);
    const filterOptions = sortingUtils.parseFilterOptions(filter);

    // Query for the dishes associated with the order
    let dishQuery = DishModel.find(
      { _id: { $in: orderData.dish_ids }, ...filterOptions },
      fieldsOptions
    ).sort(sortOptions);

    if (limit) {
      dishQuery = dishQuery.limit(limit).skip(offset || 0);
    }

    const dishes = await dishQuery.exec();
    const totalResults = await DishModel.countDocuments({
      _id: { $in: orderData.dish_ids },
      ...filterOptions,
    });

    // Build and return the response object
    return {
      results: dishes.map((dish) => dish.toResultFormat()),
      total_results: totalResults,
    };
  } catch (error) {
    switch (error.status) {
      case 400:
      case 404:
        throw error;
      default:
        throw new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the service layer of the API server. Report the issue to API support.'
        );
    }
  }
};

exports.putOrder = async function putOrder(body, id, token) {
  try {
    const existingAuth = await AuthModel.findOne({ access_token: token });

    if (!existingAuth) {
      throw new problem.Problem(
        problem.E_UNAUTHORIZED,
        'Bearer token is invalid.',
        401
      );
    }
    // Check if the token is expired
    if (new Date() > new Date(existingAuth.expires_at)) {
      throw new problem.Problem(
        problem.E_UNAUTHORIZED,
        'Bearer token has expired.',
        401
      );
    }

    if (!Types.ObjectId.isValid(id)) {
      throw new problem.Problem(
        problem.E_BAD_REQUEST,
        'Invalid order ID format. Ensure the order ID is a valid Mongo database ObjectId string.',
        400
      );
    }

    // Retrieve the existing order from the database
    const existingOrder = await OrderModel.findById(id);
    if (!existingOrder) {
      throw new problem.Problem(problem.E_NOT_FOUND, 'Order not found.', 404);
    }
    // Validate required fields and generate error message
    let missingFields = [];
    if (!body.status) missingFields.push('status');
    if (!body.priority) missingFields.push('priority');
    if (!body.dish_ids) missingFields.push('dish_ids');

    if (missingFields.length > 0) {
      throw new problem.Problem(
        problem.E_BAD_REQUEST,
        `The following required fields are missing: ${missingFields.join(
          ', '
        )}.`,
        400
      );
    }

    // Update the existing order with new data
    Object.assign(existingOrder, body);
    existingOrder.updated_at = new Date();

    // Save the updated order
    await existingOrder.save();

    // Return the updated order in the desired format
    return existingOrder.toResultFormat();
  } catch (error) {
    // Handle errors based on status codes
    switch (error.status) {
      case 400:
        throw error;
      case 401:
        throw error;
      case 404:
        throw error;
      default:
        throw new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the service layer of the API server. Report the issue to API support.'
        );
    }
  }
};

exports.deleteOrder = async function (id, token) {
  try {
    const existingAuth = await AuthModel.findOne({ access_token: token });

    if (!existingAuth) {
      throw new problem.Problem(
        problem.E_UNAUTHORIZED,
        'Bearer token is invalid.',
        401
      );
    }
    // Check if the token is expired
    if (new Date() > new Date(existingAuth.expires_at)) {
      throw new problem.Problem(
        problem.E_UNAUTHORIZED,
        'Bearer token has expired.',
        401
      );
    }

    if (!Types.ObjectId.isValid(id)) {
      throw new problem.Problem(
        problem.E_BAD_REQUEST,
        'Invalid order ID format. Ensure the order ID is a valid Mongo database ObjectId string.',
        400
      );
    }
    const order = await OrderModel.findById(id);
    if (!order) {
      throw new problem.Problem(problem.E_NOT_FOUND, 'Order not found.', 404);
    }
    await OrderModel.deleteOne({ _id: id });
  } catch (error) {
    switch (error.status) {
      case 400:
        throw error;
      case 401:
        throw error;
      case 404:
        throw error;
      default:
        throw new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the service layer of the API server. Report the issue to API support.'
        );
    }
  }
};
