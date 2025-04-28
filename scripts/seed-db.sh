#!/bin/bash

# Navigate to the project root directory
cd "$(dirname "$0")/.." || { echo "Error: Failed to navigate to project root."; exit 1; }

# Run the seed-db.js script using Node.js
node seed-db.js
