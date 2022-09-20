const findTheOldest = function (arr) {
  // create date variable to contain date() method (has current date based on UTC)
  const date = new Date();

  // set current year with date.getYear() + 1900 as 1900 is the base year (base year is added to numbers of years after 1900)
  const currentYear = 1900 + date.getYear();

  // create function to sort through array based on age
  const result = arr.sort((a, b) => {
    // sort method checks year of death minus year of birth (age) versus all other ages in the array

    // if no yearOfDeath is present use current year instead
    if (b.yearOfDeath === undefined) {
      // sets yearOfDeath to current year
      b.yearOfDeath = currentYear;
    }

    // if age is > than the age checked, array item is sorted to the index that is before it (from greatest to least)
    return a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth
      ? -1
      : 1;
  });

  // return name of person with oldest age
  return result[0];
};

module.exports = findTheOldest;
