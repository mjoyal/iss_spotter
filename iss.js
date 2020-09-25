// * Makes a single API request to retrieve the user's IP address.
// * Input:
// *   - A callback (to pass back an error or the IP string)
// * Returns (via Callback):
// *   - An error, if any (nullable)
// *   - The IP address as a string (null if error). Example: "162.245.144.188"
// */
const request = require('request');
let IP = "";

const fetchMyIP = function(callback) {
  request("https://api.ipify.org?format=json", (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      IP = JSON.parse(body).ip;
      callback(null, IP);
    }
  });
};

const fetchCoordsByIP = function(ip, callback2) {
  request(`https://ipvigilante.com/${ip}`, (error, response, body) => {
    if (error) {
      callback2(error, null);
      return;
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback2(Error(msg), null);
      return;
    } else {
      const { latitude, longitude } = JSON.parse(body).data;
      callback2(null, { latitude, longitude });
    }
  });
};


module.exports = { fetchMyIP, fetchCoordsByIP, IP};





// https://api.ipify.org?format=json

// response.statusCode;