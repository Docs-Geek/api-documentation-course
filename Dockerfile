# Use an official Node.js runtime as the base image
FROM node:21

# Set the working directory in the container
WORKDIR /app

# Copy package.json first to leverage Docker cache
COPY package*.json ./

# Install app dependencies cleanly
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Make setup.sh executable (after copying it in)
RUN chmod +x ./setup.sh

# Expose port 8080 to the outside world
EXPOSE 8080

# Command to run the application
CMD ["/bin/bash", "-c", "./setup.sh && npm start"]
