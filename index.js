const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  for (const time of passTimes) {
    const milliseconds = time.risetime * 1000;
    const date = new Date(milliseconds);
    console.log(`Next pass at ${date} for ${time.duration} seconds`);
  }
});

