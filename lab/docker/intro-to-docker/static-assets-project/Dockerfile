FROM node:12-stretch AS builder
WORKDIR /app
COPY . . 
RUN npm ci && npm run build

FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html
