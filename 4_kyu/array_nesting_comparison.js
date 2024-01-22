Array.prototype.sameStructureAs = function (other) {
  const isArray = (arr) => Array.isArray(arr);
  if (!isArray(other)) return false;
  for (let i = 0; i < this.length; i++) {
    if (
      !isArray(this[i]) !== !isArray(other[i]) ||
      (isArray(this[i]) && this[i].length !== other[i].length) ||
      (isArray(this[i]) && !this[i].sameStructureAs(other[i]))
    )
      return false;
  }
  return true;
};
