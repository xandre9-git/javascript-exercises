const removeFromArray = function (arr, ...items) {
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (arr[i] === items[j]) {
        arr.splice(i, 1);
        i = 0;
      }
    }
  }

  return arr;
};

module.exports = removeFromArray;
