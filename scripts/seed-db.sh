#!/bin/bash

# Run the seed-db.js script using Node.js
node seed-db.js || { echo "Error: Node.js script failed to run."; exit 1; }