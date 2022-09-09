const leapYears = function (value) {
  if (!(value % 100 === 0) && value % 4 === 0 || value % 400 === 0 && value % 4 === 0) {
    return true;
  } else {
    return false;
  }
};


module.exports = leapYears;
