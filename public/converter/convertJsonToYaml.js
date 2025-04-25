import fs from 'fs';
import yaml from 'js-yaml';

const [inputFile, outputFile] = process.argv.slice(2);

if (!inputFile || !outputFile) {
  console.error('Usage: node convertJsonToYaml.js <input.json> <output.yaml>');
  process.exit(1);
}

try {
  const jsonContent = fs.readFileSync(inputFile, 'utf8');
  const jsonData = JSON.parse(jsonContent);
  const yamlData = yaml.dump(jsonData);
  fs.writeFileSync(outputFile, yamlData);
  console.log(`Converted ${inputFile} to ${outputFile}`);
} catch (e) {
  console.error(e);
}
