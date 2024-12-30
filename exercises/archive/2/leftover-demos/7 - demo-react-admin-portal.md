# **Authentication Flow**

## **Building the Admin Panel**

1. Open a **new terminal** in VS Code (use Git Bash if you're on Windows).
2. Run the following command:

   ```bash
   ./scripts/run-admin.sh
   ```

3. Once the script executes successfully, a link to the Admin Panel will be displayed. Click the link or visit [http://localhost:5173/](http://localhost:5173/) to open the panel in your browser.

---

## **Login Page and Google Chrome Developer Tools**

Upon opening the Admin Panel, you'll land on the login page.

We’re using **Google Chrome** as the browser, and to inspect the API calls, we’ll need to open **Developer Tools**.

1. **Right-click** anywhere on the page and select **Inspect**, or press `F12`.
2. Navigate to the **Network** tab — this tab is essential for monitoring API calls between the frontend and backend.

The **Network tab** allows us to see the requests and responses as we interact with the application. For now, we don't see anything since we haven't performed any actions.

---

Go through and test out all the api components you mentioned previously that you defined to view the underlying requests.

This is focusing purely on teh CRUD aspect which really is what the admin panel is most helpful for.
