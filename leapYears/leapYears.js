const leapYears = function (value) {
  if (value % 4 === 0) {
    return true;
  } else {
    return false;
  }
};


module.exports = leapYears;
