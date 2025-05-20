// const convertToCelsius = function(temp) {
//   let celsius = (temp - 32) * 5/9;
//   if (Number.isInteger(celsius)){
//     return celsius
//   }else{
//     return Number(celsius.toFixed(1))
//   }
// };

const convertToCelsius = (temp) => Number.isInteger((temp - 32) * 5/9) ? (temp - 32) * 5/9 : Number(((temp - 32) * 5/9).toFixed(1));

// const convertToFahrenheit = function(temp) {
//   let fahrenheit = temp*(9/5) + 32;
//   if (Number.isInteger(fahrenheit)){
//     return fahrenheit
//   }else{
//     return Number(fahrenheit.toFixed(1))
//   }
// };

const convertToFahrenheit = (temp) => Number.isInteger(temp*(9/5) + 32) ?  temp*(9/5) + 32 : Number((temp*(9/5) + 32).toFixed(1));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
