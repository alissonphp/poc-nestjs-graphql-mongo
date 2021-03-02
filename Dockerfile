FROM node:latest AS development
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install --production=false

COPY . .
RUN yarn run build

FROM node:lates AS production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install --production=true
COPY . .
COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
