const book = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function toRoman(num) {
  let roman = "";
  Object.entries(book).forEach(([key, value]) => {
    while (num >= value && num !== 0) {
      num -= value;
      roman += key;
    }
  });
  return roman;
}

function fromRoman(str) {
  return str
    .match(/M|CM|D|CD|C|XC|L|XL|X|IX|V|IV|I/g)
    .map((roman) => book[roman])
    .reduce((num, nextNum) => num + nextNum);
}
