FROM node:14 AS development
WORKDIR /var/www/backend
COPY package*.json ./
COPY .env.docker ./.env
RUN npm install glob rimraf

RUN npm install  --no-optional

COPY . .

# RUN npm run migrate
RUN npm run generate

EXPOSE 3000

CMD [ "npm","run", "start:dev" ]