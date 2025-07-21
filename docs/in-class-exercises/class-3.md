# Class #3: In-Class Exercises

## 1. Practice YAML: Write a minimal OpenAPI spec

1. Open Swagger Editor:
   - [https://editor.swagger.io/](https://editor.swagger.io/)
2. At the top of the Swagger editor interface, click **File** and select **Clear Editor**.
   - The left panel will now be empty.
3. Type the following YAML code into the left panel:

```yaml
openapi: 3.0.3
info:
  title: Point of Service (POS) API
  version: '1.0'
paths: {}
```

## 2. Extending the API `info` object

1. Find the line containing the text **`info:`**.
2. Add a line break below it.
3. Create a new key called `contact:` — remember, in YAML a key is followed by a colon (`:`).
4. The `contact` key holds an object. To define this:
   - Add a line break after `contact:`
   - Nest the following key-value pairs underneath it, making sure they're at the same indentation level (just like the keys inside the `info` object you added earlier):

| Key   | Value            |
| ----- | ---------------- |
| name  | POS Support Team |
| url   | pos.io/api       |
| email | support@pos.io   |

5. Below the object you just created, create another key called `license`, and nest the following key-value pairs underneath it.

| Key  | Value                                           |
| ---- | ----------------------------------------------- |
| name | Apache 2.0                                      |
| url  | http://www.apache.org/licenses/LICENSE-2.0.html |

---

## 3. Write `info.description` in Markdown

Prerequisites:

1. Download the starter code:
   - Open Discord
   - Go to the `# class-3` channel.
   - Hover over the first message and click the clipboard icon to copy the starter code. Alternatively, you can highlight and copy it manually.
2. Go to Swagger Editor (if not already there)
   - [https://editor.swagger.io/](https://editor.swagger.io/)
3. In Swagger editor, ensure that the left panel is empty.

Perform the following steps:

1. On **line 5**, after `description:`, add a space, then a pipe character `|` to denote a multi-line string.
2. On **line 8**, make the word **Auth** a heading level 2 using `##`.
3. On **line 18**, make the word **Orders** a heading level 2 using `##`.
4. Make all instances of **POST** bold using `**POST**`.
5. Wrap all paths (like `/users`) in inline code using backticks `` ` ``
   - Hint: There should be a starting and closing backtick for each instance of text.
6. Convert the three steps under "To get an access token and authenticate your requests" into an ordered list (i.e., 1., 2., etc.)
7. On **line 21**, do a line break, and on **line 22** add ` ```json ` to start a code block.
   - Hint: The first backtick should be directly above the open curly brace (`{`) on the following line.
8. On **line 32**, do a line break after `}` and on **line 33** add ` ``` ` to close the code block.
9. Below the code block (on **line 33**), make the text **extended documentation** a link, with the link text `[extended documentation]` followed immediately by the URL `(www.pos.io/api/docs)`
10. Ensure there are no errors in the Swagger editor.
11. Type the number of lines of code in Swagger Editor into the MeritHub chat (exclude any blank lines at the end of the file).
