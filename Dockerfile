# 1. Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install --frozen-lockfile

# 2. Build the Next.js app
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# 3. Production runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy standalone server
COPY --from=builder /app/.next/standalone ./

# Copy public folder
COPY --from=builder /app/public ./public

# Copy static files (Next.js app router stores static inside .next/static)
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]
