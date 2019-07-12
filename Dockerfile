FROM node:10.16

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ADD package.json yarn.lock /usr/src/app/
RUN yarn

ADD . /usr/src/app

EXPOSE 9001

USER node
CMD ["yarn", "start"]
