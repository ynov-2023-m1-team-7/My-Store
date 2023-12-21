FROM node:18.12.0-alpine

WORKDIR /app

RUN apk update && apk add --no-cache bash

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# permission to script bash
RUN chmod +x ./wait-for-it.sh

EXPOSE 3000

CMD ["npm", "run", "start"]

#command to build the image
# docker build -t my-store .

#command to run the container
#docker run -d --name my-store --env-file .env -p 3000:3000 -d my-store