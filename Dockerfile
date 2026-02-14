# 1. Use official Node.js LTS image
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json & package-lock.json first (for caching)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the project
COPY . .

# 6. Build the Next.js app
RUN npm run build

# 7. Expose port (Next.js default)
EXPOSE 3000

# 8. Start the app in production mode
CMD ["npm", "start"]
