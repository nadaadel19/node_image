FROM alpine 

WORKDIR /app

COPY index.js .

RUN apk add --update nodejs npm

RUN npm install express

EXPOSE 8000

CMD node index.js
