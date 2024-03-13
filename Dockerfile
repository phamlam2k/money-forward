FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --force

COPY . .

RUN npm run build

EXPOSE 1403

CMD ["npm", "start"]
