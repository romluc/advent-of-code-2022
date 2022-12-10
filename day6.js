const fs = require('fs');
fs.readFile('inputs/input6.txt', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }

  console.log(findFirstDifferentSubstring(data, 13));
});

function findFirstDifferentSubstring(str, n) {
  for (let i = n; i < str.length; i++) {
    if (!hasRepeats(str.slice(i - n, i + 1))) {
      return i + 1;
    } else {
      continue;
    }
  }
}

function hasRepeats(str) {
  return /(.).*\1/.test(str);
}
