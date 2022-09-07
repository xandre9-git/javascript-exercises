const reverseString = function(str) {
  
  let stringArray = str.split('');
  let reverseString = "";
  let n = stringArray.length;

  for (let i = 0; i < n; i++) {
    reverseString += stringArray.pop();
  } 
  
  return reverseString;
};

// let testArray = reverseString('spring');
// console.log(testArray);

module.exports = reverseString;
