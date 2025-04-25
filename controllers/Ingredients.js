'use strict';

var utils = require('../utils/writer.js');
const problem = require('../utils/problem');
var Ingredients = require('../service/IngredientsService');

module.exports.postIngredient = function postIngredient(req, res, next, body) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    const unauthorizedError = new problem.Problem(
      problem.E_UNAUTHORIZED,
      'The bearer token is missing.'
    );
    return unauthorizedError.toResponse(res);
  }

  const token = authHeader.split(' ')[1];

  Ingredients.postIngredient(body, token)
    .then(function (response) {
      res.status(201).json(response);
    })
    .catch(function (error) {
      if (error instanceof problem.Problem) {
        error.toResponse(res);
      } else {
        console.error('Error creating ingredient:', error);
        const serverError = new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the controller layer of the API server. Report the issue to API support.'
        );
        serverError.toResponse(res);
      }
    });
};

module.exports.getIngredientList = function getIngredientList(
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
  Ingredients.getIngredientList(sort, order, fields, filter, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      if (error instanceof problem.Problem) {
        error.toResponse(res);
      } else {
        console.error('Error retrieving dishes:', error);
        const serverError = new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the controller layer of the API server. Report the issue to API support.'
        );
        serverError.toResponse(res);
      }
    });
};

module.exports.getIngredient = function getIngredient(req, res, next, fields) {
  const id = req.openapi.pathParams.id;

  Ingredients.getIngredient(id, fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      if (error instanceof problem.Problem) {
        error.toResponse(res);
      } else {
        console.error("Error retrieving the ingredient's details:", error);
        const serverError = new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the controller layer of the API server. Report the issue to API support.'
        );
        serverError.toResponse(res);
      }
    });
};

module.exports.putIngredient = function putIngredient(
  req,
  res,
  next,
  body,
  id
) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    const unauthorizedError = new problem.Problem(
      problem.E_UNAUTHORIZED,
      'The bearer token is missing.'
    );
    return unauthorizedError.toResponse(res);
  }

  const token = authHeader.split(' ')[1];

  Ingredients.putIngredient(body, id, token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      if (error instanceof problem.Problem) {
        error.toResponse(res);
      } else {
        console.error('Error updating ingredient:', error);
        const serverError = new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the controller layer of the API server. Report the issue to API support.'
        );
        serverError.toResponse(res);
      }
    });
};

module.exports.deleteIngredient = function deleteIngredient(
  req,
  res,
  next,
  id
) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    const unauthorizedError = new problem.Problem(
      problem.E_UNAUTHORIZED,
      'The bearer token is missing.'
    );
    return unauthorizedError.toResponse(res);
  }

  const token = authHeader.split(' ')[1];

  Ingredients.deleteIngredient(id, token)
    .then(function () {
      res.sendStatus(204);
    })
    .catch(function (error) {
      if (error instanceof problem.Problem) {
        error.toResponse(res);
      } else {
        console.error('Error deleting the ingredient:', error);
        const serverError = new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the controller layer of the API server. Report the issue to API support.'
        );
        serverError.toResponse(res);
      }
    });
};
