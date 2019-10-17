const leapYears = function(year) {
    
  const centuryYear = year % 100 == 0 && year % 400 != 0;
  const leapYear    = year % 4 == 0;

  if (centuryYear || !leapYear) {
    return false;
  } else {
    return true;
  }
}

// Anything divisible by 4 = true
// Unless divisible by 100 = false
// Unless divisible by 400 = true
// Everything else false too

module.exports = leapYears
