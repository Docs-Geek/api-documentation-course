# Use an official Node.js runtime as the base image
FROM node:21

# Install Docker
RUN apt-get update && apt-get install -y \
  ca-certificates \
  curl \
  gnupg \
  lsb-release \
  && curl -fsSL https://download.docker.com/linux/ubuntu/gpg | tee /etc/apt/trusted.gpg.d/docker.asc \
  && echo "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list \
  && apt-get update \
  && apt-get install -y docker-ce docker-ce-cli containerd.io

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
