FROM node:12-alpine

WORKDIR /usr/api

ARG CODE_PATH=./api

COPY ${CODE_PATH}/package.json ${CODE_PATH}/yarn.lock ./

RUN yarn install --frozen-lockfile

RUN yarn global add pm2

COPY ${CODE_PATH}/ ./

RUN yarn build

EXPOSE 4000

CMD ["pm2-runtime", "build/main.js"]
