FROM node:18-slim

WORKDIR /usr/src/app

COPY package*.json ./

COPY . ./

RUN npm install --omit=dev

RUN cp .env.example .env

RUN npm run build

CMD [ "npm", "start" ]
