# 1. Build stage
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

# Copy everything
COPY . .

# Tailwind v4 build (IMPORTANT)
RUN npx tailwindcss -i ./src/input.css -o ./src/output.css

# React/Vite build
RUN npm run build

# 2. Serve stage (NGINX)
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
