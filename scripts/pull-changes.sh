#!/bin/bash

# Ensure the script stops on errors
set -e

# Reset uncommitted changes
echo "Resetting uncommitted changes..."
git reset --hard

# Clean untracked files
echo "Cleaning untracked files..."
git clean -fd

# Checkout to the main branch
echo "Checking out to the main branch..."
git checkout main

# Pull the latest changes
echo "Pulling the latest changes..."
git pull

echo "Repository is up to date with the main branch."
