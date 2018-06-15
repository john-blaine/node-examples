require('dotenv').config();
const http = require('http');

const apiKey = process.env.API_KEY;

const printTemp = (city, temp) => {
  const message = `Current temperature in ${city} is ${temp}F`;
  console.log(message);
}

const getWeather = (zipOrCity) => {

  let query;

  if (zipOrCity.match(/(^\d{5}$)/gm)) {
    query = `http://api.openweathermap.org/data/2.5/weather?zip=${zipOrCity}&units=imperial&APPID=${apiKey}`;
  } else {
    query = `http://api.openweathermap.org/data/2.5/weather?q=${zipOrCity}&units=imperial&APPID=${apiKey}`;
  }

  const request = http.get(query, (res) => {
    let body = '';

    res.on('data', data => {
      body += data.toString();
    })

    res.on('end', () => {
      body = JSON.parse(body);
      printTemp(body.name, Math.round(body.main.temp * 10) / 10);
    })
  });
};

module.exports = getWeather;
