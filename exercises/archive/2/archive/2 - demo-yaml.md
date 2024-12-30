## Demo: Writing YAML

Here’s the rewritten content focusing on YAML instead of JSON, adapting the examples accordingly:

Editor:  
https://onlineyamltools.com/convert-yaml-to-json

### YAML Basics

YAML (YAML Ain't Markup Language) is a human-readable data serialization format. It uses indentation to represent structure, and it typically does not require quotes around strings unless they contain special characters. Here’s how to create a basic YAML object representing a student:

```yaml
name: John Doe
age: 30
```

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

### Indentation and Formatting

Proper indentation is crucial in YAML, as it indicates the structure of the data. Each level of indentation represents a new level of hierarchy. Unlike JSON, YAML does not require commas to separate items, which can make it more readable.

### Summary

YAML is a versatile, human-friendly format for data serialization. Understanding its structure and syntax is essential for working with configuration files, data transmission, and APIs. With this knowledge, you’re ready to explore OpenAPI documents and understand their YAML format.
