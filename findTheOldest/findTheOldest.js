const findTheOldest = function (arr) {


  // check that person is either alive or dead

  // create function to sort through array based on age
  const result = arr.sort((a, b) => {
    // sort method checks year of death minus year of birth (age) versus all other ages in the array
    // if age is > than the age checked, array item is sorted to the index that is before it
    return (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1;
  });

  // return name of person with oldest age
  return result[0];
};

module.exports = findTheOldest;
