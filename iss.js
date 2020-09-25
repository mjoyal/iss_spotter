
const request = require('request');

const nextISSTimesForMyLocation = function(callback) {
  let ip = "";
  const coords = {};
  request("https://api.ipify.org?format=json", (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      ip = JSON.parse(body).ip;
    }
    request(`https://ipvigilante.com/${ip}`, (error, response, body) => {
      if (error) {
        callback(error, null);
        return;
      } else if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
        callback(Error(msg), null);
        return;
      } else {
        coords['latitude'] = JSON.parse(body).data.latitude;
        coords['longitude'] = JSON.parse(body).data.longitude;
      }
      request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
        if (error) {
          callback(error, null);
          return;
        } else if (response.statusCode !== 200) {
          const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
          callback(Error(msg), null);
          return;
        } else {
          const times = JSON.parse(body).response;
          callback(null, times);
        }
      });
    });
  });
};

module.exports = { nextISSTimesForMyLocation };
