module.exports = function getSeason(...parameteres) {
// function getSeason(...parameteres) {
  const month = parameteres[0].getMonth();
  const dateFromParameter = new Date(parameteres).getTime();
  const currentDate = Date.now();

  if (dateFromParameter.toString()[9] === currentDate.toString()[9]) {
    return 'Error'
  } else {
    switch (month) {
      case 11:
      case 0:
      case 1:
        return 'winter';
      case 2:
      case 3:
      case 4:
        return 'spring';
      case 5:
      case 6:
      case 7:
        return 'summer';
      case 8:
      case 9:
      case 10:
        return 'autumn';
      default:
        return 'Unable to determine the time of year!';
    }
  };
}
// console.log(getSeason(new Date(2019, 11, 22, 23, 45, 11, 500)));  // winter
// console.log(getSeason(new Date(2018, 4, 17, 11, 27, 4, 321)));    // spring
// console.log(getSeason(new Date(2017, 6, 11, 23, 45, 11, 500)));   // summer
// console.log(getSeason(new Date(1994, 8, 26, 3, 0, 11, 500))); // autumn