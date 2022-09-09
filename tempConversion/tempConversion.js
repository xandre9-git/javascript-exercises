const ftoc = function(farenheit) {
  let celsius = (farenheit - 32) * (5 / 9);
  return Number(celsius.toFixed(1));
};

const ctof = function(celsius) {
  let farenheit = (celsius * 9/5) + 32
  return Number(farenheit.toFixed(1));
};

module.exports = {
  ftoc,
  ctof
};
