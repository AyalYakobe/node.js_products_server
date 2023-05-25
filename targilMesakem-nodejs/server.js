const express = require("express");
const fs = require("fs");
const path = require("path");
const htmlRoute = require('./controllers/productsUI/routerFile');
const apiRoute = require('./controllers/restAPI/api');

let server = express();

server.use(htmlRoute);
server.use(apiRoute);

server.listen(3001, () => {
  setInterval(() => {
    console.log("app is up..");
  }, 50000);
});
