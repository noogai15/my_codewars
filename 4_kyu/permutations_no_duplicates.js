function permutations(string) {
  let chars = string.split("");
  let size = chars.length;
  let result = [];

  function heap(chars, size, result) {
    if (size == 1) {
      result.push([...chars]);
      return;
    }
    for (let i = 0; i < size; i++) {
      heap(chars, size - 1, result);

      if (size % 2 === 0) [chars[i], chars[size - 1]] = [chars[size - 1], chars[i]];
      else [chars[0], chars[size - 1]] = [chars[size - 1], chars[0]];
    }
  }
  heap(chars, size, result);
  return [...new Set(result.map((el) => el.join("")))];
}
