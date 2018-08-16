FROM node:8

RUN mkdir -p /app
WORKDIR /app
ADD package.json /app
RUN npm install
COPY . /app
RUN npm run storybook-build

FROM kyma/docker-nginx
COPY --from=0 /app/.storybook-out /var/www
CMD ["nginx"]