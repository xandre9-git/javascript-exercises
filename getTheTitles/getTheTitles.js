const getTheTitles = function(arr) {
  // create an empty array to hold book titles
  const bookTitles = [];
  // for loop to iterate all items in array of books and authors
  for (i = 0; i < arr.length; i++){
    // push only titles into a new array with each iteration
    bookTitles.push(arr[i]["title"]);
  }
  // return new array
  return bookTitles;
};


module.exports = getTheTitles;
