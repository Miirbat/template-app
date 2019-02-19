FROM node:10-alpine

ENV APP_DIR /app
ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV production

RUN addgroup -S mirna \
    && adduser -S -G mirna mirna

RUN apk add --no-cache 'su-exec>=0.2'

RUN npm install --ignore-optional -g \
  pm2 \
  yarn

WORKDIR $APP_DIR

COPY package.json yarn.lock $APP_DIR/

RUN yarn install \
    && chown -R mirna:mirna $APP_DIR/node_modules \
    && yarn cache clean

COPY . $APP_DIR

RUN yarn build

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
# ENTRYPOINT ["entrypoint.sh"]
# CMD ["runserver"]
# CMD ["su-exec", "mirna", "yarn", "run", "start"]
CMD ["su-exec", "mirna", "node", "server.js"]
