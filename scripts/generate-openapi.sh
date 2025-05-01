#!/bin/bash

# Change directory to ./openapi
cd ./openapi || { echo "Directory ./openapi not found!"; exit 1; }

# Check if openapi.yml exists
if [ -f openapi.yml ]; then
  echo "openapi.yml already exists. Exiting script."
  exit 0
fi

# Check if openapi.original.yml exists, if not create a basic template
if [ ! -f openapi.original.yml ]; then
  echo "openapi.original.yml not found. Creating a basic template..."
  cat > openapi.original.yml << 'EOF'
openapi: 3.0.0
info:
  title: Restaurant API
  description: API for restaurant management
  version: 1.0.0
paths:
  /placeholder:
    get:
      summary: Placeholder endpoint
      description: This is a placeholder endpoint. Replace with actual API paths.
      responses:
        '200':
          description: Successful operation
EOF
  echo "Created basic openapi.original.yml template."
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
