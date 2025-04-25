# Use an official Node.js runtime as the base image
FROM node:21

# Set the working directory in the container
WORKDIR /app

# Copy entire application
COPY . .

# Install app dependencies
RUN npm install

# Expose port 8080 to the outside world
EXPOSE 8081

# Command to run the application with port 8001
CMD ["npm", "start", "--", "--port=8001"]
