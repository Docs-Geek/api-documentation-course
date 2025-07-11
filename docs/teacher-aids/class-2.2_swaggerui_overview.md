# Class #2: Teacher Aid - Swagger UI Overview

## Run and Publicize API Server

Students follow along:

1. Go to [https://github.com//codespaces](https://github.com//codespaces) (sign in to GitHub if not already signed in).
2. Click the Codespace you created previously to open it.
3. Make the API server public. Refer to:
   - [https://api-course-docs.redocly.app/dev-setup#make-the-api-server-port-public](https://api-course-docs.redocly.app/dev-setup#make-the-api-server-port-public)
4. Copy the Server URL:
   - Hover over the API Server (Port 80), right-click, and select **Copy Local Address**. Paste the local address into a text file, such as one created using NotePad or another text editor.
5. Start the server by running `npm run start` in a terminal. Refer to:
   - [https://api-course-docs.redocly.app/dev-setup#start-the-api-server](https://api-course-docs.redocly.app/dev-setup#start-the-api-server)

## Open SwaggerUI

1. Go to the **Ports** tab (if not already there).
2. Hover over the API Server (**Port** `80`), right-click, and select **Copy Local Address**. Paste the local address into a text file, such as one created using NotePad or another text editor.
3. For **Port** `5500`, click the **Forward Address** link to open Swagger UI in a new browser tab.
4. Place your cursor in the `gh-codespaces-server-url` form field and paste the local address you copied previously. Remove the slash at the end.
5. Verify the **Computed URL** only has one slash at the end.
6. Under **Orders**, expand **GET /orders**.
7. Click the **Try it out** button.
8. Scroll down and click the blue **Execute** button.
   - If a "Code 200" is returned in the **Server response** section, then the request was successful, and Swagger UI is functioning properly.

## Understanding the Interface

- Swagger UI renders the API documentation based on an OpenAPI file that exists on a local machine or more commonly on a web server.
- You'll find a link to the `openapi.yml` file, allowing you to view the raw JSON data used by Swagger UI. It's rendering that file based on the YAML.
- The OpenAPI file `openapi.original.yml` located in the `api-documentation-course/openapi` folder.

### Interactive Features

- Swagger UI provides interactive features such as the "Try it out" option, enabling users to interactively test API endpoints by modifying parameters and request bodies.
- Depending on the API, you may need to authenticate or authorize requests. The "Authorize" button facilitates token-based authentication, adding tokens to the authorization header.

### Response Handling

- Explore example values and schemas provided for responses, aiding in understanding data structures and constraints defined in the OpenAPI specification.
