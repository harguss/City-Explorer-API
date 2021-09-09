'use strict';

const { response } = require('express');
const express = require('express');
const app = express();
const  weather = require('./data/weather.json');

console.log('weather', weather);
const PORT = 3001;






app.get("/", function (req, res) {
  console.log("get /");
  res.send('<h1>hello everyone</h1>');
});


































app.listen(PORT, () => {
  console.log('Server started: https://localhost:${PORT}');

});
