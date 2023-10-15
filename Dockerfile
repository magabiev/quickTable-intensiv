FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm ci
CMD ["npm", "run", "build"]
EXPOSE 3000


FROM nginx
COPY dist /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
