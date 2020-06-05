FROM node:lts-alpine

RUN mkdir /MangaReader
WORKDIR /MangaReader

COPY . /MangaReader

RUN yarn install

EXPOSE 8080
CMD ["yarn", "run", "serve"]