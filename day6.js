const fs = require('fs');
fs.readFile('inputs/input6.txt', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }

  let testStr = 'bvwbjplbgvbhsrlpgdmjqwftvncz';
  console.log(findFirstDifferentSubstring(testStr));
  // console.log(testStr.slice(0, 4));
});

function findFirstDifferentSubstring(str) {
  for (let i = 3; i < str.length; i++) {
    if (!hasRepeats(str.slice(i - 3, i + 1))) {
      return i + 1;
    } else {
      continue;
    }
  }
}

function hasRepeats(str) {
  return /(.).*\1/.test(str);
}
