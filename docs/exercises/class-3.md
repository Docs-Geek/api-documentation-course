# Class #3: Offline Exercises

## Build a Movies API

**Exercise:** Build a Simple Movies API and Explore Data Type Constraints  
**Tools:** [Swagger Editor](https://editor.swagger.io/)

---

## 📖 Scenario

You’ve been asked to document a simple Movies API for a film database app. You’ll start by defining a basic API structure, then progressively add constraints, markdown descriptions, and troubleshoot validation errors using Swagger Editor.

---

## ✅ Prerequisites

While these exercises focus on YAML, it's important to understand the differences between JSON and YAML. Therefore, it is recommended that you review the following guides as a refresher on both formats and their distinctions:

- Read the [JSON Reference Guide](./references/json.md) for an overview of JSON.
- Read about [Type-specific keywords](https://json-schema.org/understanding-json-schema/reference/type) for a refresher on JSON data types and constraints.
- Read the [YAML Reference Guide](./references/yaml.md) for an overview of YAML.
- Consult the [JSON vs. YAML Reference Guide](./references/json-vs-yaml.md) to understand the differences between JSON and YAML.

Additionally, it would be beneficial to refresh your skills in Markdown:

- Complete the [Markdown Tutorial](https://www.markdowntutorial.com/) to enhance your Markdown proficiency.

---

## 1. Set Up the Base API

1. Search for and review the "Info Object" section of the official [OpenAPI documentation](https://swagger.io/specification/).

In [Swagger Editor](https://editor.swagger.io/):

2. Clear the default spec (**File** > **Clear Editor**).
3. Add this base structure to the left panel, representing the following tabular data as YAML:

| **Key**    | **Subkey**  | **Value**                             |
| ---------- | ----------- | ------------------------------------- |
| openapi    |             | 3.0.0                                 |
| info       | title       | Movies API                            |
|            | version     | 1.0                                   |
|            | description | An API for managing a movie database. |
| paths      |             | {}                                    |
| components | schemas     | {}                                    |

View the answer in the "Answers" section at the bottom.

## 2. Copy the starter `info.description`

1. On **line 5**, delete the existing text following `description:`.
2. To support multi-line Markdown in OpenAPI, add a pipe character `|` after `description:`.
3. Then, copy and paste the following content into the **left panel of Swagger Editor**, directly under `description: |`:

```txt
Overview The Movies api lets clients manage a simple moviedatabase like adding new movies retriveing movie details updating availabillity. Features Add new movies to the collection Retrieve a list of all movies Search by release year rating and availabillity Update movie availibility status Example usage Get all movies GET /movies Add a new movie POST /movies Notes all requests and responses use the application/json media type data models folow standard JSON Schema structures as defined in the OpenAPI Spec 3.0
```

4. Indent the pasted text to make it valid. Ensure any errors display in the right panel are resolved.

## 3. Style the API `info` section using Markdown

The text above is an unformatted block copied from an email with a developer. It contains grammatical errors, lacks proper punctuation, and has an improper structure. Your task is to revise this content into a clear, properly formatted API description using Markdown.

**_To format the text using Markdown:_**

- Correct any spelling, grammar, and punctuation issues.
- Use headings (e.g., `##` or `###`) for section titles like _Overview_, _Features_, _Example Usage_, and _Notes_.
- Use bullet points for lists under _Features_.
- Wrap API paths like `/movies` in backticks.
- Make HTTP methods like **GET** and **POST** bold.
- Turn the phrase _OpenAPI Specification 3.0_ into a Markdown link to the following URL:
  `https://swagger.io/specification`

After formatting, check the **right-side panel** in Swagger Editor for errors.
If any appear, read the error messages and resolve them as instructed.
Review the rendered documentation to make sure the output looks clean, readable, and properly styled.

---

## 4. Create a Movie Schema

1. Search for and review the "Components Object" section of the official [OpenAPI documentation](https://swagger.io/specification/).
2. Under `components/schemas`, remove the existing `{}` placeholder and define a `Movie` object.
3. Interpret the following table as the nested properties of the `Movie` object, with each property’s type specified accordingly.
   - Each property listed in the table should be added as a key within the `properties` section of the `Movie` schema, using the indicated type.

| Property      | Type      |
| :------------ | :-------- |
| `id`          | `string`  |
| `title`       | `string`  |
| `releaseYear` | `integer` |
| `rating`      | `number`  |
| `isAvailable` | `boolean` |

View the answer in the "Answers" section at the bottom.

---

## 5. Add Basic Constraints

Add constraints to the schema properties:

| Property      | Constraints                                    |
| :------------ | :--------------------------------------------- |
| `id`          | `minLength: 3`, `maxLength: 36`                |
| `title`       | `minLength: 2`                                 |
| `releaseYear` | `minimum: 1888`, `maximum: 2100`               |
| `rating`      | `minimum: 0`, `maximum: 10`, `multipleOf: 0.5` |
| `isAvailable` | _none_                                         |

---

View the answer in the "Answers" section at the bottom.

## 6. Add Markdown Descriptions

Add detailed descriptions to each property in the `Movie` schema using Markdown formatting.

Do your best to infer the purpose of each field and write clear, thoughtful descriptions. Be as thorough as possible — elaborate on how each property might be used in the context of the API (be creative).

---

## 7. Add an API Path with Example Response

In this section, you’ll learn how to define a new API path for retrieving all movies. We’ll focus on the correct YAML structure, using **tabs** for indentation to keep your OpenAPI definition valid and easy to read. You’ll also see how to include an example response that references the `Movie` schema we created earlier.

--- Paths Object

**To add a `GET /movies` API Path:**

1. Search for and review the "Paths Object" and "Path Item Object" sections of the official [OpenAPI documentation](https://swagger.io/specification/).

In [Swagger Editor](https://editor.swagger.io/):

1. **Start with `paths`:**
   Remove the `{}` after `paths:` so it’s ready to nest new paths underneath.

2. **Indent the path `/movies`:**
   Under `paths:`, add one **tab** and then write `/movies:`.

3. **Indent the HTTP method `get`:**
   Under `/movies:`, add one more **tab** (so now two total) and write `get:`.

4. **Indent the `summary`:**
   Under `get:`, add one more **tab** (three total) and write `summary:` followed by a description.

5. **Indent the `responses`:**
   On the next line under `get:`, using three **tabs**, add `responses:`.

6. **Indent the status code `'200'`:**
   Under `responses:`, add one more **tab** (four total) and write `'200':`.

7. **Indent the response `description`:**
   Under `'200':`, add one more **tab** (five total) and write `description:` and your description text.

8. **Indent the `content`:**
   Still under `'200':`, with five **tabs**, add `content:`.

9. **Indent the media type `application/json`:**
   Under `content:`, add one more **tab** (six total) and write `application/json:`.

10. **Indent the `schema`:**
    Under `application/json:`, add one more **tab** (seven total) and write `schema:`.

11. **Define the type and items:**
    Under `schema:`, add one more **tab** (eight total) and write:

    - `type: array`
    - `items:` (both at eight **tabs**)

    Then, under `items:`, add one more **tab** (nine total) and write:
    `$ref: '#/components/schemas/Movie'`

View the answer in the "Answers" section at the bottom.

---

### Tab Indentation Summary

| Level                 | Number of Tabs | Example Key                          |
| :-------------------- | :------------- | :----------------------------------- |
| Root                  | 0              | `paths:`                             |
| Path (`/movies`)      | 1              | `/movies:`                           |
| Method (`get`)        | 2              | `get:`                               |
| Summary / Responses   | 3              | `summary:` / `responses:`            |
| Status Code (`200`)   | 4              | `'200':`                             |
| Description / Content | 5              | `description:` / `content:`          |
| Media Type            | 6              | `application/json:`                  |
| Schema                | 7              | `schema:`                            |
| Schema Details        | 8              | `type: array` / `items:`             |
| Items Reference       | 9              | `$ref: '#/components/schemas/Movie'` |

---

## 8. Break It On Purpose

Intentionally introduce a validation error. For example:

- Misspell a constraint (`minLenght` instead of `minLength`)
- Set a string value where a number is expected (`minimum: "zero"`)
- Remove a required property  
   Observe the error messages in the Swagger Editor.

---

## 9. Add Required Properties

Under the `Movie` schema, add a `required` array. The following object properties are required:

- id
- title
- releaseYear
- rating

---

## End Goal

By the end of this exercise, you should have:

- A basic Movies API with a `GET /movies` endpoint
- A `Movie` schema with multiple data types and constraints
- Markdown-enhanced descriptions
- Experience reading and resolving validation errors in Swagger Editor

---

## Answers

### 1. Set Up the Base API

```yaml
openapi: 3.0.0
info:
  title: Movies API
  version: '1.0'
  description: An API for managing a movie database.
paths: {}
components:
  schemas: {}
```

### 4. Create a Movie Schema

```yaml
components:
  schemas:
    Movie:
      type: object
      properties:
        id:
          type: string
        title:
          type: string
        releaseYear:
          type: integer
        rating:
          type: number
        isAvailable:
          type: boolean
```

### 5. Add Basic Constraints

```yaml
properties:
  id:
    type: string
    minLength: 3
    maxLength: 36
  title:
    type: string
    minLength: 2
  releaseYear:
    type: integer
    minimum: 1888
    maximum: 2100
  rating:
    type: number
    minimum: 0
    maximum: 10
    multipleOf: 0.5
  isAvailable:
    type: boolean
```

### 7. Add an API Path with Example Response

```yaml
paths:
  /movies:
    get:
      summary: Get all movies
      responses:
        '200':
          description: List of movies
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Movie'
```

### 9. Add Required Properties

```yaml
required:
  - id
  - title
  - releaseYear
  - rating
```
