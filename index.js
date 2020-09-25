const { fetchMyIP, fetchCoordsByIP, IP, fetchISSFlyOverTimes} = require('./iss');

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

fetchISSFlyOverTimes({ latitude: '48.49930', longitude: '-123.40030' }, (error, flyOverTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned FlyoverTimes:', flyOverTimes);
});

