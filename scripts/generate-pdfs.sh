#!/bin/bash

# Check if running in Docker container or if exercises directory doesn't exist
if [ "$IS_DOCKER_CONTAINER" = "true" ] || [ ! -d "./exercises" ]; then
    echo "Skipping PDF generation - either running in container environment or exercises directory doesn't exist."
    exit 0
fi

cd ./exercises || { echo "Directory ./exercises not found!"; exit 1; }

node generate-pdfs.js || { echo "Failed to generate PDFs."; exit 1; }