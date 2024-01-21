function correct(num) {
  if (num < 0) return 0;
  if (num > 255) return 255;
  else return num;
}

function rgb(r, g, b) {
  let result =
    correct(r).toString(16).padStart(2, "0") +
    correct(g).toString(16).padStart(2, "0") +
    correct(b).toString(16).padStart(2, "0");
  return result.toUpperCase();
}
