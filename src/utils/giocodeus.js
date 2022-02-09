const request = require("request");

// const url =
//   "http://api.weatherstack.com/current?access_key=c73ad5086a4cddbd7b248a6feb7dff63&query=20,89";

const geocode = (address, callback) => {
  const url2 =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1Ijoic2FuZGVlcC1wYXRlbDIyIiwiYSI6ImNrejZyeG81YjBlb3oydW11ZDd2c2k1N24ifQ.DOGVCTLSbTr-zDECHi0kxQ&limit=1";

  request({ url: url2, json: true }, (error, response) => {
    const sort = response.body.features[0];
    if (error) {
      callback("unable to connect", undefined);
    } else if (response.body.features.length === 0) {
      callback("can not find this location try another location", undefined);
    } else {
      callback(undefined, {
        latitude: sort.center[0],
        longitude: sort.center[1],
        location: sort.place_name,
      });
    }
  });
};
module.exports = geocode;
