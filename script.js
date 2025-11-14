function firstWord(s) {
  s = s.trimStart();

  let word = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") break;
    word += s[i];
  }

  return word;
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
