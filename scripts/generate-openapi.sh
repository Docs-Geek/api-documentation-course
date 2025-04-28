#!/bin/bash

# Change directory to ./openapi
cd ./openapi || { echo "Directory ./openapi not found!"; exit 1; }

# Check if openapi.yml exists
if [ -f openapi.yml ]; then
  echo "openapi.yml already exists. Exiting script."
  exit 0
fi

# Make a copy of openapi.original.yml and name it openapi.yml
cp openapi.original.yml openapi.yml || { echo "Failed to copy openapi.original.yml"; exit 1; }

# Check if node_modules or package-lock.json exists
if [ ! -d "node_modules" ] && [ ! -f "package-lock.json" ]; then
  echo "No node_modules or package-lock.json found. Installing dependencies..."
  npm install || { echo "npm install failed!"; exit 1; }
else
  echo "node_modules or package-lock.json already present. Skipping installation."
fi

# Run the Node.js script
node wipeOpenApiDescription.js

# Check if the Node.js script ran successfully
if [ $? -ne 0 ]; then
  echo "Node script execution failed!"
  exit 1
else
  echo "Node script executed successfully."
fi
