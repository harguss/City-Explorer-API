'use strict';
//  const  weatherData = require('./data/weather.json');
//  console.log('weather', weatherData);
require('dotenv').config();
const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors()); // "middleware"


const PORT = 3001;
const axios = require('axios');






app.get('/', (req, res) => {
  //  console.log("get/weather");
  res.send('<h1>hello everyone</h1>');
});


app.get('/weatherData', getWeather); 
//refactor is above
//  app.get('/weatherData', (request, response) => {
//  response.json(weatherData);
// });






async function getWeather(request, response) {
// console.log('this is the req inside the getWeather',request.query)
  const q = request.query; // grab the q query string value
    // console.log('q is our request obj?', q.lat);
   try {
     const results = await axios.get(`https://api.openweathermap.org/data/2.5/onecall`, {
       params: {
         appid: process.env.WEATHER_API_KEY,
         lat:  q.lat,
         lon:  q.lon,
       },
     });
     let weatherObject = results.data.daily.map(dayWeather => new WeatherForeCast(dayWeather));
        console.log('this is the getweather object', weatherObject);
        response.send(weatherObject);
   }
   catch (err) {
     console.error('axios error!', err);
    //  response.status(500).send('oops');
   }

}
 
//Thank you Ian.
function upToDateTime(objectDt) {
  let date = new Date(objectDt * 1000);
  // console.log('this is the new date', date);
  return date.toISOString().substr(0,10);
}



//New data gets sent through the class constructor function 
class WeatherForeCast {
  constructor(weatherObject) {
    this.date = upToDateTime(weatherObject.dt);
    this.description = weatherObject.weather[0].description;
  }
}







app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);

});
