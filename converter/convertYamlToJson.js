import fs from 'fs';
import yaml from 'js-yaml';

const [inputFile, outputFile] = process.argv.slice(2);

if (!inputFile || !outputFile) {
  console.error('Usage: node convertYamlToJson.js <input.yaml> <output.json>');
  process.exit(1);
}

try {
  const yamlContent = fs.readFileSync(inputFile, 'utf8');
  const jsonData = yaml.load(yamlContent);
  fs.writeFileSync(outputFile, JSON.stringify(jsonData, null, 2));
  console.log(`Converted ${inputFile} to ${outputFile}`);
} catch (e) {
  console.error(e);
}
