const palindromes = function (str) {
  // remove punctuation marks from string using .replace and regex /[.,\/#!$%\^&\*;:{}=\-_`~()]/
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "");
  // set all characters of string to lowercase to ease comparisons
  str = str.toLowerCase();
  // split() to separate each character of string and insert into an array as separate items
  const arr = str.split("");
  // create for loop to iterate through newly created array
  for (let i = 0; i < arr.length; i++) {
    // on each iteration check that first item in array is not undefined and that the first item matches the last item
    if (arr[0] !== undefined && arr[0] == arr[arr.length - 1]) {
      // delete first item and second item
      arr.shift();
      arr.pop();
    }
  }
  // after loop, if first item is same as last item, return true
  if (arr[0] === arr[arr.length - 1]) {
    return true;
  } else {
    return false;
  }
};

module.exports = palindromes;
