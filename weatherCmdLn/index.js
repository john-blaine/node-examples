require('dotenv').config();
const http = require('http');

const apiKey = process.env.API_KEY;

const printTemp = (city, temp) => {
    const message = `Current temperature in ${city} is ${temp}F`;
    console.log(message);
}

const getWeather = (zipOrCity) => {
  const request = http.get(`http://api.openweathermap.org/data/2.5/find?q=London&units=imperial&APPID=${apiKey}`, (res) => {
    let body = '';

    res.on('data', data => {
        body += data.toString();
    })

    res.on('end', () => {
        console.log(body);
    })
  });


};

getWeather(process.argv[2]);

