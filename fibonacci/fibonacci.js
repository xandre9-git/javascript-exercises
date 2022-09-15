const fibonacci = function(num) {
  // array has placeholder of [1,1] since fn1 is 1 and fn2 is 1 by rule
  const fibArr = [1,1];
  // create for loop to add items in array if num is >= to 3
  if (num < 0) {
    return "OOPS"
  }


  if (num >= 3) {
    // i set at 1 so that last index of fibArr is used at start, (num - 1) is used since last loop is to run 2 times less than number inputted (array already has 2 indexes)
    for (i = 1; i < (num-1); i++){
      // the fibonacci formula... each iteration add latest number in array to second to last number in array and push its result at the end of the array
      fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2])  
    }
    // after loop is complete return last item in array
    return fibArr[fibArr.length - 1];
  } else {
    // if num is less than 3 answer will always be one
    return fibArr[0];
  }

};

module.exports = fibonacci;

// fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
