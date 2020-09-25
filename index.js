const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passes) {
  for (const time of passes) {
    const milliseconds = time.risetime * 1000;
    const date = new Date(milliseconds);
    console.log(`Next pass at ${date} for ${time.duration} seconds`);
  }
}; 

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
 // printPassTimes(passTimes); 
});

module.exports = {printPassTimes}; 