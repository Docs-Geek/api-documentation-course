#!/bin/bash

# Update package list
apt-get update

# Install GitHub CLI (gh)
apt-get install -y gh

# Display the CODESPACE_NAME environment variable
echo "CODESPACE_NAME: $CODESPACE_NAME"

# Change to the ./admin directory
cd ./admin || exit

# Create the .env file with the VITE_API_URL set to the CODESPACE_NAME value
echo "VITE_API_URL=https://$CODESPACE_NAME-8082.app.github.dev" > .env

# Confirm the .env file has been created
echo ".env file created in ./admin with VITE_API_URL=$CODESPACE_NAME"

# Check if node_modules or package-lock.json exists
if [ ! -d "node_modules" ] && [ ! -f "package-lock.json" ]; then
  echo "No node_modules or package-lock.json found. Installing dependencies..."
  npm install || { echo "npm install failed!"; exit 1; }
else
  echo "node_modules or package-lock.json already present. Skipping installation."
fi

npm run dev