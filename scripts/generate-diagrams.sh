#!/bin/bash

cd ./assets|| { echo "Directory ./assets not found!"; exit 1; }

# Directory containing the .mmd files
INPUT_DIR="./"

# Loop through all .mmd files in the directory
for file in "$INPUT_DIR"/*.mmd; do
    # Extract the base name and extension
    base_name=$(basename "$file" .mmd)
    file_name=$(basename "$file")

    # Check if the file name contains dimensions (e.g., 1500x500)
    if [[ "$base_name" =~ ([0-9]+x[0-9]+) ]]; then
        # Extract dimensions
        dimensions=${BASH_REMATCH[1]}
        width=$(echo $dimensions | cut -d'x' -f1)
        height=$(echo $dimensions | cut -d'x' -f2)

        # Generate the diagram with specified dimensions
        output_file="${INPUT_DIR}/${base_name}.png"
        mmdc -i "$file" -o "$output_file" -w 1600 -H 1200

        # Crop the image
        mogrify -crop "${dimensions}+0+0" "$output_file"
    else
        # Generate the diagram without cropping
        output_file="${INPUT_DIR}/${base_name}.png"
        mmdc -i "$file" -o "$output_file"
    fi
done
