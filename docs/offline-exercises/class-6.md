# Class #6: Offline Exercises

## Prerequisites

### GitHub Codespace

1. Go to [https://github.com//codespaces](https://github.com//codespaces) and sign in to GitHub if you are not already logged in.
2. Click the Codespace you created previously to open it.
3. Make the API server public. Refer to [https://api-course-docs.redocly.app/dev-setup#make-the-api-server-port-public](https://api-course-docs.redocly.app/dev-setup#make-the-api-server-port-public) for instructions.
4. Copy the Server URL:
   - Hover over the API Server (Port 80), right-click, and select **Copy Local Address**. Paste the local address into a text file, such as one created using Notepad or another text editor.
5. Start the server by running `npm run start` in a terminal. Refer to [https://api-course-docs.redocly.app/dev-setup#start-the-api-server](https://api-course-docs.redocly.app/dev-setup#start-the-api-server) for additional guidance.
6. In a new terminal (click the plus icon on the right), run `npm install` to install the latest version of the API.

### Swagger UI

- Follow the steps outlined here: [https://api-course-docs.redocly.app/dev-setup#test-swagger-ui-interactivity](https://api-course-docs.redocly.app/dev-setup#test-swagger-ui-interactivity).

### Curl

1. Follow Steps 1 and 2 from the following section: [https://api-course-docs.redocly.app/dev-setup#test-curl-commands](https://api-course-docs.redocly.app/dev-setup#test-curl-commands).
2. Then send the following Curl request to test the connection to the API, replacing `{GH-CODESPACES-SERVER-URL}` with your actual GitHub codespace URL:

   ```shell
   curl -X GET "https://{GH-CODESPACES-SERVER-URL}/orders"
   ```

   If a JSON object is returned in the response, then Curl is functioning correctly.

### Postman

- Open Postman.
- Follow the steps outlined here: [https://api-course-docs.redocly.app/dev-setup#8.-test-the-baseurl-configuration](https://api-course-docs.redocly.app/dev-setup#8.-test-the-baseurl-configuration).
- If the API returns an error, redo your Postman setup, then follow the instructions in [https://api-course-docs.redocly.app/dev-setup#6.-select-the-environment](https://api-course-docs.redocly.app/dev-setup#6.-select-the-environment).

### Mintlify

Mintlify is a documentation tool that can be used to write and publish API documentation.
Go to [https://mintlify.com/](https://mintlify.com/) to sign up for a free account. From your workspace, click "Editor" in the left sidebar.

As part of the prerequisites, you need to install the GitHub app. To do this, connect it to your GitHub account and grant necessary permissions.

In the editor, there are many default files and folders. Expand the "essentials" folder and read all the files as part of your training to use the tool, except for the `settings.mdx` file, as it is not necessary at this time.

Create a new folder called "api-flows." Inside it, create the following two files:

- `patron.mdx`
- `staff.mdx`

In these files, you will document two of the API flows for the course.

## Directions

This exercise involves documenting all the course API flows. An outline for each flow will be provided. Each section should include a Curl code sample for the API request and another for the API response.

The following tools are useful during this exercise:

- **Swagger UI**: This documentation allows you to see what parameters and request body fields are required per request, along with their data types. This information is helpful when constructing Curl requests.
- **Curl**: The code samples you will be adding to the documentation will be written in Curl. You can experiment with sending requests in your GitHub Codespace to test your Curl code samples.
- **Postman**: Postman is helpful for quickly sending and testing requests to the API without manually constructing requests in Curl.

Additionally, you can review the slides from Class #6 to see the full API flows, including Curl requests. However, it is recommended to try building the Curl requests from scratch based on what you have learned.

You can also look at the Class #6: In-Class Exercises, which demonstrate the Patron and Staff API flows using Postman. Using your knowledge of Curl, you can translate these Postman requests as Curl requests for your documentation.

### Template for an API Flow

```markdown
# XXX API Flow

Description of API Flow.

## 1. Step 1 Title

### Request

The client sends an HTTP request to `{describe the purpose of the API request}`.

### Response

If the request was successful, the server responds with a `{insert status code}` status code with the response body containing `{describe the important fields of the response}`.

## 2. Step 2 Title

### Request

See previous example.

### Response

See previous example.
```

These API flows were covered in Class #6. View the presentation PDFs for each class or re-watch the class recordings to refresh your memory.

### The Patron API Flow

1. Start Browsing / Click on a food category tab (appetizers, main course, etc.)
2. Check Ingredient Quantities.
3. View Dish Details
4. Adding Dishes and Viewing the Cart – No Curl request needed, just describe the process as it would occur in the user interface
5. Placing an Order
6. Order Confirmation – No Curl request needed, just describe the process

### The Staff API Flow

1. Order Display
2. Prioritization
3. Initiating Preparation
4. Order Preparation by Stations
5. Display Dish Ingredients
6. Ready for Assembly
7. Order Assembly

### Publish and Post Your Work

Make sure to edit the sidebar to include the API flows folder and the API flow files. Refer to the Mintlify documentation for how to do this.

Additionally, paste a link to your documentation in the Class #6 channel on Discord.

---

## AI-Assisted Documentation

> **Do this after completing the manual documentation above.** The purpose of this section is to use Claude to draft a section of your guide, then validate its output against the live API. This is a review skill, not a shortcut.

### Step 1: Draft a section with Claude

Choose one of the API flows you documented manually (Patron or Staff). Pick one step from that flow — for example, "Placing an Order."

Prompt Claude with the following (replace the bracketed content):

```text
I'm documenting the [Patron/Staff] API flow for a food ordering platform. Here is the step I need to document:

Step: [Step name, e.g. "Placing an Order"]
Endpoint: [HTTP method + path, e.g. POST /orders]
What the client sends: [describe the request briefly]
What the server returns on success: [describe the response briefly]

Write a short documentation section for this step. Include:
- One sentence describing what the client does and why
- A Curl request sample
- A Curl response sample (use realistic example values)
- One sentence describing how the response is used by the client
```

### Step 2: Validate Claude's output

Run the Curl request Claude generated against your live GitHub Codespace API. Compare:

- Does the endpoint path and HTTP method match your Swagger UI?
- Are the request body fields correct? Are any required fields missing?
- Does the response structure match what the API actually returns?
- Are the example values realistic and consistent with the API's data?

### Step 3: Revise and document your decisions

Edit the draft to fix any errors you found. In your Mintlify doc, add a brief note below the section (in an HTML comment or a separate "Notes" block) recording:

- What Claude got right
- What you had to correct or rewrite, and why
- Any place where Claude's output looked plausible but was actually wrong

> **Why this matters:** Identifying the gap between "plausible" and "accurate" is the core documentation skill this track is practicing. A description that sounds reasonable but doesn't match API behavior is worse than no description at all — it misleads developers.
