# Class #4: Offline Exercises

In these exercises, we'll explore how to send API requests using **Curl**. **Curl** is a powerful command-line tool for making API requests. Unlike API clients like Postman that provide a graphical interface, Curl allows you to manually construct endpoint URLs, which is essential for understanding complex query parameters.

**Note:** Please manually type each URL instead of copying and pasting (except for the server URL). The goal is to become proficient in URL construction.

The instructions contain questions at various points. Please collect your answers to each question in a separate file. At the end of the exercises, you will be asked to paste your answers into the Class #4 Channel on the Discord server.

## Prerequisites

1. Go to [https://github.com//codespaces](https://github.com//codespaces) (sign in to GitHub if not already signed in).
2. Click the Codespace you created previously to open it.
3. Make the API server public. Refer to:
   - [https://api-course-docs.redocly.app/dev-setup#make-the-api-server-port-public](https://api-course-docs.redocly.app/dev-setup#make-the-api-server-port-public)
4. Copy the Server URL:
   - Hover over the API Server (Port 80), right-click, and select **Copy Local Address**. Paste the local address into a text file, such as one created using NotePad or another text editor.
5. Start the server by running `npm run start` in a terminal. Refer to:
   - [https://api-course-docs.redocly.app/dev-setup#start-the-api-server](https://api-course-docs.redocly.app/dev-setup#start-the-api-server)
6. Open a new terminal, click the plus (**+**) icon.
7. Click inside the terminal.

## Steps

Whenever you see `{GH-CODESPACES-SERVER-URL}` referenced, replace that placeholder with the server URL you copied previously.

### 1. Send an HTTP Request to the Collection Endpoint

1. In the terminal, type the following command (do not hit ENTER yet):

```bash
curl
```

2. Specify the request method as GET:

```bash
curl -X GET
```

3. Add the base URL (in quotes):

```bash
curl -X GET "{GH-CODESPACES-SERVER-URL}"
```

4. Add the path to the Dishes resource:

```bash
curl -X GET "{GH-CODESPACES-SERVER-URL}dishes"
```

5. If constructed correctly, your command should look like:

```bash
curl -X GET "{GH-CODESPACES-SERVER-URL}dishes"
```

6. Add `-i` after `curl` to include HTTP response headers:

```bash
curl -i -X GET "{GH-CODESPACES-SERVER-URL}dishes"
```

7. Use the `limit` parameter to only return `5` dishes:

```bash
curl -i -X GET "{GH-CODESPACES-SERVER-URL}dishes?limit=5"
```

<!--

curl -i -X GET 'https://animated-system-5vwg76449p6fx5q-80.app.github.dev/dishes?limit=5'

-->

**Question #1:** What type of endpoint is this: a collection endpoint or an endpoint used to retrieve a specific resource?

8. **Run the command.** You should see a lot of output in the terminal.
9. **Find the status code.** Scroll up to locate the line starting with `HTTP/2`.

**Question #2:** What status code is returned and what does it indicate about the request?

10. **Clear the terminal:**
    - Type the following command and hit Enter.

```bash
clear
```

### 2. Sort the Results of the Collection Endpoint

As we move to more complex query parameters, it's easier to write cURL commands in a text editor first, then copy them to the terminal.

1. **In a text editor, write the following Curl command:**

```bash
curl -i -X GET "{GH-CODESPACES-SERVER-URL}dishes?limit=5"
```

2. **Add query parameters to sort results:**

To improve readability, you can break long commands into multiple lines by adding a backslash (`\`) at the end of the first line, as shown below.

```bash
curl -i -X GET \
"{GH-CODESPACES-SERVER-URL}dishes?limit=5&sort=preparation_time&order=asc"
```

<!--

curl -i -X GET 'https://animated-system-5vwg76449p6fx5q-80.app.github.dev/dishes?limit=5&sort=preparation_time&order=asc'

-->

3. **Run the command:** Copy the command into the terminal, and hit ENTER to run the command.

   - Analyze the JSON response. What is the value of the `preparation_time` field for the **first** and **last** records?

4. Set the `order` parameter to `desc` instead of `asc` and run the command again.

<!--

curl -i -X GET 'https://animated-system-5vwg76449p6fx5q-80.app.github.dev/dishes?limit=5&sort=preparation_time&order=desc'

-->

**Question #3:** How do the values for `preparation_time` differ from your previous request?

5. **Clear the terminal again:**
   - Type the following command and hit Enter.

```bash
clear
```

### 3. Apply Projection Filters

To only include certain `fields` in the response, we'll use a projection filter. Let's switch over to the `/orders` endpoint this time.

- In the text editor, add the following code:

```shell
curl -i -X GET \
"{GH-CODESPACES-SERVER-URL}orders?sort=priority&order=desc&fields=table_number|status|priority|name"
```

Once again, we can use a line break with the backslash (`\`) character.

- Format the JSON response using the [JSON formatter](https://jsonformatter.org) to improve readability.

<!--

curl -i -X GET \
"https://animated-system-5vwg76449p6fx5q-80.app.github.dev/orders?sort=priority&order=desc&fields=table_number|status|priority|name"

-->

**Question #4 (multi-part question)**

This question is broken out into multiple parts:

1. What indicates it's a Curl request?
2. What is the method used?
3. What is the base URL?
4. What is the path?
5. What character precedes query parameters?
6. What are the query parameters?
7. What field is being sorted?
8. What character separates query parameters?
9. What is the sort order?
10. What does the `fields` parameter do?
11. What fields are specified?
12. What character separates these fields?

### 4. Apply Selection Filters

Now we will switch back to the `GET /dishes` endpoint. Once again, it's best to write the command in a text editor first.

1. **Start with Curl:**

```bash
curl
```

2. **Add `-i` and specify the method:**

```bash
curl -i -X GET
```

3. **Add the base URL and path:**

```bash
curl -i -X GET "{GH-CODESPACES-SERVER-URL}dishes"
```

4. **Add a selection filter for dishes in the "Main Course" category:**

```bash
curl -i -X GET \
"{GH-CODESPACES-SERVER-URL}dishes?limit=2&filter=category.eq~Main%20Course"
```

<!--

curl -i -X GET \
"https://animated-system-5vwg76449p6fx5q-80.app.github.dev/dishes?limit=2&filter=category.eq~Main%20Course"

-->

5. **Run the request:** Copy the command from the text editor and paste it into the terminal. Hit ENTER to run the command.

### 5. Chain Selection Filters

To filter dishes that are "Main Course" and belong to the "hot" station, modify your previous command:

1. **Add another filter with a pipe separator:**

```bash
curl -i -X GET \
"{GH-CODESPACES-SERVER-URL}dishes?filter=category.eq~Main%20Course|station.eq~hot"
```

<!--

curl -i -X GET \
"https://animated-system-5vwg76449p6fx5q-80.app.github.dev/dishes?filter=category.eq~Main%20Course|station.eq~hot"
 -->

**Question #5 (multi-part question)**

This question is broken out into multiple parts:

1. What is the query parameter being used?
2. Which fields are being filtered?
3. What comparison operators are being utilized, and what is their purpose?
4. What character precedes the value on which a filter is applied?
5. What are the selection criteria described in simple terms?

### 6. Exercise Completion

Congratulations! You have completed all the tasks for this session.

In the Class #4 channel on the Discord server, paste your answers.

<!-- ## Answers

- **Question #1:** What type of endpoint is this: a collection endpoint or an endpoint used to retrieve a specific resource?
  **Answer:** It is a collection endpoint, as it represents a collection of resources—in this case, orders.

- **Question #2:** What status code is returned? Does it indicate that the API request was successful based on your knowledge of status codes?
  **Answer:** A `200 OK` status code indicating a successful response.

- **Question #3:** How do the values for `preparation_time` differ from your previous request
  **Answer:** The first request returned results sorted in ascending order, while the second request sorted the results in descending.

**Question #4 (multi-part question):**

1. What indicates it's a Curl request? (`curl`)
2. What is the method used? (`GET`)
3. What is the base URL? (`{GH-CODESPACES-SERVER-URL}`)
4. What is the path? (`/orders`)
5. What character precedes query parameters? (`?`)
6. What are the query parameters? (`sort`, `order`, `fields`)
7. What field is being sorted? (`priority`)
8. What character separates query parameters? (`&`)
9. What is the sort order?
10. What does the fields parameter do? (Filters the response to include only specified fields.)
11. What fields are specified? (`table_number`, `status`, `priority`, `name`)
12. What character separates these fields? (Pipe character `|`)

**Question #4 (multi-part question):**

1. What is the query parameter being used? `filter`
2. Which fields are being filtered? `category` and `station`
3. What comparison operators are being utilized, and what is their purpose? The `eq` operator is used to check for equality when performing comparisons.
4. What character precedes the value on which a filter is applied? `~` (tilda)
5. What are the selection criteria described in simple terms? Filter dishes belonging to the `Main Course` category that are preparated at the `hot` station in a restaurant. -->
