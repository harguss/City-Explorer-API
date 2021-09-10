'use strict';
// const  weatherData = require('./data/weather.json');
// console.log('weather', weatherData);
require('dotenv').config();
const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors()); // "middleware"


const PORT = 3001;
const axios = require('axios');


//add axios require statement here.



app.get('/', (req, res) => {
  // console.log("get/weather");
  res.send('<h1>hello everyone</h1>');
});


app.get('/weatherData', getWeather); 



// app.get('/weatherData', (request, response) => {
//   // response.json(weatherData);
// });



// const response = await axios.get(url, {
//   // query string parameters
//   params: {
//     // get key from environment variables
//     key: process.env.REACT_APP_LOCATION_KEY,
//     q, // variable already has correct name
//     format: 'json',
//   }
// });
// console.log(response);



async function getWeather(request, response) {
console.log('this is the req inside the getWeather',request)
  // const q = request.query.q; // grab the q query string value

  // try {
  //   const results = await axios.get('https://api.openweathermap.org/data/2.5/weather?q={q}&appid={}', {
  //     params: {
  //       //  process.env.WEATHER_API,
       
  //     },
  //   });

  //   let getWeather =
  //     results.data.map(weather => new Weather(weather));

  //   response.send(weatherArray);
  // }
  // catch (err) {
  //   console.error('axios error!', err);
  //   response.status(500).send('oops');
  // }

}
//create async function to get the weather. 


//add blue code





app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);

});
