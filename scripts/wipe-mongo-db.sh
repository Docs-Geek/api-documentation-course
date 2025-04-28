#!/bin/bash

# Check if running in Docker container
if [ "$IS_DOCKER_CONTAINER" = "true" ]; then
  echo "Running in container environment, using direct MongoDB connection..."
  
  # Check which MongoDB client is available
  if command -v mongosh &> /dev/null; then
    # Use mongosh if available
    mongosh --quiet --host mongodb --eval 'db = db.getSiblingDB("pos-db"); db.dropDatabase(); db = db.getSiblingDB("pos-db");' && \
    echo 'Database dropped and switched to pos-db'
  elif command -v mongo &> /dev/null; then
    # Fall back to older mongo client if available
    mongo --quiet --host mongodb --eval 'db = db.getSiblingDB("pos-db"); db.dropDatabase(); db = db.getSiblingDB("pos-db");' && \
    echo 'Database dropped and switched to pos-db'
  else
    # Skip if no MongoDB client is available
    echo "No MongoDB client (mongosh or mongo) found. Skipping database reset."
    exit 0
  fi
  exit $?
fi

# If not in the Docker container, locate the CONTAINER ID of the running 'mongo' image
CONTAINER_ID=$(docker ps -q --filter "ancestor=mongo")

# Check if a container ID was found
if [ -z "$CONTAINER_ID" ]; then
  echo "Error: No running container found for the 'mongo' image."
  exit 1
fi

# Run commands in the container
docker exec "$CONTAINER_ID" bash -c "
export PATH=\"\$PATH:/usr/bin/mongosh\" && \
mongosh --quiet --eval 'db = db.getSiblingDB(\"pos-db\"); db.dropDatabase(); db = db.getSiblingDB(\"pos-db\");' && \
echo 'Database dropped and switched to pos-db'
"

# Optionally, add a message that this process has finished
echo "MongoDB database reset complete and switched to pos-db."
