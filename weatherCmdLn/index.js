require('dotenv').config();
const http = require('http');

const apiKey = process.env.API_KEY;

const printTemp = (city, temp) => {
  const message = `Current temperature in ${city} is ${temp}F`;
  console.log(message);
}

const getWeather = (zipOrCity) => {

  if (zipOrCity.match(/(^\d{5}$)/gm)) {
    console.log('Matched');
  } else {
    console.log('No match');
  }

  const request = http.get(`http://api.openweathermap.org/data/2.5/find?q=London&units=imperial&APPID=${apiKey}`, (res) => {
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

