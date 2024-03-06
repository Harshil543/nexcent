# FROM node:latest
# WORKDIR /home/pagination
# COPY . .
# RUN npm install --legacy-peer-deps
# RUN npm start
 
 # Use an official Node runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy all files from the current directory to the working directory in the container
COPY . .

# Expose the port the app runs on
EXPOSE 3001

# Define the volume
VOLUME $(pwd):/app

# Run the start script when the container launches
CMD ["npm", "start"]

