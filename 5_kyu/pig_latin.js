function pigIt(str) {
  return str
    .split(" ")
    .map((word) => {
      if (word.match(/[!|?|.]/gm)) return word;
      var split = word.split("");
      [split[split.length], split[0]] = [split[0], ""];
      return split.join("") + "ay";
    })
    .join(" ");
}
