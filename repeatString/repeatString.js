const repeatString = function(str, n) {

  let res = '';

  if (n < 0) {
    return res = 'ERROR';
  }

  for (let i = 0; i < n; i++) {
    res += str;
  }

  return res;
};

console.log(repeatString('ya',3));

module.exports = repeatString;
