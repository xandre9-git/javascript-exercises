const repeatString = function(str, n) {
  
  let res = '';

  for (let i = 0; i < n; i++) {
    res += str;
  }

  return res;
};

console.log(repeatString('ya',3));

module.exports = repeatString;
