'use strict';

const path = require('path');
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const oas3Tools = require('oas3-tools');
const cors = require('cors'); // Import the cors middleware

// const databaseUrl = 'mongodb://pos-db:27017/pos-db'; // Using the service name

// Connect to MongoDB
// mongoose
//   .connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => {
//     console.error('Could not connect to MongoDB:', err);
//     process.exit(1);
//   });

// Initialize Express application
const app = express();

// Enable CORS for all routes
app.use(cors()); // Apply the cors middleware

// Middleware for parsing URL-encoded and JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Log incoming requests for debugging
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  console.log('Request headers:', req.headers);
  console.log('Request body:', req.body);
  next();
});

// Swagger configuration
const serverPort = 8080;
const options = {
  routing: {
    controllers: path.join(__dirname, './controllers'),
  },
};

const expressAppConfig = oas3Tools.expressAppConfig(
  path.join(__dirname, 'api/openapi.yaml'),
  options
);

// Get the Express app from the Swagger configuration
const swaggerApp = expressAppConfig.getApp();

// Use Swagger app as middleware
app.use(swaggerApp);

// Log middleware usage
app.use((req, res, next) => {
  console.log('Swagger middleware applied');
  next();
});

// Initialize HTTP server
const server = http.createServer(app);

// Set a timeout of 30 seconds (adjust this according to your needs)
server.setTimeout(30000); // 30 seconds

server.listen(serverPort, () => {
  console.log(
    'Your server is listening on port %d (http://localhost:%d)',
    serverPort,
    serverPort
  );
  console.log(
    'Swagger-ui is available on http://localhost:%d/docs',
    serverPort
  );
});
