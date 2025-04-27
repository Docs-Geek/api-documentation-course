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

# Store the absolute path of the project root directory (assuming the script is run from the root)
PROJECT_ROOT=$(pwd)
echo "Project root detected as: $PROJECT_ROOT"

# Function to install dependencies
install_dependencies() {
  local dir=$1
  local target_dir="$PROJECT_ROOT/$dir"

  echo "Attempting to navigate to the $target_dir directory..."
  # Check if the target directory exists before trying to cd
  if [ ! -d "$target_dir" ]; then
    echo "Error: Directory '$target_dir' not found."
    # Optionally, decide if you want to exit or just skip this directory
    # exit 1 # Uncomment this line if failure for one directory should stop the whole script
    return 1 # Skip this directory and continue with the next
  fi

  cd "$target_dir" || { echo "Error: Failed to change directory to '$target_dir'."; return 1; }
  echo "Successfully navigated to $(pwd)"

  # Check if package.json exists
  if [ ! -f package.json ]; then
    echo "Error: No package.json found in the '$target_dir' directory."
    # Navigate back to the project root before returning/exiting
    cd "$PROJECT_ROOT" || { echo "Error: Failed to navigate back to project root '$PROJECT_ROOT'."; exit 1; }
    # exit 1 # Uncomment this line if failure for one directory should stop the whole script
    return 1 # Skip this directory and continue with the next
  fi

  # Install Node.js dependencies
  echo "Installing dependencies in '$target_dir'..."
  npm install

  if [ $? -eq 0 ]; then
    echo "Dependencies installed successfully in '$target_dir'."
  else
    echo "Failed to install dependencies in '$target_dir'."
    # Navigate back to the project root before returning/exiting
    cd "$PROJECT_ROOT" || { echo "Error: Failed to navigate back to project root '$PROJECT_ROOT'."; exit 1; }
    # exit 1 # Uncomment this line if failure for one directory should stop the whole script
    return 1 # Indicate failure for this directory
  fi

  # Navigate back to the project root directory
  echo "Navigating back to the project root directory: $PROJECT_ROOT"
  cd "$PROJECT_ROOT" || { echo "Error: Failed to navigate back to project root '$PROJECT_ROOT'."; exit 1; }
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

echo "Dependency installation process finished."