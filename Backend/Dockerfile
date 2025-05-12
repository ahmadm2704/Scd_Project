# Use Node.js as base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production dependencies first
RUN npm install --only=production

# Install nodemon globally
RUN npm install -g nodemon

# Copy the rest of the application files
COPY . .

# Expose the backend port (assuming your backend runs on port 5000)
EXPOSE 5000

# Run the backend application using nodemon
CMD ["nodemon", "index.js"]

