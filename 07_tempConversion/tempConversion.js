const convertToCelsius = function(tempF) {
  var convertedF = (tempF * (9/5)+(32)).toFixed(2);
  return convertedF;
};

const convertToFahrenheit = function(tempC) {
  var convertedC = ((5/9)*(tempF-32)).toFixed(2);
  return convertedC;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
