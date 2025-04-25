# Use an official Node.js runtime as the base image
FROM node:21

# Set the working directory in the container
WORKDIR /server

# Copy setup script and make it executable
COPY ./setup.sh /server/setup.sh
RUN chmod +x /server/setup.sh

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose port 8080 to the outside world
EXPOSE 8080

# Command to run the application
CMD ["/bin/bash", "-c", "/server/setup.sh && npm start"]