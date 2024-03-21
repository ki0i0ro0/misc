FROM node:20.11.1-bullseye-slim

WORKDIR /app

COPY . ./

RUN npm install --omit=dev

CMD ["npx","prisma","migrate","deploy"]
