//Get first 2 values from the list that add up to the sum, pick the 2nd element that has the smallest index
//Account for parameters with millions of elements and avoid time outs

function sumPairs(ints, sum) {
  let result;
  let lowestIndex = ints.length;
  let seen = [];
  ints.forEach((int, i) => {
    if (seen.includes(int)) return;
    let remaining = sum - int;
    let addend = ints.find((el, i2) => {
      if (el === remaining && i2 > i && i2 < lowestIndex) {
        lowestIndex = i2;
        return true;
      }
      return false;
    });
    seen.push(int);
    if (addend !== undefined) {
      result = [int, addend];
      return;
    }
  });
  return result;
}
