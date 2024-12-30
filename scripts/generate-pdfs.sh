#!/bin/bash

cd ./exercises || { echo "Directory ./exercises not found!"; exit 1; }

node generate-pdfs.js || { echo "Failed to generate PDFs."; exit 1; }