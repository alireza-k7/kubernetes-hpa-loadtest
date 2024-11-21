# Dockerfile
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose the app on port 3000
EXPOSE 3000

# Run the app
CMD ["node", "app.js"]
