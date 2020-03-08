module.exports = function getSeason(/* date */) {
  throw 'Not implemented';
  // remove line with error and write your code here
};
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