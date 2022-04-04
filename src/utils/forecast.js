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
      callback(undefined, [
        " Temperature= " + response.body.current.temperature + " degree",
        "wind_speed=" + response.body.current.wind_speed,
        "Air_Pressure=" + response.body.current.pressure,
        "Humidity=" + response.body.current.humidity,
        "visibility=" + response.body.current.visibility,
      ]);
    }
  });
};
module.exports = forecast;
