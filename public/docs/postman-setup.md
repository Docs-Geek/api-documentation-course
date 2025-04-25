# Import Postman Collections into Postman

To import Postman collections and environment variables from the `postman` directory, follow these steps:

1. **Launch Postman:**
   Open the Postman application on your computer. If you don’t have Postman installed, you can download it from the [Postman website](https://www.postman.com/downloads/).

2. **Create a Postman account:**
   If this is your first time using Postman, you’ll be prompted to create an account. You can sign up using an email address or continue with your Google or GitHub account. This account will allow you to save your work and sync it across devices.

   Note for Windows Users: If you encounter a dialog saying "Windows Defender Firewall has blocked some features of this app," it's safe to click "Allow Access" to ensure Postman can function properly. This is a standard security prompt and won't harm your system.

3. **Go to the Import Menu:**
   Click on the **Import** button located in the top-left corner of the Postman app or use the shortcut `Ctrl + O` (Windows/Linux) or `Cmd + O` (Mac).

4. **Import Files:**

   - In the **Import** dialog, you’ll see options to
   - Where it says, "Select **files** or **folders**," click on **folders**.
   - Navigate to the `api-documentation-course` folder.
   - Select the `postman` directory:

   ```shell
   api-documentation-course/
   ┣ postman/                       # Select this folder
   ┃ ┣ Environment Variables.postman_environment.json
   ┃ ┣ Point of Service (POS) API - Original.postman_collection.json
   ┃ ┗ Point of Service (POS) API.postman_collection.json
   ```

   - Postman should display two files for import. Click **Import** to import both files.

5. **Select the Environment:**

   - In the top-right corner of the Postman app, select **No Environment**.
   - Select **Environment Variables**.
