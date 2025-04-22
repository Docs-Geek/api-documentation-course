#!/bin/bash

# Function to check for Node.js and npm
check_node_npm() {
  if command -v npm >/dev/null 2>&1; then
    echo "npm is already installed."
  else
    echo "npm is not installed. Please install Node.js and npm."
    exit 1
  fi
}

# Check if npm is installed
check_node_npm

# Function to install dependencies
install_dependencies() {
  local dir=$1
  echo "Navigating to the $dir directory..."
  cd "$dir" || { echo "Error: '$dir' directory not found."; exit 1; }

  # Check if package.json exists
  if [ ! -f package.json ]; then
    echo "Error: No package.json found in the '$dir' directory."
    exit 1
  fi

  # Install Node.js dependencies
  echo "Installing dependencies..."
  npm install

  if [ $? -eq 0 ]; then
    echo "Dependencies installed successfully in '$dir'."
  else
    echo "Failed to install dependencies in '$dir'."
    exit 1
  fi

  # Navigate back to the root directory
  cd ..
}

# Install dependencies for code base directories
install_dependencies "server"
install_dependencies "admin"
install_dependencies "admin-gitpod"
install_dependencies "openapi"
install_dependencies "slides"
install_dependencies "exercises"
install_dependencies "assets"
install_dependencies "converter"