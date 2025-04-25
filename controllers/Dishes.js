'use strict';

var utils = require('../utils/writer.js');
const problem = require('../utils/problem');
var Dishes = require('../service/DishesService');

module.exports.postDishes = function postDishes(req, res, next, body) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    const unauthorizedError = new problem.Problem(
      problem.E_UNAUTHORIZED,
      'The bearer token is missing.'
    );
    return unauthorizedError.toResponse(res);
  }

  const token = authHeader.split(' ')[1];
  Dishes.postDishes(body, token)
    .then(function (response) {
      res.status(201).json(response);
    })
    .catch(function (error) {
      if (error instanceof problem.Problem) {
        error.toResponse(res);
      } else {
        console.error('Error creating order:', error);
        const serverError = new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the controller layer of the API server. Report the issue to API support.'
        );
        serverError.toResponse(res);
      }
    });
};

module.exports.getDishList = function getDishList(
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
  // Decode URL-encoded parameters if needed (Express usually handles this)
  console.log('Received query params:', req.query);
  console.log('Received sort param:', sort);
  console.log('Received order param:', order);
  console.log('Received filter param:', filter);
  console.log('Received fields param:', fields);

  Dishes.getDishList(sort, order, fields, filter, limit, offset)
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

module.exports.getDish = function getDish(req, res, next, fields) {
  const id = req.openapi.pathParams.id;

  Dishes.getDish(id, fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      if (error instanceof problem.Problem) {
        error.toResponse(res);
      } else {
        console.error("Error retrieving the dish's details:", error);
        const serverError = new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the controller layer of the API server. Report the issue to API support.'
        );
        serverError.toResponse(res);
      }
    });
};

module.exports.getDishIngredients = function getDishIngredients(
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
  console.log('Received sort param:', sort);
  console.log('Received order param:', order);
  console.log('Received select param:', filter);
  console.log('Received include param:', fields);

  const id = req.openapi.pathParams.id;
  Dishes.getDishIngredients(id, sort, order, fields, filter, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      if (error instanceof problem.Problem) {
        error.toResponse(res);
      } else {
        console.error("Error retrieving the dish's ingredients:", error);
        const serverError = new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the controller layer of the API server. Report the issue to API support.'
        );
        serverError.toResponse(res);
      }
    });
};

module.exports.putDish = function putDish(req, res, next, body, id) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    const unauthorizedError = new problem.Problem(
      problem.E_UNAUTHORIZED,
      'The bearer token is missing.'
    );
    return unauthorizedError.toResponse(res);
  }

  const token = authHeader.split(' ')[1];
  Dishes.putDish(body, id, token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      if (error instanceof problem.Problem) {
        error.toResponse(res);
      } else {
        console.error('Error updating dish:', error);
        const serverError = new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the controller layer of the API server. Report the issue to API support.'
        );
        serverError.toResponse(res);
      }
    });
};

module.exports.deleteDish = function deleteDish(req, res, next, id) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    const unauthorizedError = new problem.Problem(
      problem.E_UNAUTHORIZED,
      'The bearer token is missing.'
    );
    return unauthorizedError.toResponse(res);
  }

  const token = authHeader.split(' ')[1];
  Dishes.deleteDish(id, token)
    .then(function () {
      res.sendStatus(204);
    })
    .catch(function (error) {
      if (error instanceof problem.Problem) {
        error.toResponse(res);
      } else {
        console.error('Error deleting the dish:', error);
        const serverError = new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the controller layer of the API server. Report the issue to API support.'
        );
        serverError.toResponse(res);
      }
    });
};
