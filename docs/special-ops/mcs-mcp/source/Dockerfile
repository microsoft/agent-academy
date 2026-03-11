FROM node:22.12-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json first for better layer caching
COPY package*.json ./
COPY tsconfig.json ./
COPY src/ ./src/

RUN --mount=type=cache,target=/root/.npm npm install

RUN npm run build

FROM node:22-alpine AS release

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./

ENV NODE_ENV=production
ENV PORT=80

RUN npm ci --ignore-scripts --omit-dev

CMD ["node", "dist/server.js"]