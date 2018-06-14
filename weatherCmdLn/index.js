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
    query = `http://api.openweathermap.org/data/2.5/find?zip=${zipOrCity}&units=imperial&APPID=${apiKey}`;
  } else {
    zipOrCity = zipOrCity.split(' ');
    if (zipOrCity.length ==! 1) {
      query = `http://api.openweathermap.org/data/2.5/find?q=${zipOrCity[0]},${zipOrCity[1]}&units=imperial&APPID=${apiKey}`;
    } else {
      query = `http://api.openweathermap.org/data/2.5/find?q=${zipOrCity[0]}&units=imperial&APPID=${apiKey}`;
    }
  }

  const request = http.get(query, (res) => {
    let body = '';

    res.on('data', data => {
        body += data.toString();
    })

    res.on('end', () => {
        body = JSON.parse(body);
        printTemp(body.list[0].name, body.list[0].main.temp);
    })
  });
};

getWeather(process.argv[2]);

