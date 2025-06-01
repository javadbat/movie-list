FROM node:20 AS production

# USER root
ENV NODE_ENV production
ARG APP_STAGE
ENV APP_STAGE ${APP_STAGE}
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

RUN npm run build

RUN npm i -g serve

EXPOSE 3001
