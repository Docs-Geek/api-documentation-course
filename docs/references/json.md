# JSON Reference Guide

**JSON (JavaScript Object Notation)** is a lightweight data format for structuring and exchanging data. It’s easy for humans to read and write, and easy for machines to parse and generate.

You can utilize the JSON editor to easily create and validate JSON:

- [https://jsoneditoronline.org/](https://jsoneditoronline.org/)

---

## 🗂 JSON Basics

### JSON Objects

A JSON object is an **unordered collection of key/value pairs**, enclosed in curly braces `{}`.

- Keys are always **strings in double quotes**.
- Values can be **strings, numbers, booleans, arrays, objects, or `null`**.

**Example:**

```json
{
  "key": "value"
}
```

**Example — a simple student object:**

```json
{
  // String property
  "name": "John Doe",
  // Number property
  "age": 30,
  // Boolean property
  "isStudent": true
}
```

---

### JSON Arrays

A JSON array is an **ordered list of values**, enclosed in square brackets `[]`.

- Each item in the array can be of any valid JSON type.

**Example — a list of students:**

```json
{
  "students": [
    {
      "name": "John Doe",
      "age": 30
    },
    {
      "name": "Jane Doe",
      "age": 25
    }
  ]
}
```

---

### Nesting JSON Objects and Arrays

You can **nest objects and arrays inside each other** to represent more complex data.

**Example — students with addresses:**

```json
{
  "students": [
    {
      "name": "John Doe",
      "age": 30,
      "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "zipcode": "12345"
      }
    },
    {
      "name": "Jane Doe",
      "age": 25,
      "address": {
        "street": "256 West St",
        "city": "Anytown",
        "zipcode": "12345"
      }
    }
  ]
}
```

---

## ✅ JSON Syntax Rules

- **Keys must be in double quotes.**
- **String values must also use double quotes.**
- No trailing commas after the last item in an object or array.
- Values can be:

  - **String** (`"text"`)
  - **Number** (`123`)
  - **Boolean** (`true` or `false`)
  - **Array**
  - **Object**
  - **null**

---

## ⚠️ Common Mistakes

- Using single quotes (`'`) instead of double quotes.
- Adding a trailing comma after the last property in an object or array.
- Forgetting to separate key/value pairs with a colon (`:`).
- Missing commas between key/value pairs.

**Bad Example:**

```json
{
  "name": "John Doe" // Single quotes — invalid in JSON
}
```
