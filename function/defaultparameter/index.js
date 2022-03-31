function convertTemperature(celsius, decimalPlaces = 1) {
    // celsius to fahrenheit
    // if we use the bleow way, when we use 2nd argument as 0 to convert it as an integer not qn decimal, we still get decimalo bcz o is falsy value.it checks if decimalPlaces is given els it uses 1 and gives decemial.to solve this we can use function default parameters
//   decimalPlaces = decimalPlaces || 1;
  const fahrenheit = celsius * 1.8 + 32;
  return Number(fahrenheit.toFixed(decimalPlaces));
}

console.log(convertTemperature(21, 0));