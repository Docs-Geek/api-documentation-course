# JSON vs YAML Comparison Guide

A quick-reference guide to help you see the differences and similarities between **JSON** and **YAML** for structuring data.

---

## 📖 Overview

| **Feature**      | **JSON**                                   | **YAML**                                                           |
| :--------------- | :----------------------------------------- | :----------------------------------------------------------------- |
| Stands for       | JavaScript Object Notation                 | YAML Ain’t Markup Language                                         |
| Data Structure   | Objects (key/value pairs), Arrays, Values  | Mappings (key/value pairs), Sequences (arrays), Scalars            |
| Syntax Style     | Curly braces `{}` and square brackets `[]` | Indentation-based, no braces or brackets needed                    |
| Human Readable   | Reasonably readable                        | Very readable and clean                                            |
| Common Use Cases | APIs, config files, data exchange          | Config files (Docker, Kubernetes, CI/CD tools), data serialization |
| File Extension   | `.json`                                    | `.yaml` or `.yml`                                                  |

---

## 📑 Example — Single Object

| **JSON**            | **YAML**        |
| :------------------ | :-------------- |
| \`\`\`json          | \`\`\`yaml      |
| {                   | name: John Doe  |
| "name": "John Doe", | age: 30         |
| "age": 30           | isStudent: true |
| }                   | \`\`\`          |

---

## 📑 Example — Array of Objects

| **JSON**                           | **YAML**         |
| :--------------------------------- | :--------------- |
| \`\`\`json                         | \`\`\`yaml       |
| {                                  | students:        |
| "students": \[                     | - name: John Doe |
| { "name": "John Doe", "age": 30 }, | age: 30          |
| { "name": "Jane Doe", "age": 25 }  | - name: Jane Doe |
| ]                                  | age: 25          |
| }                                  | \`\`\`           |

---

## 📑 Example — Nested Objects

| **JSON**                 | **YAML**              |
| :----------------------- | :-------------------- |
| \`\`\`json               | \`\`\`yaml            |
| {                        | students:             |
| "students": \[           | - name: John Doe      |
| {                        | age: 30               |
| "name": "John Doe",      | address:              |
| "age": 30,               | street: "123 Main St" |
| "address": {             | city: "Anytown"       |
| "street": "123 Main St", | zipcode: "12345"      |
| "city": "Anytown",       | - name: Jane Doe      |
| "zipcode": "12345"       | age: 25               |
| }                        | address:              |
| }                        | street: "256 West St" |
| ]                        | city: "Anytown"       |
| }                        | zipcode: "12345"      |
| \`\`\`                   | \`\`\`                |

---

## ✅ Syntax Rules Summary

| **Rule**            | **JSON**                                    | **YAML**                               |
| :------------------ | :------------------------------------------ | :------------------------------------- |
| Key/Value separator | Colon + space (`: `), keys in double quotes | Colon + space (`: `), no quotes needed |
| Array indicator     | Square brackets `[]`                        | Dash `-` with indentation              |
| Object indicator    | Curly braces `{}`                           | Indentation (no braces)                |
| Quotes for strings  | Always double quotes `"`                    | Optional unless needed                 |
| Null value          | `null`                                      | `null` or empty                        |
| Comments            | Not supported natively                      | `#` for comments                       |
| Indentation         | Not significant                             | Significant (use spaces only)          |
| Trailing commas     | **Not allowed**                             | **Not allowed**                        |

---

## ⚠️ Common Mistakes

| **JSON**                               | **YAML**                               |
| :------------------------------------- | :------------------------------------- |
| Using single quotes for keys/strings   | Mixing tabs and spaces for indentation |
| Trailing commas in arrays/objects      | Forgetting to add a space after colons |
| Missing commas between key/value pairs | Inconsistent indentation levels        |
| Forgetting to quote special characters | Missing dash `-` for array items       |

---

## 📚 Handy Online Tools

- **JSON Editor:** [https://jsoneditoronline.org/](https://jsoneditoronline.org/)
- **YAML Editor:** [https://onlineyamltools.com/edit-yaml](https://onlineyamltools.com/edit-yaml)
