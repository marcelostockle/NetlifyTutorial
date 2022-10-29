FROM node:18-alpine

RUN mkdir /app
RUN cd /app/ && npm i react@18.2.0 react-dom@18.2.0 react-scripts@5.0.1 web-vitals@2.1.4 @testing-library/jest-dom@5.16.5 @testing-library/react@13.4.0 @testing-library/user-event@13.5.0

COPY ./package.json /app/
RUN cd /app/ && npm i --legacy-peer-deps
RUN mkdir /app/public /app/src 
COPY ./public/ /app/public/
COPY ./src/ /app/src/

CMD cd /app/ && npm start
