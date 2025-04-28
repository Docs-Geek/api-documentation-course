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
RUN chmod +x ./scripts/make-sh-executable.sh

# Environment variable to indicate we're running in a container
ENV IS_DOCKER_CONTAINER=true

# Expose port 8080 to the outside world
EXPOSE 8080

# Run modified setup command that skips Docker-related checks
CMD ["/bin/bash", "-c", "./setup.sh --skip-docker && (npm start & tail -f /dev/null)"]
