FROM node:14.17-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .14

COPY ./dist  ./dist

CMD ["npm", "run", "start:dev"]
