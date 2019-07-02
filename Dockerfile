FROM node:9.11.2

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ADD package.json yarn.lock /usr/src/app/
RUN yarn

ADD . /usr/src/app
RUN yarn build

EXPOSE 9001

USER node
CMD ["node", "dist"]
