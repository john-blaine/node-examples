const getWeather = require('./weather');

getWeather(process.argv.slice(2).join(' '));