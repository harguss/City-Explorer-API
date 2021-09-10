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
  const q = request.query.q; // grab the q query string value

   try {
     const results = await axios.get(`https://api.openweathermap.org/data/2.5/onecall`, {
       params: {
         appid: process.env.WEATHER_API_KEY,
         lat:  41.9758872,
         lon:  -91.6704053,
       },
     });
    console.log('this is the results from the api' , results);
    //  let getWeather =
    //    results.data.map(weather => new Weather(weather));

    //  response.send(weatherArray);
   }
   catch (err) {
     console.error('axios error!', err);
    //  response.status(500).send('oops');
   }

}
// create async function to get the weather. 


//add blue code







//New data gets sent through the class constructor function 
// class Weather(){
//   constructor(){}
// }







app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);

});
