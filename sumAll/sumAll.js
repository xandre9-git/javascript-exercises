const sumAll = function (start, range) {
  let sum = 0;

  if (
    start < 0 ||
    range < 0 ||
    isNaN(start) ||
    isNaN(range) ||
    typeof start !== "number" ||
    typeof range !== "number"
  ) {
    return sum = "ERROR";
  }

  for (let i = 0; i <= (range > start ? range : start); i++) {
    sum += i;
  }
  return sum;
};

module.exports = sumAll;
