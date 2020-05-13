FROM node:lts-alpine

RUN mkdir /MangaReader
WORKDIR /MangaReader

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 8080
CMD ["yarn", "run", "serve"]