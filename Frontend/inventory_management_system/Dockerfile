FROM node:18

# Set working directory
WORKDIR /client

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies (including react-scripts)
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Run the frontend application using npm start
CMD ["npm", "start"]

