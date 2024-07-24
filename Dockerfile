FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npx playwright install

COPY . .

ENV CI=true

CMD ["npx", "playwright", "test"]

