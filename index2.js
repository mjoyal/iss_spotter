const {nextISSTimesForMyLocation} = require('./iss_promised');
const {printPassTimes} = require('./index'); 

nextISSTimesForMyLocation()
  .then((passtimes) => {
    printPassTimes(passtimes); 
  })
  .catch((error) => {
    console.log( `It didn't work!`, error.message); 
  });  
