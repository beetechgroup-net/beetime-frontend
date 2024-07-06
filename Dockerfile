FROM node:18-alpine3.17 as build
WORKDIR /app
COPY . /app
RUN npm i
RUN npm run build

FROM ubuntu
RUN apt-get update && apt-get install -y nginx
COPY /out/ /var/www/html/
COPY /default /etc/nginx/sites-available/default
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
