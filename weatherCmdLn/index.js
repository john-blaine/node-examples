require('dotenv').config();
const apiKey = process.env.API_KEY;
const getWeather = require('./weather');

getWeather(process.argv.slice(2).join(' '), apiKey);