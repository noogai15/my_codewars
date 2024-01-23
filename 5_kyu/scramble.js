//Can str2 be rearranged out of all or some letters from str1?
//Consider very large inputs and timeouts
function scramble(str1, str2) {
  if (!str1 || !str2 || str2.length > str1.length) return false;

  let seen = [];
  for (let i = 0; i < str2.length; i++) {
    const current = str2.charAt(i);
    if (seen.includes(current)) continue;
    seen.push(str2.charAt(i));

    const pattern = new RegExp(current, "g");
    const match1 = str1.match(pattern);
    const match2 = str2.match(pattern);

    if (!match1 || match1.length < match2.length) return false;
  }
  return true;
}
