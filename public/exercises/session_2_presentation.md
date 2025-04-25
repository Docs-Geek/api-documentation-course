## Tabular and Structured Data

### What is Structured Data?

A simple way to think about structured data is like a table in an Excel or Google Sheets spreadsheet. A table typically represents a specific type or class of entity. Each **row** corresponds to a unique record, usually identified by an **ID**, and each **column** represents an attribute of that record. The values in the columns store data about that record, meaning a single record can have multiple attributes.

### Why is Structured Data Important for APIs?

APIs rely on structured data to send and receive information. When acting as a client, you send structured data to an API, and in return, the server responds with structured data. This data is often exchanged in **JSON format**, which is conceptually similar to tabular data:

- Each record is represented as an **object**.
- Each attribute is stored as a **key-value pair**.

In some cases, structured data is sent as **form data** (key-value pairs), but JSON is the most common format for API communication. Understanding structured data helps in designing and consuming APIs effectively.
