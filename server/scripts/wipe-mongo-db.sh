#!/bin/bash

# Navigate to the 'scripts' directory
cd ./scripts || { echo "Error: 'scripts' directory not found."; exit 1; }

# Locate the CONTAINER ID of the running 'mongo' image
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
