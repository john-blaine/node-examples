const https = require('https');

const getWeather = (zipOrCity) => {
  console.log(zipOrCity);
};

getWeather(process.argv[2]);

