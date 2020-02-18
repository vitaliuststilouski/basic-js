module.exports = function countCats(array) {
  if (array.length === 0) {
    return 0;
  }

  var earsPair = '^^';
  var newArray = array.reduce(function (acc, val) {
    return acc.concat(val)
  })

  var count = newArray.reduce(function (sum, el) {
    if (el === earsPair) {
      return sum + 1
    }
    return sum;
  }, 0);
  return count
};
