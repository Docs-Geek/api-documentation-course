'use strict';

const sortingUtils = require('../utils/sortingUtils');
const problem = require('../utils/problem');
const mongoose = require('mongoose');
const DishModel = mongoose.model('Dish', require('../models/Dish').Dish);
const IngredientModel = mongoose.model(
  'Ingredient',
  require('../models/Ingredient').Ingredient
);
const AuthModel = mongoose.model('Auth', require('../models/Auth').Auth);

const { Types } = require('mongoose');

exports.postDishes = async function (body, token) {
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

    const existingDish = await DishModel.findOne({ name: body.name });

    if (existingDish) {
      throw new problem.Problem(
        problem.E_CONFLICT,
        'Dish already exists. Update the existing dish or create a new dish.',
        409
      );
    }

    // Check if all ingredients exist and retrieve their quantities
    const ingredientsWithQty = await Promise.all(
      body.ingredients.map(async (ingredient) => {
        if (!Types.ObjectId.isValid(ingredient.ingredient_id)) {
          throw new problem.Problem(
            problem.E_BAD_REQUEST,
            'Invalid ingredient ID format. Ensure all ingredient IDs are valid Mongo database ObjectId strings.',
            400
          );
        }

        const foundIngredient = await IngredientModel.findById(
          ingredient.ingredient_id
        );
        if (!foundIngredient) {
          throw new problem.Problem(
            problem.E_NOT_FOUND,
            `Ingredient with ID ${ingredient.ingredient_id} not found.`,
            404
          );
        }
        return {
          ingredient_id: foundIngredient._id.toString(),
          name: foundIngredient.name,
          is_essential: ingredient.is_essential,
          in_stock_qty: foundIngredient.in_stock_qty,
        };
      })
    );

    // Filter out insufficient essential ingredients
    const insufficientEssentialIngredients = ingredientsWithQty.filter(
      (ingredient) => ingredient.is_essential && ingredient.in_stock_qty === 0
    );

    if (insufficientEssentialIngredients.length > 0) {
      const ingredientNames = insufficientEssentialIngredients
        .map((ingredient) => `${ingredient.name} (ID: ${ingredient.id})`)
        .join(', ');
      throw new problem.Problem(
        problem.E_CLIENT_FAULT,
        `The following essential ingredients are out of stock: ${ingredientNames}`,
        400
      );
    }

    const dish = new DishModel(body);
    dish.created_at = new Date();
    dish.updated_at = new Date();
    await dish.save();
    return dish.toResultFormat();
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

exports.getDishList = async function (
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

    console.log('the new filter value looks like:', filter);

    const filterOptions = sortingUtils.parseFilterOptions(filter);

    const sortOptions = sortingUtils.parseSortOptions(sort, order);
    const fieldsOptions = sortingUtils.parseFieldsOptions(fields);

    let dishesQuery = DishModel.find(filterOptions, fieldsOptions);

    if (limit) {
      if (offset) {
        dishesQuery = dishesQuery.skip(offset).limit(limit);
      } else {
        dishesQuery = dishesQuery.limit(limit);
      }
    }

    const dishes = await dishesQuery.sort(sortOptions).exec();
    const totalResults = await DishModel.countDocuments(filterOptions);
    // response.total_results = dishes.length;

    const response = {
      results: dishes.map((dish) => ({
        id: dish._id,
        created_at: dish.created_at,
        updated_at: dish.updated_at,
        name: dish.name,
        description: dish.description,
        category: dish.category,
        preparation_time: dish.preparation_time,
        price: dish.price,
        image_name: dish.image_name,
        station: dish.station,
        ingredients: dish.ingredients,
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

exports.getDish = async function getDish(id, fields) {
  try {
    if (!Types.ObjectId.isValid(id)) {
      throw new problem.Problem(
        problem.E_BAD_REQUEST,
        'Invalid dish ID format. Ensure the dish ID is a valid Mongo database ObjectId string.',
        400
      );
    }
    const dish = await DishModel.findById(id);
    if (!dish) {
      throw new problem.Problem(problem.E_NOT_FOUND, 'Dish not found.', 404);
    }
    const fieldsOptions = sortingUtils.parseFieldsOptions(fields);

    let dishsQuery = DishModel.findById(id, fieldsOptions);

    const response = await dishsQuery.exec();

    return {
      id: response._id,
      created_at: response.created_at,
      updated_at: response.updated_at,
      name: response.name,
      description: response.description,
      category: response.category,
      price: response.price,
      preparation_time: response.preparation_time,
      image_name: response.image_name,
      station: response.station,
      ingredients: response.ingredients,
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
exports.getDishIngredients = async function (
  id,
  sort,
  order,
  fields,
  filter,
  limit,
  offset
) {
  try {
    // Validate the dish ID
    if (!Types.ObjectId.isValid(id)) {
      throw new problem.Problem(
        problem.E_BAD_REQUEST,
        `Invalid dish ID format. Ensure the dish ID is a valid Mongo database ObjectId string.`,
        400
      );
    }

    // Fetch the dish by ID
    const dish = await DishModel.findById(id);
    if (!dish) {
      throw new problem.Problem(problem.E_NOT_FOUND, 'Dish not found.', 404);
    }

    // Ensure dish.ingredients is an array and not empty
    if (!Array.isArray(dish.ingredients) || dish.ingredients.length === 0) {
      throw new problem.Problem(
        problem.E_NOT_FOUND,
        'Dish does not have any ingredients.',
        404
      );
    }

    if (filter && filter.includes('q.eq~')) {
      filter = filter.replace('q.eq~', 'name.eq~');
    }
    // Parse the sort, order, fields, and filter options
    const sortOptions = sortingUtils.parseSortOptions(sort, order);
    const fieldsOptions = sortingUtils.parseFieldsOptions(fields);
    const filterOptions = sortingUtils.parseFilterOptions(filter);

    // Count the total number of matching ingredients
    const totalResults = await IngredientModel.countDocuments({
      _id: {
        $in: dish.ingredients.map(
          (ingredientObj) => ingredientObj.ingredient_id
        ),
      },
      ...filterOptions,
    });

    // Fetch and filter ingredients
    let ingredientsQuery = IngredientModel.find({
      _id: {
        $in: dish.ingredients.map(
          (ingredientObj) => ingredientObj.ingredient_id
        ),
      },
      ...filterOptions,
    });

    if (fieldsOptions) {
      ingredientsQuery = ingredientsQuery.select(fieldsOptions);
    }

    if (limit) {
      if (offset) {
        ingredientsQuery = ingredientsQuery.skip(offset).limit(limit);
      } else {
        ingredientsQuery = ingredientsQuery.limit(limit);
      }
    }

    const ingredients = await ingredientsQuery.sort(sortOptions).exec();

    // Return the results with total_results
    return {
      total_results: totalResults,
      results: ingredients.map((ingredient) => ingredient.toResultFormat()),
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
exports.getDishIngredients = async function (
  id,
  sort,
  order,
  fields,
  filter,
  limit,
  offset
) {
  try {
    // Validate the dish ID
    if (!Types.ObjectId.isValid(id)) {
      throw new problem.Problem(
        problem.E_BAD_REQUEST,
        `Invalid dish ID format. Ensure the dish ID is a valid Mongo database ObjectId string.`,
        400
      );
    }

    // Fetch the dish by ID
    const dish = await DishModel.findById(id);
    if (!dish) {
      throw new problem.Problem(problem.E_NOT_FOUND, 'Dish not found.', 404);
    }

    // Ensure dish.ingredients is an array and not empty
    if (!Array.isArray(dish.ingredients) || dish.ingredients.length === 0) {
      throw new problem.Problem(
        problem.E_NOT_FOUND,
        'Dish does not have any ingredients.',
        404
      );
    }

    if (filter && filter.includes('.eq~q') && filter.endsWith('.eq~q')) {
      filter = filter.replace('.eq~q', '.eq~name');
    }

    // Parse the sort, order, fields, and filter options
    const sortOptions = sortingUtils.parseSortOptions(sort, order);
    const fieldsOptions = sortingUtils.parseFieldsOptions(fields);
    const filterOptions = sortingUtils.parseFilterOptions(filter);

    // Count the total number of matching ingredients
    const totalResults = await IngredientModel.countDocuments({
      _id: {
        $in: dish.ingredients.map(
          (ingredientObj) => ingredientObj.ingredient_id
        ),
      },
      ...filterOptions,
    });

    // Fetch and filter ingredients
    let ingredientsQuery = IngredientModel.find({
      _id: {
        $in: dish.ingredients.map(
          (ingredientObj) => ingredientObj.ingredient_id
        ),
      },
      ...filterOptions,
    });

    if (fieldsOptions) {
      ingredientsQuery = ingredientsQuery.select(fieldsOptions);
    }

    if (limit) {
      if (offset) {
        ingredientsQuery = ingredientsQuery.skip(offset).limit(limit);
      } else {
        ingredientsQuery = ingredientsQuery.limit(limit);
      }
    }

    const ingredients = await ingredientsQuery.sort(sortOptions).exec();

    // Return the results with total_results
    return {
      results: ingredients.map((ingredient) => ingredient.toResultFormat()),
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

exports.putDish = async function (body, id, token) {
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
        'Invalid dish ID format. Ensure the dish ID is a valid Mongo database ObjectId string.',
        400
      );
    }
    const existingDish = await DishModel.findById(id);
    if (!existingDish) {
      throw new problem.Problem(problem.E_NOT_FOUND, 'Dish not found.', 404);
    }

    const conflictingDish = await DishModel.findOne({
      _id: { $ne: id },
      name: body.name,
    });

    if (conflictingDish) {
      throw new problem.Problem(
        problem.E_CONFLICT,
        "Name is already used for an existing dish. Update the existing dish's details instead of creating a new dish.",
        409
      );
    }

    // Check if all ingredients exist and retrieve their quantities
    const ingredientsWithQty = await Promise.all(
      body.ingredients.map(async (ingredient) => {
        if (!Types.ObjectId.isValid(ingredient.ingredient_id)) {
          throw new problem.Problem(
            problem.E_BAD_REQUEST,
            'Invalid ingredient ID format. Ensure all ingredient IDs are valid Mongo database ObjectId strings.',
            400
          );
        }

        const foundIngredient = await IngredientModel.findById(
          ingredient.ingredient_id
        );
        if (!foundIngredient) {
          throw new problem.Problem(
            problem.E_NOT_FOUND,
            `Ingredient with ID ${ingredient.ingredient_id} not found.`,
            404
          );
        }
        return {
          ingredient_id: foundIngredient._id.toString(),
          name: foundIngredient.name,
          is_essential: ingredient.is_essential,
          in_stock_qty: foundIngredient.in_stock_qty,
        };
      })
    );

    const insufficientEssentialIngredients = ingredientsWithQty.filter(
      (ingredient) => ingredient.is_essential && ingredient.in_stock_qty === 0
    );

    if (insufficientEssentialIngredients.length > 0) {
      const ingredientNames = insufficientEssentialIngredients
        .map((ingredient) => `${ingredient.name} (ID: ${ingredient.id})`)
        .join(', ');
      throw new problem.Problem(
        problem.E_CLIENT_FAULT,
        `The following essential ingredients are out of stock: ${ingredientNames}`,
        400
      );
    }

    Object.assign(existingDish, body);

    existingDish.updated_at = new Date();

    await existingDish.save();

    return existingDish.toResultFormat();
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

exports.deleteDish = async function (id, token) {
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
        'Invalid dish ID format. Ensure the dish ID is a valid Mongo database ObjectId string.',
        400
      );
    }
    const dish = await DishModel.findById(id);
    if (!dish) {
      throw new problem.Problem(problem.E_NOT_FOUND, 'Dish not found.', 404);
    }
    await DishModel.deleteOne({ _id: id });
  } catch (error) {
    switch (error.status) {
      case 400:
        throw error;
      case 404:
        throw error;
      case 401:
        throw error;
      default:
        throw new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the service layer of the API server. Report the issue to API support.'
        );
    }
  }
};
