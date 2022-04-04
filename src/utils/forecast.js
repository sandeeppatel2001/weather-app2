const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=c73ad5086a4cddbd7b248a6feb7dff63&query=" +
    longitude +
    "," +
    latitude;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        [response.body.current +
          " It is currently " ,
          response.body.current.temperature +
          " degress out. There is a " ,
          response.body.current.feelslike +
          "% chance of rain."]
      );
    }
  });
};
module.exports = forecast;
