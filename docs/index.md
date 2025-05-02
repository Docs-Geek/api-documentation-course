# Development Environment Setup Guide

### Create a GitHub Account

1. Go to https://github.com/ and create an account using a personal email address.
2. You will receive an email from GitHub to verify your email address. Open that email and click the link to verify.
3. After verifying your email, sign in to your GitHub account using the details you provided during account creation.

### Open the GitHub Codespace

<video controls width="250">
  <source src="/assets/videos/flower.mp4" type="video/mp4" />
</video>

1. Navigate to:
	- https://github.com//Docs-Geek/api-documentation-course.
2. Click the green **Code** button.
3. Click the **Codespaces** tab and the plus icon to create a new codespace.

Wait for the Codespace to load. This may take 1 to 3 minutes—grab a coffee! You will know the Codespace is set up when you see the following icon:

{% img src="assets/images/ports-4.png" alt="Ports 4" width="300" height="200" %}

### Make the API Server Port Public

1. In the bottom panel, click the **Ports** tab.

### Run the Setup Script

1. Click the **Terminal** tab.
2. Place your cursor in the terminal and type:
   ```bash
   ./setup.sh
   ```
3. Hit **Enter** to run the script. A "Database seeded successfully" message indicates the setup is complete.

### Start the API Server

1. In the terminal tab, type:
   ```bash
   npm run start
   ```
2. Hit **Enter** to run the script. "Connected to MongoDB" indicates that the server has started successfully.

### Login to the Admin Panel

1. Open a new terminal.
2. Type the following command to run the admin panel:
   ```bash
   ./scripts/run-admin.sh
   ```
3. Hit **Enter** to execute the script. When you see links, that means the admin panel was built successfully.
4. Click the link: [http://localhost:5173/](http://localhost:5173/) to open the React admin panel.
5. In the browser, hit refresh twice. The React admin panel login screen will display.
6. Log in with the following credentials:
   - Username: `apiuser01`
   - Password: `Passw0rd123!`
7. Click the **Orders** tab. Data should populate in the table. If it does, the admin panel is successfully connected to the database.

### Test Swagger UI Interactivity

1. Return to the GitHub Codespace.
2. Go to the **Ports** tab (if not already there).
3. Hover over the API Server (port 80), right-click, and select **Copy Local Address**.
4. For port 5500, click the **Forward Address** link to open Swagger UI in a new browser tab.
5. Place your cursor in the `gh-codespaces-server-url` field and paste the local address you copied previously. If there’s a slash at the end of the URL, remove it.
6. Under **Orders**, expand **GET /orders**.
7. Click the **Try it out** button.
8. Scroll down and click the blue **Execute** button. If a "Code 200" is returned in the server response section, then the request was successful, and Swagger UI is functioning properly.

### Test Curl Commands

1. Open a new terminal in your workspace and name it "Curl."
2. Run the following command to make a request:
   ```bash
   curl -i -X GET "https://api.chucknorris.io/jokes/random"
   ```

   The output will look something like this (the joke will vary):
   ```shell
   {"categories":[],"created_at":"2020-01-05 13:42:26.194739","icon_url":"https://api.chucknorris.io/img/avatar/chuck-norris.png","id":"ZYuYuFQVSfamBUYfzFADMQ","updated_at":"2020-01-05 13:42:26.194739","url":"https://api.chucknorris.io/jokes/ZYuYuFQVSfamBUYfzFADMQ","value":"Chuck Norris has more subscribers than Pewdiepie."}%
   ```

### Stop the Codespace

You are allotted a certain number of hours as part of the free account when using GitHub Codespaces, which is why it is important to stop your codespace when you finish your exercises.

To stop the codespace, follow these steps:

1. Go to https://github.com//codespaces.
2. Left-click the three dots next to the codespace name.
3. Select **Stop Codespace**. A banner will display at the top of the screen indicating that the codespace has been stopped.

### Wrapping Up

Congratulations! You have now set up your development environment to complete your exercises, test, and document the course API.