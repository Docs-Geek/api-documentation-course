'use strict';

const sortingUtils = require('../utils/sortingUtils');
const problem = require('../utils/problem');
const mongoose = require('mongoose');
const AuthModel = mongoose.model('Auth', require('../models/Auth').Auth);
const UserModel = mongoose.model('User', require('../models/User').User);
const { Types } = require('mongoose');
const { v4: uuidv4 } = require('uuid');
exports.postAuthLogin = async function (body) {
  try {
    const existingUser = await UserModel.findOne({ user_name: body.user_name });

    if (!existingUser) {
      throw new problem.Problem(problem.E_NOT_FOUND, 'User not found.', 404);
    }

    if (body.password !== existingUser.password) {
      throw new problem.Problem(
        problem.E_UNAUTHORIZED,
        "The user's password is incorrect.",
        401
      );
    }

    const existingAuth = await AuthModel.findOne({ user_name: body.user_name });
    if (existingAuth) {
      // Delete the existing AuthModel associated with the user
      await AuthModel.deleteOne({ user_name: body.user_name });
    }

    const auth = new AuthModel({
      created_at: new Date(),
      updated_at: new Date(),
      access_token: uuidv4(),
      // 30 minutes
      expires_at: new Date(Date.now() + 30 * 60 * 1000),
      refresh_token: uuidv4(),
      token_type: 'Bearer',
      user_name: body.user_name,
    });

    await auth.save();
    return auth;
  } catch (error) {
    console.error('Error encountered:', error);
    switch (error.status) {
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

exports.postAuthRefreshToken = async function (body) {
  try {
    const existingAuth = await AuthModel.findOne({
      refresh_token: body.refresh_token,
    });
    if (!existingAuth) {
      throw new problem.Problem(
        problem.E_NOT_FOUND,
        'Refresh token not found.',
        404
      );
    }

    existingAuth.created_at = new Date();
    existingAuth.updated_at = new Date();
    existingAuth.access_token = uuidv4();
    existingAuth.expires_at = new Date(Date.now() + 30 * 60 * 1000);
    existingAuth.refresh_token = uuidv4();
    await existingAuth.save();

    return existingAuth;
  } catch (error) {
    switch (error.status) {
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
