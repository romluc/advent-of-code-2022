// [T] [V]                     [W]
// [V] [C] [P] [D]             [B]
// [J] [P] [R] [N] [B]         [Z]
// [W] [Q] [D] [M] [T]     [L] [T]
// [N] [J] [H] [B] [P] [T] [P] [L]
// [R] [D] [F] [P] [R] [P] [R] [S] [G]
// [M] [W] [J] [R] [V] [B] [J] [C] [S]
// [S] [B] [B] [F] [H] [C] [B] [N] [L]
//  1   2   3   4   5   6   7   8   9

const crane1 = ['S', 'M', 'R', 'N', 'W', 'J', 'V', 'T'];
const crane2 = ['B', 'W', 'D', 'J', 'Q', 'P', 'C', 'V'];
const crane3 = ['B', 'J', 'F', 'H', 'D', 'R', 'P'];
const crane4 = ['F', 'R', 'P', 'B', 'M', 'N', 'D'];
const crane5 = ['H', 'V', 'R', 'P', 'T', 'B'];
const crane6 = ['C', 'B', 'P', 'T'];
const crane7 = ['B', 'J', 'R', 'P', 'L'];
const crane8 = ['N', 'C', 'S', 'L', 'T', 'Z', 'B', 'W'];
const crane9 = ['L', 'S', 'G'];

const cranesArr = [
  crane1,
  crane2,
  crane3,
  crane4,
  crane5,
  crane6,
  crane7,
  crane8,
  crane9,
];

const fs = require('fs');
fs.readFile('input5.txt', 'utf8', function read(err, data) {
  if (err) {
    throw err;
  }

  const strings = data.split(/\r?\n/);
  let cranesArrCopy = cranesArr.slice();
  strings.map((line, i) => {
    const instructionsArr = line.match(/\d+/g);
    const [n, from, to] = instructionsArr;
    const indexFrom = Number(from) - 1;
    const indexTo = Number(to) - 1;
    let craneTo = cranesArrCopy[indexTo];
    const movingItems = cranesArrCopy[indexFrom].slice(-n);
    const newCraneTo = [...craneTo, ...movingItems];
    const newCraneFrom = cranesArrCopy[indexFrom].slice(0, -n);
    cranesArrCopy[indexFrom] = [...newCraneFrom];
    cranesArrCopy[indexTo] = [...newCraneTo];
  });
  console.log('After: ', cranesArrCopy);

  let res = [];
  cranesArrCopy.map((crane) => res.push(crane.slice(-1)));
  console.log(res);
});
