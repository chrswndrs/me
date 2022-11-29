FROM alpine:3.10
RUN apk add --update nodejs npm

RUN addgroup -S node && adduser -S node -G node

USER node
