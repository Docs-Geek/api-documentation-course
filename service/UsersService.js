'use strict';

const sortingUtils = require('../utils/sortingUtils');
const problem = require('../utils/problem');
const mongoose = require('mongoose');
const UserModel = mongoose.model('User', require('../models/User').User);
const AuthModel = mongoose.model('Auth', require('../models/Auth').Auth);
const { Types } = require('mongoose');

exports.postUser = async function (body) {
  try {
    const existingUser = await UserModel.findOne({
      $or: [
        {
          $and: [{ email: body.email }, { user_name: body.user_name }],
        },
        { email: body.email },
        { user_name: body.user_name },
      ],
    });

    if (existingUser) {
      let errorMessage;
      if (
        existingUser.email === body.email &&
        existingUser.user_name === body.user_name
      ) {
        errorMessage =
          "Email and user name are already taken by an existing user. Update the existing user's details instead of creating a new user.";
      } else if (existingUser.email === body.email) {
        errorMessage =
          "Email is already taken by an existing user. Update the existing user's details instead of creating a new user.";
      } else if (existingUser.user_name === body.user_name) {
        errorMessage =
          "User name is already taken by an existing user. If the user you attempted to create already exists, update the existing user's details instead.";
      }

      throw new problem.Problem(problem.E_CONFLICT, errorMessage, 409);
    }

    const newUser = new UserModel(body);
    newUser.created_at = new Date();
    newUser.updated_at = new Date();
    await newUser.save();
    return newUser.toResultFormat();
  } catch (error) {
    switch (error.status) {
      case 400:
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

exports.getAllUsers = async function (
  sort,
  order,
  fields,
  filter,
  limit,
  offset
) {
  try {
    const sortOptions = sortingUtils.parseSortOptions(sort, order);
    const fieldsOptions = sortingUtils.parseFieldsOptions(fields);
    const filterOptions = sortingUtils.parseFilterOptions(filter);

    let usersQuery = UserModel.find(filterOptions, fieldsOptions);

    if (limit) {
      if (offset) {
        usersQuery = usersQuery.skip(offset).limit(limit);
      } else {
        usersQuery = usersQuery.limit(limit);
      }
    }

    const users = await usersQuery.sort(sortOptions).exec();
    const totalResults = await UserModel.countDocuments(filterOptions);

    const response = {
      results: users.map((user) => ({
        id: user._id,
        created_at: user.created_at,
        updated_at: user.updated_at,
        name: user.name,
        user_name: user.user_name,
        password: user.password,
        email: user.email,
        role: user.role,
      })),
      total_results: totalResults,
    };
    response.total_results = users.length;

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

exports.getUser = async function getUser(id, fields) {
  try {
    if (!Types.ObjectId.isValid(id)) {
      throw new problem.Problem(
        problem.E_BAD_REQUEST,
        'Invalid user ID format. Ensure the user ID is a valid Mongo database ObjectId string.',
        400
      );
    }

    const user = await UserModel.findById(id);
    if (!user) {
      throw new problem.Problem(problem.E_NOT_FOUND, 'User not found.', 404);
    }
    const fieldsOptions = sortingUtils.parseFieldsOptions(fields);
    let usersQuery = UserModel.findById(id, fieldsOptions);

    const response = await usersQuery.exec();

    return {
      id: response._id,
      created_at: response.created_at,
      updated_at: response.updated_at,
      name: response.name,
      user_name: response.user_name,
      password: response.password,
      email: response.email,
      role: response.role,
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

exports.putUser = async function (body, id, token) {
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
        'Invalid user ID format. Ensure the user ID is a valid Mongo database ObjectId string.',
        400
      );
    }
    const existingUser = await UserModel.findById(id);
    if (!existingUser) {
      throw new problem.Problem(problem.E_NOT_FOUND, 'User not found.', 404);
    }

    const existingUserWithSameEmailOrUserName = await UserModel.findOne({
      _id: { $ne: id },
      $or: [{ email: body.email }, { user_name: body.user_name }],
    });

    if (existingUserWithSameEmailOrUserName) {
      let errorMessage;
      if (
        existingUserWithSameEmailOrUserName.email === body.email &&
        existingUserWithSameEmailOrUserName.user_name === body.user_name
      ) {
        errorMessage =
          "Email and user name are already taken by an existing user. Update the existing user's details instead of creating a new user.";
      } else if (existingUserWithSameEmailOrUserName.email === body.email) {
        errorMessage =
          "Email is already taken by an existing user. Update the existing user's details instead of creating a new user.";
      } else if (
        existingUserWithSameEmailOrUserName.user_name === body.user_name
      ) {
        errorMessage =
          "User name is already taken by an existing user. If the user you attempted to create already exists, update the existing user's details instead.";
      }

      throw new problem.Problem(problem.E_CONFLICT, errorMessage, 409);
    }

    Object.assign(existingUser, body);
    existingUser.updated_at = new Date();
    await existingUser.save();
    return existingUser.toResultFormat();
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

exports.deleteUser = async function (id, token) {
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
        'Invalid user ID format. Ensure the user ID is a valid Mongo database ObjectId string.',
        400
      );
    }
    const user = await UserModel.findById(id);
    if (!user) {
      throw new problem.Problem(problem.E_NOT_FOUND, 'User not found.', 404);
    }
    await UserModel.deleteOne({ _id: id });
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
