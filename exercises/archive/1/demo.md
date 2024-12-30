# Visual Studio Code (VS Code)

Let's begin by opening the course repository in VS Code. Once open, you'll notice the left sidebar displays the project’s file structure.

This repository follows a monorepo structure.

A monorepo (short for "monolithic repository") is a development strategy where multiple related projects are stored within a single, version-controlled repository. Instead of managing separate repositories for each project, everything is centralized. This makes it easier to maintain consistency and allows teams to manage multiple codebases together.

For example, the Admin Panel and Server are separate applications, and there’s a database that's configured using commands from this repository.

In simpler terms, this repo lets you run your own local instance of the course API, along with tools for interacting with it.

No one else has access to your version of the API, and all the data you create is private to you. This setup contrasts with a typical API exposed on a public web server, but it’s common in API development environments.

## OpenAPI Specification

The `openapi` folder contains the OpenAPI specification files that define the API documentation.

Here's what you need to know:

- **openapi.original.yml**: The finalized, reference version of the OpenAPI specification.
- **openapi.yml**: The working file you'll update during the exercises.

You'll be making changes to the **openapi.yml** file as part of documenting the course API. The original file is there as a backup in case you encounter issues, such as accidentally introducing errors in the structure. You can use it to troubleshoot or to reference complete API descriptions for inspiration.

We'll soon dive into how to view and edit the **openapi.yml** file using the Swagger Editor.

## The terminal

Throughout the course, you'll be using the terminal to run various commands.

The terminal (or command-line interface) is a text-based way to interact with your operating system.

Instead of clicking through menus and windows, you type commands to navigate files, run programs, automate tasks, and manage resources more efficiently.

- On **Mac**, the terminal is pre-installed and ready to use.
- On **Windows**, ensure you're using **Git Bash**, which VS Code should select automatically.

Here’s a quick walkthrough of basic terminal commands:

- `pwd` — Prints the current working directory (where you are in the file system).
- `cd ..` — Moves up one directory (goes back).
- `ls` — Lists files and folders in the current directory.
- `cd <folder>` — Changes directory to the specified folder.
- `cat README.md` — Displays the contents of a file.
- `cp README.md README-copy.md` — Copies a file.
- `mkdir random` — Creates a new directory (folder).
- `touch helloworld.txt` — Creates an empty file.
- `nano helloworld.txt` — Opens a text editor inside the terminal.
- `cat helloworld.txt` — Displays the content of the file.

Think of the terminal as an alternative to using your file explorer, allowing you to navigate your file system and perform tasks quickly through commands.

## React Admin Panel Script

To run the React admin panel, which serves as the frontend UI for testing the course API and its flows, use the following command:

```bash
./scripts/run-admin.sh
```

Once the script executes successfully, it will provide a link to the admin panel. Clicking this link will open the admin panel in your browser.

## Curl

Curl is a command-line tool that enables you to make API calls directly from the terminal. As part of your setup, you’ve installed curl on your system. We will be sending curl requests through the VS Code terminal during our exercises.

Here’s an example of how to send a curl API request:

```bash
curl --location 'http://localhost:80/dishes?limit=2' \
--header 'Accept: application/json'
```

<!--
## Personal Folder

You should only edit files in this project that are located in the `personal` directory. Create this directory off the root to store any files you want to keep untracked by Git.

A common use for this folder is for code formatting. The repository is set up to format code samples (you'll need to install the Prettier extension to do this).

In VS Code, you can easily create files and folders. To create your personal folder, right-click the root of the project and select **New Folder**. Inside this folder, create a file named `response.json`.

The main difference between using this file explorer and the one on your computer is that you can’t directly create files in this way without specifying a name and extension.

Once you’ve created the `response.json` file, paste the response from your curl request into it. When you click save, Prettier will format the sample so it’s ready for use in your documentation. -->

# Docker Desktop

Docker Desktop allows you to run containers locally, providing a consistent environment across your development setup. In this course, Docker manages several key components, including the API server, database, and Swagger UI, simplifying your local configuration and management.

Let’s take a closer look at these containers:

- **API Server**: This is the backend implementation of the API, containing the core logic. When you send API requests, they are directed to this server, which processes the requests and returns the appropriate responses.

- **Database**: This component stores the data accessed and manipulated by the API server. It holds all the necessary information that the API needs to function effectively.

- **Swagger UI**: This is a user interface that allows you to interact with the API visually. It provides a way to explore API endpoints, see available operations, and view response formats, making it easier to understand how to use the API.

- **Swagger Editor**: This tool is used for editing and visualizing OpenAPI specifications. It allows you to create and modify API documentation interactively, ensuring that your API is well-documented and easy to understand.

### Accessing Swagger UI

Swagger UI provides interactive documentation generated from the course API's OpenAPI specification.

This comprehensive documentation includes all essential elements, such as descriptions, summaries, and examples that represent the complete API reference.

With its interactive features, you can send API requests directly from the application.

To open Swagger UI, simply click the port link in Docker Desktop.

<!-- Let’s retrieve a list of resources.

First, you'll need to authorize your requests. Once authorized, you can send a request and receive the corresponding API response. -->

### Swagger Editor

<!-- Next, return to Docker Desktop and click the link to Swagger Editor. -->

Swagger Editor is an API design tool that also serves as a documentation platform. On the right side, you’ll find a view similar to Swagger UI, complete with the "Try it Out" functionality. The key difference is the left sidebar, which allows you to edit the OpenAPI specification directly while seeing the updated documentation in real time on the right.

<!-- However, you'll notice that the documentation is incomplete. This is because you'll need to use Swagger Editor to add your own documentation as part of the course exercises. Think of this as your working copy of the documentation that you'll be refining throughout the course. -->

## Admin Portal

The portal provides a UI for testing API CRUD operations. Each action (e.g., creating or updating a record) triggers an API request in the background.

To access the React admin panel, you run the following script in a VS Code terminal:

```bash
./scripts/run-admin.sh
```

Demo: React Admin panel

### Postman

Postman is a popular tool for testing APIs. It simplifies sending API requests, inspecting responses, and automating tests.

You’ll use Postman collections provided in the project to explore and test API functionality.

Postman provides a user-friendly interface to work with APIs,
making it easier to explore, document, and debug your API
endpoints.

Demo: Postman

## Next Steps: Discord Server

For any help or updates, join our Discord server. Channels cover different topics, from API documentation to general discussions, so you can ask questions and stay connected with the community.

</section>
