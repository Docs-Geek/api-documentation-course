'use strict';

const sortingUtils = require('../utils/sortingUtils');
const problem = require('../utils/problem');
const mongoose = require('mongoose');
const IngredientModel = mongoose.model(
  'Ingredient',
  require('../models/Ingredient').Ingredient
);
const AuthModel = mongoose.model('Auth', require('../models/Auth').Auth);
const { Types } = require('mongoose');

exports.postIngredient = async function (body, token) {
  try {
    console.log('the token passed in the request is:', token);
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

    const existingIngredientByName = await IngredientModel.findOne({
      name: body.name,
    });
    if (existingIngredientByName) {
      throw new problem.Problem(
        problem.E_CONFLICT,
        "An ingredient is associated with the provided 'name'. Either update the existing ingredient or create a new one.",
        409
      );
    }
    const ingredient = new IngredientModel(body);
    ingredient.created_at = new Date();
    ingredient.updated_at = new Date();
    await ingredient.save();
    return ingredient.toResultFormat();
  } catch (error) {
    switch (error.status) {
      case 401:
        throw error;
      case 409:
        throw error;
      default:
        throw new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the service layer of the API server. Report the issue to API support.'
        );
    }
  }
};

exports.getIngredient = async function getIngredient(id, fields) {
  try {
    if (!Types.ObjectId.isValid(id)) {
      throw new problem.Problem(
        problem.E_BAD_REQUEST,
        'Invalid ingredient ID format. Ensure the ingredient ID is a valid Mongo database ObjectId string.',
        400
      );
    }

    const ingredient = await IngredientModel.findById(id);
    if (!ingredient) {
      throw new problem.Problem(
        problem.E_NOT_FOUND,
        'Ingredient not found.',
        404
      );
    }
    const fieldsOptions = sortingUtils.parseFieldsOptions(fields);
    let ingredientsQuery = IngredientModel.findById(id, fieldsOptions);

    const response = await ingredientsQuery.exec();

    return {
      id: response._id,
      created_at: response.created_at,
      updated_at: response.updated_at,
      name: response.name,
      price: response.price,
      in_stock_qty: response.in_stock_qty,
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

exports.getIngredientList = async function (
  sort,
  order,
  fields,
  filter,
  limit,
  offset
) {
  try {
    if (filter && filter.includes('q.eq~')) {
      filter = filter.replace('q.eq~', 'name.eq~');
    }

    const sortOptions = sortingUtils.parseSortOptions(sort, order);
    const fieldsOptions = sortingUtils.parseFieldsOptions(fields);
    const filterOptions = sortingUtils.parseFilterOptions(filter);

    let ingredientsQuery = IngredientModel.find(filterOptions, fieldsOptions);

    if (limit) {
      if (offset) {
        ingredientsQuery = ingredientsQuery.skip(offset).limit(limit);
      } else {
        ingredientsQuery = ingredientsQuery.limit(limit);
      }
    }

    const ingredients = await ingredientsQuery.sort(sortOptions).exec();
    const totalResults = await IngredientModel.countDocuments(filterOptions);

    const response = {
      results: ingredients.map((ingredient) => ({
        id: ingredient._id,
        created_at: ingredient.created_at,
        updated_at: ingredient.updated_at,
        name: ingredient.name,
        price: ingredient.price,
        in_stock_qty: ingredient.in_stock_qty,
      })),
      total_results: totalResults,
    };

    return response;
  } catch (error) {
    switch (error.status) {
      default:
        throw new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the service layer of the API server. Report the issue to API support.'
        );
    }
  }
};

exports.putIngredient = async function (body, id, token) {
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
        'Invalid ingredient ID format. Ensure the ingredient ID is a valid Mongo database ObjectId string.',
        400
      );
    }
    const existingIngredient = await IngredientModel.findById(id);
    if (!existingIngredient) {
      throw new problem.Problem(
        problem.E_NOT_FOUND,
        'Ingredient not found.',
        404
      );
    }

    // Validate required fields and generate error message
    let missingFields = [];
    if (!body.name) missingFields.push('name');
    if (!body.price) missingFields.push('price');
    // if (!body.in_stock_qty === undefined || body.in_stock_qty === null) {
    //   missingFields.push('in_stock_qty');
    // }

    if (missingFields.length > 0) {
      throw new problem.Problem(
        problem.E_BAD_REQUEST,
        `The following required fields are missing: ${missingFields.join(
          ', '
        )}.`,
        400
      );
    }

    if (existingIngredient.name !== body.name) {
      const existingIngredientHasSameName = await IngredientModel.findOne({
        name: body.name,
        _id: { $ne: existingIngredient._id },
      });

      if (existingIngredientHasSameName) {
        throw new problem.Problem(
          problem.E_CONFLICT,
          'Ingredient name already exists. Please choose a different name.',
          409
        );
      }
    }

    Object.assign(existingIngredient, body);
    existingIngredient.updated_at = new Date();
    await existingIngredient.save();
    return existingIngredient.toResultFormat();
  } catch (error) {
    switch (error.status) {
      case 400:
        throw error;
      case 401:
        throw error;
      case 404:
        throw error;
      case 409:
        throw error;
      default:
        throw new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the service layer of the API server. Report the issue to API support.'
        );
    }
  }
};
exports.deleteIngredient = async function (id, token) {
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
        'Invalid ingredient ID format. Ensure the ingredient ID is a valid Mongo database ObjectId string.',
        400
      );
    }
    const ingredient = await IngredientModel.findById(id);
    if (!ingredient) {
      throw new problem.Problem(
        problem.E_NOT_FOUND,
        'Ingredient not found.',
        404
      );
    }
    await IngredientModel.deleteOne({ _id: id });
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
