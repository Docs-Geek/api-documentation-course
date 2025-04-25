const fs = require('fs');
const yaml = require('js-yaml');

// Function to recursively replace 'description' and 'summary' fields
function recursiveReplace(obj) {
  if (typeof obj === 'object' && obj !== null) {
    for (let key in obj) {
      if (key === 'description') {
        // Check if the description is an object with a $ref field
        if (typeof obj[key] === 'object' && obj[key].$ref) {
          continue; // Skip replacing if it's a $ref object
        }

        // Check if the description is a string with the specific $ref
        if (
          typeof obj[key] === 'string' &&
          obj[key].trim() === "$ref: '#/components/schemas/Description'"
        ) {
          continue; // Skip replacing this field
        } else {
          obj[key] = '...'; // Replace description with '...'
        }
      } else if (key === 'summary') {
        obj[key] = '...'; // Replace summary with '...'
      } else if (typeof obj[key] === 'object') {
        recursiveReplace(obj[key]);
      }
    }
  }
}

// Function to load and modify the YAML file
function replaceDescriptionsAndSummaries(filePath) {
  try {
    // Read contents of the file
    const fileContents = fs.readFileSync(filePath, 'utf8');
    let data = yaml.load(fileContents);

    // Replace all descriptions and summaries
    recursiveReplace(data);

    // Save the modified YAML to the file
    const newYaml = yaml.dump(data);
    fs.writeFileSync(filePath, newYaml, 'utf8');
    console.log('Descriptions and summaries replaced successfully.');
  } catch (error) {
    console.error('Error processing the file:', error);
  }
}

// Usage
replaceDescriptionsAndSummaries('openapi.yml');
