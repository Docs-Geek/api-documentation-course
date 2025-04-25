'use strict';

var utils = require('../utils/writer.js');
const problem = require('../utils/problem');
var Auth = require('../service/AuthService');

module.exports.postAuthLogin = function postAuthLogin(req, res, next, body) {
  Auth.postAuthLogin(body)
    .then(function (response) {
      res.status(201).json(response);
    })
    .catch(function (error) {
      if (error instanceof problem.Problem) {
        error.toResponse(res);
      } else {
        console.error('An error was encountered:', error);
        const serverError = new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the controller layer of the API server. Report the issue to API support.'
        );
        serverError.toResponse(res);
      }
    });
};

module.exports.postAuthRefreshToken = function postAuthRefreshToken(
  req,
  res,
  next,
  body
) {
  Auth.postAuthRefreshToken(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      if (error instanceof problem.Problem) {
        error.toResponse(res);
      } else {
        console.error('An error was encountered:', error);
        const serverError = new problem.Problem(
          problem.E_SERVER_FAULT,
          'There was an issue originating from the controller layer of the API server. Report the issue to API support.'
        );
        serverError.toResponse(res);
      }
    });
};
