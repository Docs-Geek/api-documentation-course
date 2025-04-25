# Converting Code: JSON to YAML and YAML to JSON

## Convert JSON to YAML

1. **Create the Input File**:  
   In the `converter` directory, create a file named `input.json`.

2. **Add Your JSON Code**:  
   Place the JSON code you want to convert into `./converter/input.json`.

3. **Run the Conversion Command**:  
   Execute the following command to convert the JSON code to YAML:

   ```shell
   (cd converter && ./convert-json.sh)
   ```

4. **Check the Output**:  
   The converted YAML code will be saved as `output.yaml` in the `converter` directory.

## Convert YAML to JSON

1. **Create the Input File**:  
   In the `converter` directory, create a file named `input.yaml`.

2. **Add Your YAML Code**:  
   Place the YAML code you want to convert into `./converter/input.yaml`.

3. **Run the Conversion Command**:  
   Execute the following command to convert the YAML code to JSON:

   ```shell
   (cd converter && ./convert-yaml.sh)
   ```

4. **Check the Output**:  
   The converted JSON code will be saved as `output.json` in the `converter` directory.
