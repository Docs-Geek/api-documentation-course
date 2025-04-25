'use strict';

var utils = require('../utils/writer.js');
const problem = require('../utils/problem.js');
var Users = require('../service/UsersService.js');

module.exports.postUser = function postUser(req, res, next, body) {
  Users.postUser(body)
    .then(function (response) {
      res.status(201).json(response);
    })
    .catch(function (error) {
      if (error instanceof problem.Problem) {
        error.toResponse(res);
      } else {
        console.error('Error creating a user:', error);
        const serverError = new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the controller layer of the API server. Report the issue to API support.'
        );
        serverError.toResponse(res);
      }
    });
};

module.exports.getAllUsers = function getAllUsers(
  req,
  res,
  next,
  sort,
  order,
  fields,
  filter,
  limit,
  offset
) {
  console.log('Received query params:', req.query);
  console.log('Received filter param:', filter);

  console.log('Received sort param:', sort);
  console.log('Received order param:', order);
  Users.getAllUsers(sort, order, fields, filter, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      if (error instanceof problem.Problem) {
        error.toResponse(res);
      } else {
        console.error('Error retrieving a list of users:', error);
        const serverError = new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the controller layer of the API server. Report the issue to API support.'
        );
        serverError.toResponse(res);
      }
    });
};

module.exports.getUser = function getUser(req, res, next, fields) {
  console.log('the id in the controller is:', req.openapi.pathParams.id);
  const id = req.openapi.pathParams.id;
  Users.getUser(id, fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      if (error instanceof problem.Problem) {
        error.toResponse(res);
      } else {
        console.error("Error retrieving a user's details:", error);
        const serverError = new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the controller layer of the API server. Report the issue to API support.'
        );
        serverError.toResponse(res);
      }
    });
};

module.exports.putUser = function putUser(req, res, next, body, id) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    const unauthorizedError = new problem.Problem(
      problem.E_UNAUTHORIZED,
      'The bearer token is missing.'
    );
    return unauthorizedError.toResponse(res);
  }

  const token = authHeader.split(' ')[1];
  Users.putUser(body, id, token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      if (error instanceof problem.Problem) {
        error.toResponse(res);
      } else {
        console.error('Error updating a user:', error);
        const serverError = new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the controller layer of the API server. Report the issue to API support.'
        );
        serverError.toResponse(res);
      }
    });
};

module.exports.deleteUser = function deleteUser(req, res, next, id) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    const unauthorizedError = new problem.Problem(
      problem.E_UNAUTHORIZED,
      'The bearer token is missing.'
    );
    return unauthorizedError.toResponse(res);
  }

  const token = authHeader.split(' ')[1];
  Users.deleteUser(id, token)
    .then(function () {
      res.sendStatus(204);
    })
    .catch(function (error) {
      if (error instanceof problem.Problem) {
        error.toResponse(res);
      } else {
        console.error('Error deleting the user:', error);
        const serverError = new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the controller layer of the API server. Report the issue to API support.'
        );
        serverError.toResponse(res);
      }
    });
};
