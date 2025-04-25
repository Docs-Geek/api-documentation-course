'use strict';

var utils = require('../utils/writer.js');
const problem = require('../utils/problem');
var Orders = require('../service/OrdersService');

module.exports.postOrder = function postOrder(req, res, next, body) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    const unauthorizedError = new problem.Problem(
      problem.E_UNAUTHORIZED,
      'The bearer token is missing.'
    );
    return unauthorizedError.toResponse(res);
  }

  const token = authHeader.split(' ')[1];
  Orders.postOrder(body, token)
    .then(function (response) {
      res.status(201).json(response);
    })
    .catch(function (error) {
      if (error instanceof problem.Problem) {
        error.toResponse(res); // Send the custom error response
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

module.exports.getOrderList = function getOrderList(
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
  Orders.getOrderList(sort, order, fields, filter, limit, offset)
    .then(function (response) {
      res.status(200).json(response);
    })
    .catch(function (error) {
      if (error instanceof problem.Problem) {
        error.toResponse(res);
      } else {
        console.error('Error retrieving a list of orders:', error);
        const serverError = new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the controller layer of the API server. Report the issue to API support.'
        );
        serverError.toResponse(res);
      }
    });
};

module.exports.getOrder = function getOrder(req, res, next, fields) {
  const id = req.openapi.pathParams.id;

  Orders.getOrder(id, fields)
    .then(function (response) {
      res.status(200).json(response);
    })
    .catch(function (error) {
      if (error instanceof problem.Problem) {
        error.toResponse(res); // Send the custom error response
      } else {
        console.error('Error getting order:', error);
        const serverError = new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the controller layer of the API server. Report the issue to API support.'
        );
        serverError.toResponse(res);
      }
    });
};

module.exports.getOrderDishes = function getOrderDishes(
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
  const id = req.openapi.pathParams.id;
  Orders.getOrderDishes(id, sort, order, fields, filter, limit, offset)
    .then(function (response) {
      res.status(200).json(response);
    })
    .catch(function (error) {
      if (error instanceof problem.Problem) {
        error.toResponse(res); // Send the custom error response
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

module.exports.putOrder = function putOrder(req, res, next, body, id) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    const unauthorizedError = new problem.Problem(
      problem.E_UNAUTHORIZED,
      'The bearer token is missing.'
    );
    return unauthorizedError.toResponse(res);
  }

  const token = authHeader.split(' ')[1];
  Orders.putOrder(body, id, token)
    .then(function (response) {
      utils.writeJson(res, response);
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

module.exports.deleteOrder = function deleteOrder(req, res, next, id) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    const unauthorizedError = new problem.Problem(
      problem.E_UNAUTHORIZED,
      'The bearer token is missing.'
    );
    return unauthorizedError.toResponse(res);
  }

  const token = authHeader.split(' ')[1];
  Orders.deleteOrder(id, token)
    .then(function () {
      res.sendStatus(204);
    })
    .catch(function (error) {
      if (error instanceof problem.Problem) {
        error.toResponse(res); // Send the custom error response
      } else {
        console.error('Error getting order:', error);
        const serverError = new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the controller layer of the API server. Report the issue to API support.'
        );
        serverError.toResponse(res);
      }
    });
};
