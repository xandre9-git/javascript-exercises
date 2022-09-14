const add = function(x,y) {
	return parseInt(x) + parseInt(y);
};

const subtract = function(x,y) {
	return parseInt(x) - parseInt(y);
};

const sum = function(arr) {
  return arr.reduce((acc,curr) => acc + curr,0)	
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => acc * curr);
};

const power = function(base,exp) {
  res = base;
  for (i = 2; i <= exp; i++){
    res = res * base;    
  }
	return res;
};


const factorial = function(n) {
  if (n == 0 || n == 1) {
    return n = 1;
  } if (n == 2) {
    return n = 2;
  } else {
    let factorial = []
    for (i=1;i<=n;i++){
      factorial.push(i);
    }
    return multiply(factorial)
  }
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
