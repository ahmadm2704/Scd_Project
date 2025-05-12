# Use the official Node.js image as a base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json (and package-lock.json if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose port (if your app runs on port 3000)
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
