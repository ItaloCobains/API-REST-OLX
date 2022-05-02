FROM node:lts-alpine3.10

RUN apk add bash

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn add glob rimraf
RUN yarn install

COPY . .

RUN yarn compile
