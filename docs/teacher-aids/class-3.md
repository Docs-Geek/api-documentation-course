# Class #3: Teacher Aid

## Prerequisites

- Open https://onlineyamltools.com/convert-json-to-yaml
- Open [Swagger Editor](https://editor.swagger.io/)

## 1. YAML: Describe "Inception"

- Go to the [JSON converter](https://jsonformatter.org/).
- Paste the following code into the left-side editor by hand:
  - To indent, hit the "SPACE" key twice. This editor does not support indentation using "TAB."

```yaml
title: Inception
director: Christopher Nolan
releaseYear: 2010
ratings:
  IMDB: 8.8
  Rotten Tomatoes: '87%'
  Metacritic: 74
genres:
  - Action
  - Sci-Fi
  - Thriller
cast:
  - name: Leonardo DiCaprio
    role: Cobb
  - name: Joseph Gordon-Levitt
    role: Arthur
  - name: Elliot Page
    role: Ariadne
```

- Click the "YAML to JSON" button:
  - If successful, the YAML you entered in the left panel is converted to JSON in the right panel, demonstrating YAML's compatibility with JSON.
  - If the YAML is invalid, you'll receive an error message.

### Next up:

- **Presentation:** Minimal OpenAPI spec

## 2. Writing a Minimal OpenAPI Specification

**Swagger Editor** is a robust platform for editing and visualizing OpenAPI specifications. Its interactive interface offers real-time validation, syntax highlighting, and integrated

### Prerequisites

- Before starting, ensure the Swagger Editor is cleared. File > Clear
- Swagger Editor features a split-screen layout, where the left panel displays the OpenAPI file, and the right panel shows a rendered, live preview of the API documentation.
- As you edit the OpenAPI file in the left panel, changes are instantly reflected in the right panel, providing real-time validation and feedback.

This is where our knowledge of YAML becomes useful. In Swagger Editor, using YAML is the most efficient way to create an API specification.

Let's start by creating a basic OpenAPI spec:

```yaml
openapi: 3.0.3
info:
  title: Point of Service (POS) API
  version: '1.0'
paths: {}
```

Swagger Editor validates your OpenAPI file in real time. If there is a validation error, it will appear in the right panel, helping you quickly identify and resolve issues.

You can also experiment by introducing errors. For example, if you remove the colon after `openapi` in the first line, an error will appear, demonstrating the importance of correct syntax.

### Next up

- In-class exercises:
  - Practice YAML: Write a Minimal OpenAPI Spec

## In-class exercises

### Answer: Extending the API `info` object

```yaml
contact:
  name: Course Discord server
  url: https://discord.gg/dPsnz5u9
  email: mark.wentowski@docsgeek.io
license:
  name: Apache 2.0
  url: http://www.apache.org/licenses/LICENSE-2.0.html
```

### Answer: Write `info.description` in Markdown

They are asked to paste the number of lines of code in the chat, which should be `35`.

````yaml
openapi: 3.0.3
info:
  title: Point of Service (POS) API
  version: '1.0'
  description: |
    A REST API to be used to create tableside and takeaway food ordering applications.

    ## Auth

    To create orders, you need to first create a user account then authenticate your user account for an access token.

    To get an access token and authenticate your requests:

    1. Create a User with **POST** `/users`.
    2. Pass your username and password to **POST** `/auth/token`.
    3. Add the access token to the authorization header of API calls to protected resources.

    ## Orders

    Orders are the heart of the API. Create an order with **POST** `/orders`, passing order details in the JSON request body:

    ```json
    {
      "name": "Benjamin",
      "table_number": 18,
      "dish_ids": [
        "66e6a90a5eb1ced30f93c32a",
        "66e6a90a5eb1ced30f93c31e"
      ],
      "special_requests": "No peanuts",
      "scheduled at": null
    }
    ```
    Refer to the [extended documentation](www.pos.io/api/docs) for detailed usage instructions.
paths: {}
````
