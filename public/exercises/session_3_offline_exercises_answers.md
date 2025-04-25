# Session #3: Offline Exercises - Answers

- **Question #1:** What type of endpoint is this: a collection endpoint or a specific resource endpoint?  
  **Answer:** It is a collection endpoint, as it represents a collection of resources—in this case, orders.

- **Question #2:** What status code is returned? Does it indicate that the API request was successful based on your knowledge of status codes?  
  **Answer:** A `200 OK` status code indicating a successful response.

- **Question #3:** Analyze the JSON response. Locate the "priority" field for the **first** and **last** records. How do these values differ from your previous request?  
  **Explanation:** The first request returned results sorted by default (ascending), while the second request sorted the results in descending order based on priority.

- **Question #4 (multi-part question):**

  1. What indicates it's a Curl request? (`curl`)
  2. What is the method used? (`GET`)
  3. What is the base URL? (`http://localhost:80`)
  4. What is the path? (`/orders`)
  5. What character precedes query parameters? (`?`)
  6. What are the query parameters? (`sort`, `order`, `fields`)
  7. What field is being sorted? (`priority`)
  8. What character separates query parameters? (`&`)
  9. What order is it being sorted in, and what is the default sorting order? (`desc` for this request, `asc` by default)
  10. What does the fields parameter do? (Filters the response to include only specified fields.)
  11. What fields are specified? (`table_number`, `status`, `priority`, `name`)
  12. What character separates these fields? (Pipe character `|`)

- **Question #5 (multi-part question):**
  1. What indicates it's a Curl request? `curl`
  2. What is the method used? `GET`
  3. What is the base URL? `http://localhost:80`
  4. What is the path? `/dishes`
  5. What is the query parameter used? `filter`
  6. What are the selection criteria? Filter the response to include only records where the category is Main Course and the station is hot.
