const removeFromArray = function(arr, item) {

  // iterate through array
  // search for item in current iteration
  // if found, note index location of item
  // remove item from array
  // continue iteration for remaining items in array

  let length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] === item) {
      console.log('Found it!');
      arr.splice(i,1);
    }
  }

return arr;

};

// const arrayOfAnimals = ['otter', 'rabbit', 'human'];

// removeFromArray(arrayOfAnimals, 'otter');

module.exports = removeFromArray;
