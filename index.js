'use strict';

const path = require('path');
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const oas3Tools = require('oas3-tools');
const cors = require('cors');

// Flexible MongoDB connection
const mongoHost = process.env.MONGO_HOST || 'pos-db';
const mongoPort = process.env.MONGO_PORT || '27017';
const databaseUrl = `mongodb://${mongoHost}:${mongoPort}/pos-db`;

console.log(`Attempting to connect to MongoDB at: ${databaseUrl}`);

mongoose
  .connect(databaseUrl)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Could not connect to MongoDB:', err);
    process.exit(1);
  });

const app = express();

// Allow all Codespaces *.app.github.dev origins
const allowedOriginPattern = /^https:\/\/[\w-]+\.app\.github\.dev$/;

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests from matching origins or no origin (e.g. server-to-server)
    if (!origin || allowedOriginPattern.test(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow credentials such as cookies, authorization headers, etc.
};

// Apply CORS middleware to the main app
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight (OPTIONS) requests globally

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
const serverPort = 80;
const options = {
  routing: {
    controllers: path.join(__dirname, './controllers'),
  },
};

const expressAppConfig = oas3Tools.expressAppConfig(
  path.join(__dirname, 'api/openapi.yaml'),
  options
);

const swaggerApp = expressAppConfig.getApp();

// Apply CORS middleware to Swagger app too
swaggerApp.use(cors(corsOptions));
swaggerApp.options('*', cors(corsOptions)); // Handle preflight for Swagger app

swaggerApp.use((req, res, next) => {
  console.log(`SwaggerApp request: ${req.method} ${req.url}`);
  next();
});

// Use Swagger app as middleware
app.use(swaggerApp);

// Initialize HTTP server
const server = http.createServer(app);
server.setTimeout(30000); // Set server timeout (30 seconds)

// Start the server
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
