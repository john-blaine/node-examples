const http = require('http');

const printTemp = (city, temp) => {
  const message = `Current temperature in ${city} is ${temp}F`;
  console.log(message);
}

const printError = (error) => {
  console.error(error.message);
}

const getWeather = (zipOrCity, apiKey) => {
    try {
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
            if (res.statusCode === 200) {
              printTemp(body.name, Math.round(body.main.temp * 10) / 10);
            } else {
              console.error(`Error encountered:\n`
              + `Status Code: ${body.cod} \n`
              + `Response Message: ${body.message}`);
            }
          })
        });
      request.on('error', error => console.error(`Problem with request: ${error.message}`));
    } catch (error) {
      printError(error);
    }
};

module.exports = getWeather;
