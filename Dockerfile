FROM node:12.18.3-alpine3.9

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
RUN yarn config set strict-ssl false
RUN yarn
RUN yarn add react-scripts@3.4.0

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]