#!/bin/bash

# Pull latest changes from the remote repository.

# ./scripts/pull-changes.sh

# if [ $? -eq 0 ]; then
#   echo "The latest changes were pulled from the remote."
# else
#   echo "Failed to pull the latest changes from the remote."
#   exit 1
# fi

# Install packages inside code base folders.
./scripts/install-dependencies.sh

# Check if the install-dependencies.sh script executed successfully
if [ $? -eq 0 ]; then
  echo "Dependencies installed successfully."
else
  echo "Failed to install dependencies."
  exit 1
fi

./scripts/wipe-openapi-descriptions.sh

if [ $? -eq 0 ]; then
  echo "openapi.yml file successfully generated."
else
  echo "Failed to generate openapi.yml."
  exit 1
fi


./scripts/start-docker.sh

# Check if the reset-mongo-db.sh script executed successfully
if [ $? -eq 0 ]; then
  echo "Docker successfully started."
else
  echo "Failed to start docker."
  exit 1
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

./scripts/generate-diagrams.sh

if [ $? -eq 0 ]; then
  echo "Diagrams successfully generated."
else
  echo "Failed to generate diagrams."
  exit 1
fi

./scripts/generate-pdfs.sh

if [ $? -eq 0 ]; then
  echo "PDFs successfully generated."
else
  echo "Failed to generate PDFs."
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

