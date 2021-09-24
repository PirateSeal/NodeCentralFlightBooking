FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn run tsc

EXPOSE 3000

CMD [ "node", "dist/app.js" ]
