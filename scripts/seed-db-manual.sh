#!/bin/bash

# Set MongoDB environment variables for the seeding script
export MONGO_HOST="localhost"
export MONGO_PORT="27017"

echo "Setting MongoDB connection to ${MONGO_HOST}:${MONGO_PORT}"

# Navigate to the project root directory
cd "$(dirname "$0")/.." || { echo "Error: Failed to navigate to project root."; exit 1; }

# Run the seed-db.js script using Node.js
node seed-db.js

# Check the exit status
if [ $? -eq 0 ]; then
  echo "Database seeded successfully!"
else
  echo "Database seeding failed."
  exit 1
fi