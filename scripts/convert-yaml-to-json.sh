#!/bin/bash

cd ./converter || { echo "Error: 'converter' directory not found."; exit 1; }

node convertYamlToJson.js input.yaml output.json 
