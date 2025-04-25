# Session #3: Offline Exercises

In this session, we'll explore how to send API requests using **Curl**. **Curl** is a powerful command-line tool for making API requests. Unlike API clients like Postman that provide a graphical interface, Curl allows you to manually construct endpoint URLs, which is essential for understanding complex query parameters.

**Note:** Please manually type each URL instead of copying and pasting. The goal is to become proficient in URL construction.

The instructions include questions at various points. You can find the answers to these questions in the accompanying file, `offline-exercises_answers_session3`.

## Prerequisites

### Local Setup

- Open Docker Desktop and start the `api-documentation-course` container. Click "Play" if it's not running.
- Open Visual Studio Code and go to the top menu and select **Terminal** > **New Terminal**.
- Alternatively, use the keyboard shortcut:
  - Windows: `Ctrl + (backtick)`
  - macOS: `Command (⌘) + (backtick)`

### GitPod setup

These steps apply only if you completed the GitPod setup. If you’re unfamiliar with "GitPod," you likely set up the project locally. In that case, you can skip these prerequisite steps.

- Go to your [GitPod Workspaces](https://gitpod.io/workspaces) page and open the workspace you created as part of the [GitPod setup](https://github.com/mawentowski/api-documentation-course-gitpod/blob/main/docs/gitpod-setup.md#opening-the-course-repository-in-a-gitpod-workspace) (if you’ve already completed the setup, there’s no need to do it again).
- Follow the [Running Curl commands](https://github.com/mawentowski/api-documentation-course-gitpod/blob/main/docs/gitpod-user-guide.md#running-curl-commands) instructions to open a new terminal to run Curl commands.

## Steps

### 1. Send an HTTP Request to the Collection Endpoint

In the terminal, type the following command step by step:

```bash
curl
```

2. Add `-i` to include HTTP response headers:

```bash
curl -i
```

3. Specify the request method as GET:

```bash
curl -i -X GET
```

4. Add the base URL (in quotes):

```bash
curl -i -X GET "http://localhost:80"
```

5. Add the `/orders` path:

```bash
curl -i -X GET "http://localhost:80/orders"
```

If constructed correctly, your command should look like:

```bash
curl -i -X GET "http://localhost:80/orders"
```

**Question #1:** What type of endpoint is this: a collection endpoint or a specific resource endpoint?

1. **Run the command.** You should see a lot of output in the terminal.
2. **Find the status code.** Scroll up to locate the line starting with "HTTP/1.1".

**Question #2:** What status code is returned? Does it indicate that the API request was successful based on your knowledge of status codes?

3. **Analyze the JSON response.**

   - Locate the `priority` field for the **first** record. What is its value? (1 is the highest priority, 5 is the lowest.)
   - Locate the `priority` field for the **last** record. What is its value?

4. **Clear the terminal:**

```bash
clear
```

### 2. Sort the Results of the Collection Endpoint

As we move to more complex query parameters, it's easier to write cURL commands in a text editor first, then copy them to the terminal. To improve readability, you can break long commands into multiple lines using the backslash (`\`).

1. **In a text editor, write the following Curl command:**

```bash
curl -i -X GET "http://localhost:80/orders"
```

2. **Add query parameters to sort results:**

```bash
curl -i -X GET \
"http://localhost:80/orders?sort=priority&order=desc"
```

3. **Run the command:** Copy the command into the terminal, and hit ENTER to run the command.

**Question #3:** Analyze the JSON response. Locate the `priority` field for the **first** and **last** records. How do these values differ from your previous request?

4. **Clear the terminal again:**

```bash
clear
```

### 3. Apply Projection Filters

To only include certain fields in the response, we'll use a projection filter.

- **In the text editor, modify your previous command to include the `fields` parameter:**

```bash
curl -i -X GET \
"http://localhost:80/orders?sort=priority&order=desc&fields=table_number|status|priority|name"
```

Once again, we used a line break with the backslash (`\`) character. This helps improve readability, especially when commands are too long and might run off the edge of the page in a PDF.

**Question #4 (multi-part question):**

This question is broken out into multiple parts:

1. What indicates it's a Curl request?
2. What is the method used?
3. What is the base URL?
4. What is the path?
5. What character precedes query parameters?
6. What are the query parameters?
7. What field is being sorted?
8. What character separates query parameters?
9. What order is it being sorted in, and what is the default sorting order?
10. What does the fields parameter do?
11. What fields are specified?
12. What character separates these fields?

### 4. Apply Selection Filters

Now we will switch to the `GET /dishes` endpoint. Once again, it's best to write the command in a text editor first.

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
curl -i -X GET "http://localhost:80/dishes"
```

4. **Add a selection filter for dishes in the "Main Course" category:**

```bash
curl -i -X GET \
"http://localhost:80/dishes?" \
"filter=category.eq~Main%20Course"
```

5. **Run the request:** Copy the command from the text editor and paste it into the terminal. Ensure you use `%20` for spaces in URL encoding. Hit ENTER to run the command.

### 5. Chain Selection Filters

To filter dishes that are "Main Course" and belong to the "hot" station, modify your previous command:

1. **Add another filter with a pipe separator:**

```bash
curl -i -X GET \
"http://localhost:80/dishes?filter=category.eq~Main" \
"%20Course|station.eq~hot"
```

### 6. Exercise Completion

Congratulations! You have completed all the tasks for this session. Please check your answers in the accompanying file.
