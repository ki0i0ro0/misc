FROM node:18-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --omit=dev

COPY . ./

RUN cp .env.example .env

RUN npm run build

CMD [ "npm", "start" ]
