FROM node:latest

ENV APP_ROOT /node/

WORKDIR $APP_ROOT

COPY . $APP_ROOT

ENV APP_ROOT /node/my-app/

WORKDIR $APP_ROOT

RUN npm start -s