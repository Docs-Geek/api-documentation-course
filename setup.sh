#!/bin/bash

Parse command-line arguments
SKIP_DOCKER=false
for arg in "$@"; do
  case $arg in
    --skip-docker)
      SKIP_DOCKER=true
      shift
      ;;
  esac
done

# Check if running in Docker container
if [ "$IS_DOCKER_CONTAINER" = "true" ]; then
  SKIP_DOCKER=true
fi

./scripts/make-sh-executable.sh

if [ $? -eq 0 ]; then
  echo "Successfully made scripts executable."
else
  echo "Failed to make scripts executable."
  exit 1
fi

./scripts/generate-openapi.sh

if [ $? -eq 0 ]; then
  echo "openapi.yml file successfully generated."
else
  echo "Failed to generate openapi.yml."
  exit 1
fi

# Skip Docker if running in a container
if [ "$SKIP_DOCKER" = "true" ]; then
  echo "Skipping Docker container startup as we're already in a container environment."
else
  ./scripts/start-docker.sh
  
  if [ $? -eq 0 ]; then
    echo "Docker successfully started."
  else
    echo "Failed to start docker."
    exit 1
  fi
fi

# Wipe the Mongo Database
./scripts/wipe-mongo-db.sh

# Check if the reset-mongo-db.sh script executed successfully
if [ $? -eq 0 ]; then
  echo "Database wiped successfully."
else
  echo "Failed to wipe the database."
  exit 1
fi

# Seed the database
./scripts/seed-db.sh

if [ $? -eq 0 ]; then
  echo "Database seeded successfully."
else
  echo "Failed to seed the database."
  exit 1
fi

