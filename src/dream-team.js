module.exports = function createDreamTeam(names) {

  if (Array.isArray(names)) {
    return names.map(function (el) {
      if (typeof el === 'string') {
        el = el.trim();
        return el[0].toUpperCase()
      }
    }).sort().join('')
  }
  return false;
};