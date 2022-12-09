const isGreaterThanOthersInLine = require('./utils/isGreaterThanOthersInLine.js');
const fs = require('fs');
fs.readFile('inputs/input8.txt', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }

  const FIRST_LINE = 99;
  const LAST_LINE = 99;
  const TWO_LATERAL_COLUMNS = 97 * 2;
  const edgesTrees = FIRST_LINE + LAST_LINE + TWO_LATERAL_COLUMNS;

  const matrix = data.split(/\r?\n/);
  const treeMatrix = matrix.map(toArray);

  let row = [];
  let number = 0;
  let sum = 0;

  for (let i = 1; i < treeMatrix.length - 1; i++) {
    for (let j = 1; j < treeMatrix.length - 1; j++) {
      if (isGreaterThanOthersInLine(treeMatrix, i, j)) sum++;
    }
  }

  console.log(sum + edgesTrees);
});

const toArray = (line) => Array.from(line);
