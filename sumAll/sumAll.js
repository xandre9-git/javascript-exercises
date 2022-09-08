const sumAll = function (start, range) {

  let sum = 0;

  // console.log(start);
  // console.log(range);

  if ((start < 0 )|| (range < 0)) {
    return sum = "ERROR";
  }

  if (isNaN(start) || isNaN(range)) {
    return sum = "ERROR";
  }

  if (typeof start !== "number" || typeof range !== "number") {
    return sum = "ERROR";
  }
  
  for (let i = 0; i <= (range > start ? range : start); i++) {
    // sum += parseInt(range[i], 10);
    sum += i;
    // console.log(sum);
  }
  return sum;
};

// console.log(sumAll(123, 1)); // 7626


module.exports = sumAll;
