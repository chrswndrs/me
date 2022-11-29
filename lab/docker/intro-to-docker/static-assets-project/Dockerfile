# 1st stage build step, building reacat app
FROM node:12-stretch AS builder
WORKDIR /app
COPY . . 
RUN npm ci && npm run build

# 2nd stage install nginx
FROM nginx:alpine

# Copy the react source files to nginx html dir
COPY --from=builder /app/build /usr/share/nginx/html
