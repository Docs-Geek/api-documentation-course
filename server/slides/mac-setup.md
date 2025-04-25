# Mac Setup Instructions

This guide will help you set up a development environment on a Mac.

## Table of Contents

- [Mac Setup Instructions](#mac-setup-instructions)
  - [Table of Contents](#table-of-contents)
  - [1. **Download Xcode**](#1-download-xcode)
  - [2. **Install Xcode Command Line Tools**](#2-install-xcode-command-line-tools)
  - [3. **Generate an SSH Key for GitHub**](#3-generate-an-ssh-key-for-github)
  - [4. **Add SSH Key to GitHub**](#4-add-ssh-key-to-github)
  - [5. **Configure SSH Agent in `.zshrc`**](#5-configure-ssh-agent-in-zshrc)
  - [6. **Install Node.js and npm**](#6-install-nodejs-and-npm)
  - [Next Steps](#next-steps)

## 1. **Download Xcode**

From the **App Store**, search for and download "Xcode". You'll need to be signed in to an iCloud account to download Xcode.

## 2. **Install Xcode Command Line Tools**

1. **Open Visual Studio Code**

   - Open Visual Studio Code.

   - From the top toolbar, open a new terminal window in VS Code by clicking **Terminal** > **New Terminal**

2. **Install Xcode Command Line Tools:**

   - Run the following command:

     ```shell
     xcode-select --install
     ```

   - Follow the prompts to complete the installation.

3. **Verify Installation:**

   - Run the following commands to verify that Xcode Command Line Tools are installed:

     ```shell
     xcode-select --version
     xcodebuild -version
     gcc --version
     ```

   - If Xcode Command Line Tools are properly installed, you should see output _similar_ to the following:

     ```shell
       xcode-select version 2397.
       Xcode 14.3.1
       Build version 14E300c
       Configured with: --prefix=/Applications/Xcode.app/Contents/Developer/usr
     ```

   If you don't see output like this or encounter an error, post a question to the **SUPPORT - MAC** > [# xcode](https://discord.com/channels/1278288408795549716/1278301960247971982) channel.

## 3. **Generate an SSH Key for GitHub**

1. **Generate a New SSH Key:**

   - Open a terminal in Visual Studio Code, if one is not already open.
   - Run the following command, replacing `your_email@example.com` with your GitHub email address:

     ```shell
     ssh-keygen -t rsa -b 4096 -C "your_email@example.com" -f ~/.ssh/id_GitHub_rsa
     ```

   - Press `Enter` to accept the default file location.
   - Hit `Enter` went prompted for a passphrase to skip adding a passphrase.

## 4. **Add SSH Key to GitHub**

1. **Copy SSH Key to Clipboard:**

   - Open a terminal in Visual Studio Code, if one is not already open.
   - Display the contents of your public SSH key with:

     ```shell
     cat ~/.ssh/id_GitHub_rsa.pub
     ```

   - If a long string starting with `ssh-rsa` appears, the command worked. Copy this string for the next step.

2. **Add SSH Key to Your GitHub Account:**
   - Go to [GitHub](https://github.com) and log in.
   - Navigate to **Settings** > **SSH and GPG keys** > **New SSH key**.
   - Paste your SSH key into the key field and give it a descriptive title, like "GitHub public key".
   - Click **Add SSH key** to save it.

## 5. **Configure SSH Agent in `.zshrc`**

1. Check if a `.zshrc` file exists.

   - Open a terminal in Visual Studio Code, if one is not already open.
   - In Terminal, run the following command to check if the `.zshrc` file is present:

     ```shell
     ls -la ~/.zshrc
     ```

   - If the file does not exist, create one by running:

     ```shell
     touch ~/.zshrc
     ```

2. **Open Your `.zshrc`:**

   - In the terminal, run:

     ```shell
     nano ~/.zshrc
     ```

3. **Add SSH Agent Configuration:**

   - Add these lines to the bottom of the file:

     ```shell
     eval "$(ssh-agent -s)"
     ssh-add ~/.ssh/id_GitHub_rsa
     ```

   - Press `Ctrl + O` to save, then `Ctrl + X` to exit `nano`.

4. **Verify SSH Agent:**

   - Open a _new_ terminal in Visual Studio Code.

   - Run the following command to check if the SSH agent is running and if your SSH key is added:

     ```shell
     ssh-add -l
     ```

   - If successful, you should see a list of your added SSH keys.

   - If no keys are listed or you receive an error, there is likely an issue with configuring the SSH agent. You can post a question to **SUPPORT - Software** > [# ssh](https://discord.com/channels/1278288408795549716/1278302114812133418) channel for help.

   - In the meantime, you can run the following command to add your SSH key manually:

     ```shell
     ssh-add ~/.ssh/id_GitHub_rsa
     ```

   - After adding the key, rerun `ssh-add -l` to confirm that the key has been added successfully.
   - If you added the SSH key manually, you'll need to run the previous command each time you open a new terminal.

## 6. **Install Node.js and npm**

1. **Download Node.js Installer:**

   - Visit the [Node.js website](https://nodejs.org/) and download the Node.js (LTS) installer.

2. **Run the Installer:**

   - Open the downloaded file to start the installation process.

3. **Follow the Installation Wizard:**

   - Click "Next" to proceed with the default options.
   - Choose the default installation location or select a different one if needed.
   - Ensure that the option to install npm (Node Package Manager) is selected.
   - Click “Install” and then “Finish” once the installation is complete.

4. **Verify Installation:**

   - Open a new terminal.
   - Check Node.js version:

     ```bash
     node --version
     ```

   - Check npm version:

     ```bash
     npm --version
     ```

   - Both commands should output their respective versions, confirming that Node.js and npm are properly installed.

## Next Steps

Aftering completing the steps in this document, go to the [README - Cloning the Repository](https://github.com/mawentowski/api-documentation-course?tab=readme-ov-file#cloning-the-repository) section.
