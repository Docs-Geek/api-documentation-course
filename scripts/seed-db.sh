#!/bin/bash

cd ./server || { echo "Error: 'server' directory not found."; exit 1; }

# Run the seed-db.js script using Node.js
node seed-db.js
