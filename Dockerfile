FROM node:latest AS development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=development

COPY . .
RUN npm run build

FROM node:lates AS production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
