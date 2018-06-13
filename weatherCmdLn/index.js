const https = require('https');

const apiKey = process.API_KEY;

const printTemp = (city, temp) => {
    const message = `Current temperature in ${city} is ${temp}F`;
    console.log(message);
}

const getWeather = (zipOrCity) => {
  const request = https.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${apiKey}`);
};

getWeather(process.argv[2]);

