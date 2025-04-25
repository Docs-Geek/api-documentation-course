#!/bin/bash

# Change directory to ./admin
cd ./admin || { echo "Directory ./admin not found!"; exit 1; }

npm install || { echo "npm install failed!"; exit 1; }

# Run npm start. It defaults to port: http://localhost:5173/
npm run dev