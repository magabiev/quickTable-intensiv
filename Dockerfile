FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm ci
CMD ["npm", "run", "build"]
EXPOSE 3000
