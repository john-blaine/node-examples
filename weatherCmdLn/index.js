const https = require('https');

const printTemp = (city, temp) => {
    const message = `Current temperature in ${city} is ${temp}F`;
    console.log(message);
}

const getWeather = (zipOrCity) => {
  console.log(zipOrCity);
};

getWeather(process.argv[2]);

