FROM node:latest AS development
WORKDIR /server
RUN yarn install --production=false
CMD [ "yarn", "start:dev" ]