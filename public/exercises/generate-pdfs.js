import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm'; // Add this plugin to handle GitHub-Flavored Markdown
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import remarkRehype from 'remark-rehype';
import { exec } from 'child_process';
import path from 'path';

// Function to convert snake_case to Title Case
function snakeToTitleCase(str) {
  return str
    .replace(/_/g, ' ') // Replace underscores with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
}

// Function to run the Prince command to convert HTML to PDF
function convertToPDF(htmlFile) {
  const command = `prince -s pdf.css ${htmlFile}`;
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error converting to PDF: ${stderr}`);
      return;
    }
    console.log(`PDF created: ${htmlFile}`);
  });
}

// Directory containing Markdown files
const directoryPath = './'; // Specify the directory path
const markdownFiles = readdirSync(directoryPath).filter((file) =>
  file.endsWith('.md')
);

// Loop through all Markdown files
markdownFiles.forEach((mdFile) => {
  const markdownInput = readFileSync(path.join(directoryPath, mdFile), 'utf8');

  // Extract the title from the file name (without extension)
  const title = snakeToTitleCase(path.basename(mdFile, '.md'));

  // Process the Markdown file to HTML
  unified()
    .use(remarkParse) // Parse Markdown to AST
    .use(remarkGfm) // Handle GitHub-Flavored Markdown, including tables
    .use(remarkRehype, { allowDangerousHtml: true }) // Convert Markdown AST to HTML AST
    .use(rehypeRaw) // Allow raw HTML in Markdown
    // .use(rehypeHighlight, { subset: false })
    .use(rehypeStringify) // Convert AST to HTML
    .process(markdownInput)
    .then((file) => {
      const highlightedContent = String(file);

      // Create the HTML content
      const finalHtml = template(highlightedContent, title);

      // Write the HTML file
      const htmlFile = path.join(
        directoryPath,
        `${path.basename(mdFile, '.md')}.html`
      );
      writeFileSync(htmlFile, finalHtml, 'utf8');
      console.log(`HTML file generated: ${htmlFile}`);

      // Convert the HTML file to PDF
      convertToPDF(htmlFile);
    })
    .catch((err) => console.error(`Error processing file ${mdFile}:`, err));
});

// HTML template function
function template(content, title) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./css/pdf.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&display=swap" rel="stylesheet">
    <link href="themes/prism.css" rel="stylesheet" />

    <title>${title}</title>

  </head>
  <body>
    ${content}
    <script src="prism.js"></script>
  </body>
</html>
`;
}
