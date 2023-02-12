FROM node:latest

WORKDIR /usr/src

COPY package.json /usr/src

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "./src/server.js"]