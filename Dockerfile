FROM node:16.17.0

USER node

WORKDIR /app

CMD [ "/app/start.sh" ]