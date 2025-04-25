# Windows Setup Instructions

This guide walks you through setting a development environment on Windows.

## Table of Contents

- [Windows Setup Instructions](#windows-setup-instructions)
  - [Table of Contents](#table-of-contents)
  - [1. **Install Git and Git Bash**](#1-install-git-and-git-bash)
  - [2. **Generate an SSH Key**](#2-generate-an-ssh-key)
  - [3. **Adding SSH Agent to Your `.bash_profile`**](#3-adding-ssh-agent-to-your-bash_profile)
  - [4. **Copy the SSH Public Key to Clipboard**](#4-copy-the-ssh-public-key-to-clipboard)
  - [5. **Add SSH Key to Your GitHub Account**](#5-add-ssh-key-to-your-github-account)
  - [6. **Install Node.js and npm**](#6-install-nodejs-and-npm)
  - [7. **Install `curl`**](#7-install-curl)
  - [Next Steps](#next-steps)

## 1. **Install Git and Git Bash**

1. **Download Git for Windows:**

   - Visit the [Git for Windows website](https://gitforwindows.org/) and download the installer.

2. **Run the Installer:**

   - Open the downloaded file to start the installation process.

3. **Follow the Installation Wizard:**

   - Click "Next" to proceed with the default options.
   - Choose the default installation location or select a different one if needed.
   - Select “Git Bash Here” and any other options you prefer.
   - Ensure that the option to "Use Git from the Windows Command Prompt" is selected.

4. **Complete the Installation:**

   - Click “Install” and then “Finish” once the installation is complete.

5. **Confirm Git and GitBash Installation:**

   - Open Visual Studio Code.

   - From the top toolbar, open a new terminal window in VS Code by clicking **Terminal** > **New Terminal**.

   - To confirm Git installation, run:

     ```shell
     git --version
     ```

   If the command returns a Git version, the installation was successful. If not, there may have been an issue during installation. For help, visit the **SUPPORT - WINDOWS** > [# git-gitbash](https://discord.com/channels/1278288408795549716/1278295713742061579) channel.

   - To confirm that you are using Git Bash, run:

     ```shell
     echo $SHELL
     ```

   - The output should show a path similar to `/usr/bin/bash` if Git Bash is set up correctly. If not, there may have been an issue configuring Git Bash as the default terminal in VS Code. For help, visit the **SUPPORT - WINDOWS** > [# git-gitbash](https://discord.com/channels/1278288408795549716/1278295713742061579) channel.

## 2. **Generate an SSH Key**

- With a Git Bash terminal open in Visual Studio Code, run the following command, replacing "your_email@example.com" with your GitHub email address:

  ```shell
  ssh-keygen -t rsa -b 4096 -C "your_email@example.com" -f ~/.ssh/id_GitHub_rsa
  ```

- Press `Enter` to accept the default file location.

- When prompted for a passphrase, press `Enter` again to skip adding a passphrase.

## 3. **Adding SSH Agent to Your `.bash_profile`**

1.  **Open .bash_profile**

- Ensure a Git Bash terminal is open in VS Code. If it's not, click **Terminal** > **New Terminal**.

- To confirm that you are using Git Bash, run:

  ```shell
  echo $SHELL
  ```

- The output should show a path similar to `/usr/bin/bash` if Git Bash is set up correctly. If not, there may have been an issue configuring Git Bash as the default terminal in VS Code. For help, visit the **SUPPORT - WINDOWS** > [# git-gitbash](https://discord.com/channels/1278288408795549716/1278295713742061579) channel.

- Run the following command to open the `.bash_profile` file in the `nano` editor:

  ```shell
  nano ~/.bash_profile
  ```

2. **Add SSH Agent Lines**

- Add the following lines to the bottom of your `.bash_profile` file:

  ```shell
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_GitHub_rsa
  ```

- To exit `nano`, press `Ctrl + O` to save and `Ctrl + X` to exit.

  If you're strugging to add the speicfied lines to your `.bash_profile`, post a questions to **SUPPORT - Software** > [# ssh](https://discord.com/channels/1278288408795549716/1278296342342664202) for help.

1. **Verify the SSH Agent:**

- Open a Git Bash terminal (if one is not already open) and check if the SSH agent is running by executing:

  ```shell
  ssh-add -l
  ```

- This command should list your added SSH keys if everything is set up correctly.

  If a list is not returned, there is likely was an issue configuring the SSH agent. You can post a question to **SUPPORT - Software** > [# ssh](https://discord.com/channels/1278288408795549716/1278296342342664202) channel for help.

## 4. **Copy the SSH Public Key to Clipboard**

- Ensure a Git Bash terminal is open in Visual Studio Code.
- To display the contents of your public SSH key, run the following command:

  ```shell
  cat ~/.ssh/id_GitHub_rsa.pub
  ```

- If the terminal outputs a long string beginning with `ssh-rsa`, the command was successful.

- Copy this long string, as you'll need it for the next step.

## 5. **Add SSH Key to Your GitHub Account**

1. **Log In to GitHub:**

   - Go to [GitHub](https://github.com) and log in.

2. **Navigate to SSH Keys:**

   - Go to **Settings** > **SSH and GPG keys** > **New SSH key**.

3. **Add Your SSH Key:**

   - Paste your public SSH key (the contents of `id_GitHub_rsa.pub`) into the key field and give it a descriptive title.
   - Click **Add SSH key** to save it.

   If you are having trouble adding your SSH key to GitHub, you can post to the **SUPPORT - Software** > [# github](https://discord.com/channels/1278288408795549716/1278293898204286987) channel for help.

## 6. **Install Node.js and npm**

1. **Download Node.js Installer:**

   - Visit the [Node.js website](https://nodejs.org/) and download the Windows Installer (LTS or Current version).

2. **Run the Installer:**

   - Open the downloaded file to start the installation process.

3. **Follow the Installation Wizard:**

   Note: You may see a "Tools for Native Modules" message.

   - Click "Next" to proceed with the default options.
   - Choose the default installation location or select a different one if needed.
   - Ensure that the option to install npm (Node Package Manager) is selected.
   - Foor the "Tools for Native Modules" screen, simply click Next without ticking the checkbox.
   - Click “Install” and then “Finish” once the installation is complete.

4. **Verify Installation:**

   - Open a new terminal in VS Code by selecting `Terminal` > `New Terminal` from the menu.

   - Check Node.js version:

     ```shell
     node --version
     ```

   - Check npm version:

     ```shell
     npm --version
     ```

   - Both commands should output their respective versions, confirming that Node.js and npm are properly installed.

     If those commands did not work, there is liklely an issue with your NPM installation. You can post to the **SUPPORT - WINDOWS** > [# npm-node](https://discord.com/channels/1278288408795549716/1278296962340487209) channel for help.

## 7. **Install `curl`**

1. **Download `curl`:**

   - Visit the [curl website](https://curl.se/windows/) and download the appropriate `curl` package for Windows.

2. **Extract and Install `curl`:**

   Download curl: Go to the curl website and download the appropriate curl package for Windows

   Extract and Install curl: Extract the downloaded ZIP file to a location of your choice.

   - Add the path of the extracted `curl` executable (e.g., `C:\path\to\curl\bin`) to your system's `PATH` environment variable.
   - Open the Start menu, search for "Environment Variables," and select "Edit the system environment variables."
   - Click the "Environment Variables" button.
   - In the "System variables" section, find the `Path` variable and click "Edit."
   - Click "New" and add the path to the `curl` executable.
   - Click "OK" to close all dialogs.

3. **Test `curl` Installation:**

   - In VS Code, open a new Git Bash terminal. and run a simple `curl` command to verify it’s working:

     ```shell
     curl https://jsonplaceholder.typicode.com/posts/1
     ```

   - This command should return data from a free API endpoint, confirming that `curl` is installed and functioning correctly.

     If the command did not return data, there is liklely an issue with your curl installation. You can post to the **SUPPORT - WINDOWS** > [# curl](https://discord.com/channels/1278288408795549716/1278295767861297195) channel for help.

## Next Steps

Aftering completing the steps in this document, go to the [README - Cloning the Repository](https://github.com/mawentowski/api-documentation-course?tab=readme-ov-file#cloning-the-repository) section.
