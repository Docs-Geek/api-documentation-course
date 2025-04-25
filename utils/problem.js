exports.E_BAD_REQUEST = 'Internal server error';
exports.E_NOT_FOUND = 'Resource not found';
exports.E_UNAUTHORIZED = 'Unauthorized';
exports.E_FORBIDDEN = 'Forbidden';
exports.E_CONFLICT = 'Conflict with the current state of the resource';
exports.E_SERVER_FAULT = 'Internal server error.';
exports.E_CLIENT_FAULT = ' Bad request';

exports.Problem = class Problem extends Error {
  constructor(title, detail, status) {
    super();
    this.title = title;
    this.detail = detail;
    this.status = status;
  }

  toResponse(response) {
    let code = 500;

    switch (this.status) {
      case 400:
        code = 400;
        break;
      case 404:
        code = 404;
        break;
      case 401:
        code = 401;
        break;
      case 403:
        code = 403;
        break;
      case 409:
        code = 409;
        break;
    }

    const payload = {
      title: this.title,
      detail: this.detail, // Add detail to the payload
    };
    response.writeHead(code, { 'Content-Type': 'application/problem+json' });
    response.end(JSON.stringify(payload));
  }
};
