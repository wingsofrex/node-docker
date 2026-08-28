FROM node:24-slim

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies (none here, but keeps structure)
RUN npm install --only=production

# Copy application code
COPY . .

# Expose port
EXPOSE 8001

# Run the app
CMD ["npm", "start"]
