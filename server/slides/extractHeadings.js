const fs = require('fs');
const { JSDOM } = require('jsdom');

// Read HTML from an input file
const inputFile = 'extracth3s.html'; // Replace with your HTML file path
const outputFile = 'output.txt';

fs.readFile(inputFile, 'utf8', (err, htmlContent) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Use JSDOM to parse the HTML
  const dom = new JSDOM(htmlContent);
  const document = dom.window.document;

  // Get all h1 to h5 elements
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5');
  const output = [];

  headings.forEach((heading) => {
    const text = heading.textContent.trim();
    if (text) { // Check if text is not empty
      output.push(text);
    }
  });

  // Write the extracted headings to the output file
  fs.writeFile(outputFile, output.join('\n'), (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Headings have been extracted successfully!');
    }
  });
});
