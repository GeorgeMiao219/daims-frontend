FROM node:12
WORKDIR D:\Work\JS\daims
COPY dist dist
COPY app.js .
COPY docker_package.json package.json
COPY *.pem ./
RUN npm install
EXPOSE 3000
CMD [ "node", "app.js" ]
