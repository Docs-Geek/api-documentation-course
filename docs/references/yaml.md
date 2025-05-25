# 📒 YAML Reference Guide

**YAML (YAML Ain’t Markup Language)** is a human-friendly data format often used for configuration files, data exchange, and structured data representation. It’s known for being clean, readable, and easy to write by hand.

You can use an online YAML editor for practice and validation:

- [https://onlineyamltools.com/edit-yaml](https://onlineyamltools.com/edit-yaml)

---

## 🗂 YAML Basics

### YAML Key/Value Pairs

A YAML document is a collection of **key/value pairs**, written using colons (`:`) and indentation for nesting.

- Keys are typically strings.
- Values can be **strings, numbers, booleans, arrays, objects (called mappings), or null**.
- No quotes are needed for simple strings (unless they contain special characters or start with numbers).

**Example:**

```yaml
key: value
```

**Example — a simple student object:**

```yaml
name: John Doe # String property
age: 30 # Number property
isStudent: true # Boolean property
```

---

### YAML Arrays

A YAML array is an **ordered list of values**, indicated by a dash (`-`) followed by a space.

- Arrays can hold any valid YAML type.

**Example — a list of students:**

```yaml
students:
  - name: John Doe
    age: 30
  - name: Jane Doe
    age: 25
```

---

### Nesting YAML Mappings and Arrays

You can **nest mappings (objects) and arrays** using indentation to represent more complex data.

**Example — students with addresses:**

```yaml
students:
  - name: John Doe
    age: 30
    address:
      street: '123 Main St'
      city: 'Anytown'
      zipcode: '12345'
  - name: Jane Doe
    age: 25
    address:
      street: '256 West St'
      city: 'Anytown'
      zipcode: '12345'
```

---

## ✅ YAML Syntax Rules

- **Indentation matters** — use consistent spaces (no tabs).
- **Key/value pairs are separated by a colon and a space (`: `)**.
- **Arrays use dashes (`- `)** with proper indentation.
- **Strings do not require quotes** unless they include special characters, start with numbers, or need to preserve formatting.
- Supports these value types:

  - **String**
  - **Number**
  - **Boolean** (`true`, `false`)
  - **Array**
  - **Mapping (Object)**
  - **Null** (`null` or omit the value)

---

## ⚠️ Common Mistakes

- Mixing tabs and spaces for indentation.
- Forgetting the space after a colon.
- Inconsistent indentation levels.
- Missing dashes (`-`) in arrays.
- Adding trailing colons or commas (YAML doesn’t use commas to separate items).

**Bad Example:**

```yaml
name: John Doe
age: 30
students # Missing colon
  - name: Jane Doe
    age: 25
```
