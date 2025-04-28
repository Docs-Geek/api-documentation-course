#!/bin/bash

# Navigate to the directory where the Docker Compose file is located
# cd "$(dirname "$0")" || { echo "Error: Failed to navigate to script directory."; exit 1; }

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
  echo "Docker is not installed. Please install Docker first."
  exit 1
fi

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
  echo "Docker is not running. Please start Docker."
  exit 1
fi

# Check if any containers are running
if [ "$(docker ps -q)" ]; then
  echo "Stopping running containers..."
  docker-compose down
  if [ $? -ne 0 ]; then
    echo "Failed to bring down Docker containers."
    exit 1
  fi
else
  echo "No running containers found."
fi

# Start Docker containers
echo "Starting Docker containers..."
docker-compose up -d
if [ $? -eq 0 ]; then
  echo "Docker containers started successfully."
else
  echo "Failed to start Docker containers."
  exit 1
fi
