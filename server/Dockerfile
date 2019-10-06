FROM node:10.16.3

COPY ./dummy /src
RUN cd /src; npm install

WORKDIR /src

RUN npm install pm2 -g
CMD [ "pm2-runtime", "npm", "--", "start" ]

EXPOSE 3000