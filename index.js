const { fetchMyIP, fetchCoordsByIP, IP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});


fetchCoordsByIP(IP, (error, coords) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned Coordinates:', coords);
});