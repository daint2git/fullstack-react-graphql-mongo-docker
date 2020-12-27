
# ------------------------------------------------------
# Stage 1 - the build process
# ------------------------------------------------------
FROM node:12-alpine as builder

WORKDIR /usr/app

ARG CODE_PATH=./app

COPY ${CODE_PATH}/package.json ${CODE_PATH}/yarn.lock ./

RUN yarn install --frozen-lockfile

COPY ${CODE_PATH}/ ./

RUN yarn build

# ------------------------------------------------------
# Stage 2 - the production environment
# ------------------------------------------------------
FROM nginx:1.16.0-alpine

COPY ./app/nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /usr/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
