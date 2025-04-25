#!/bin/bash

cd ./converter || { echo "Error: 'converter' directory not found."; exit 1; }

node convertJsonToYaml.js input.json output.yaml
