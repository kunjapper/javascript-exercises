const convertToCelsius = function(tempF) {
  var celsius = (5/9)*(tempF-32).toFixed(1);
  celsius = Math.round(celsius*10)/10;
  return celsius;
};

const convertToFahrenheit = function(tempC) {
  var fahrenheit = ((9/5)*(tempC)+32).toFixed(1);
  fahrenheit = Math.round(fahrenheit*10)/10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
