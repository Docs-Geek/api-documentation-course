# Class #2: Teacher Aid - JSON

The following is a teaching aid for the instructor for performing demonstrations during live-virtual training calls.

## JSON

JSON Editor:

- [https://jsoneditoronline.org/](https://jsoneditoronline.org/)

### JSON Objects

A JSON object is a collection of key/value pairs enclosed in curly braces `{}`.

```json
{
  "key": "value"
}
```

Each key is a string and should be enclosed in double quotes. Values can be strings, numbers, objects, arrays, booleans (`true`/`false`), or `null`.

Let's create a object that represents a student.

```json
{
  "name": "John Doe",
  "age": 30
}
```

### JSON Arrays

Let's say there are multiple students. To represent a list of students, we would use a JSON array:

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

A JSON array is an ordered list of values enclosed in square brackets `[]`. Values can be of any type: strings, numbers, objects, arrays, booleans, or `null`.

### Nesting JSON Objects and Arrays

Let's say there's more we want to describe about our students, for example, their address. An address is comprised of various related prooperties, like street, city, zip code, etc, so to do this we need to nest those properties.

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

JSON supports nesting of objects and arrays to represent more complex data structures.
