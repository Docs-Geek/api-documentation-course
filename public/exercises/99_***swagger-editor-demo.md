## Swagger Editor

### Access Swagger Editor

- Open the port serving the `swagger-editor` container to access Swagger Editor.
- The file being served in the course repo is openapi.yml

### Understanding the Interface

- Swagger Editor features a split-screen layout. The left panel displays the OpenAPI file, while the right panel visualizes the rendered API documentation.
- The right panel provides a live preview of the OpenAPI file, allowing users to see the changes made in real-time.

### Writing the smallest possible OpenAPI spec

This is where what we learned about YAML comes into play. In Swagger Editor, the most comfortable way to create an API spec is using YAML.
Users can edit the OpenAPI file directly in the left panel. Any modifications made here will be reflected in the right panel, providing immediate feedback.

```yaml
openapi: 3.0.3
```

The errors tells us that we are missing required properties for the spec

```yaml
openapi: 3.0.3
info:
  title: Point of Service (POS) API
  version: '1.0'
paths: {}
```

Youll notice paths is empty.

If you remember back to our Json tutorial. An object is a container of properties, key value pairs. In this case, we are using this empty object as a placeholder to make it so there is no errors.

Experiment with editing the OpenAPI file by introducing deliberate errors. For example, removing the colon after `openapi` on the first line will trigger an error, highlighting the importance of correct syntax.

```yaml
openapi 3.0.3
```

Swagger Editor performs real-time validation of the OpenAPI file. If a validation error occurs, the error message will be displayed in the right panel, helping users identify and rectify issues promptly.

### Functionality

- Similar to Swagger UI, Swagger Editor includes the "Try it out" functionality, allowing users to interactively test API endpoints.
- One notable advantage of Swagger Editor is its ability to generate server-side and client-side code from the OpenAPI specification. This feature streamlines the process of bootstrapping API projects, saving time and effort for developers.

### Code-along

_Switch back to slides_

"Part 4: Hands-on with Swagger
Editor" > "Code-along: Creating a minimal OpenAPI spec"

====

## YAML

Here’s the rewritten content focusing on YAML instead of JSON, adapting the examples accordingly:

Editor:  
[https://jsonformatter.org/yaml-to-json](https://jsonformatter.org/yaml-to-json)

### YAML Basics

YAML (YAML Ain't Markup Language) is a human-readable data serialization format. It uses indentation to represent structure, and it typically does not require quotes around strings unless they contain special characters.

Here’s how to create a basic YAML object representing a student:

```yaml
name: John Doe
```

Convert it to see.

```yaml
name: John Doe
age: 30
```

Convert it to see.

### YAML Arrays

To represent multiple students in YAML, we can use a list format with hyphens (`-`). Here’s an example of a YAML array:

```yaml
students:
  - name: John Doe
    age: 30
  - name: Jane Doe
    age: 25
```

A YAML array is an ordered list of items, and each item starts with a hyphen followed by a space.

### Nesting YAML Objects and Arrays

To provide more detail about our students, such as their address, we can nest properties. Here’s how to define a nested object in YAML:

### Nested Objects

```yaml
students:
  - name: John Doe
    age: 30
    address:
      street: 123 Main St
      city: Anytown
      zipcode: 12345
  - name: Jane Doe
    age: 25
```

YAML supports nesting of objects and arrays, allowing you to represent complex data structures easily.

### Code-along

_Switch back to Code-along slide_

""Part 2: Practice Writing YAML" >
"Code-along: Convert the Given JSON into YAML""

_Slide on indentation then summary_
