// run `node index.js` in the terminal

const fs = require('fs');
fs.readFile('input4.txt', 'utf8', function read(err, data) {
  if (err) {
    throw err;
  }

  let result = 0;
  const strings = data.split(/\r?\n/);
  console.log(strings.length);
  strings.map((pair) => {
    const splitPairByComma = pair.split(',');
    const [firstPair, secondPair] = splitPairByComma;
    if (firstPair && secondPair) {
      const firstSplittedPair = firstPair.split('-');
      const secondSplittedPair = secondPair.split('-');

      const firstNumber = Number(firstSplittedPair[0]);
      const secondNumber = Number(firstSplittedPair[1]);
      const thirdNumber = Number(secondSplittedPair[0]);
      const fourthNumber = Number(secondSplittedPair[1]);

      if (fullyContains(firstNumber, secondNumber, thirdNumber, fourthNumber))
        result++;
      console.log(result);
    }
  });
});

const fullyContains = (num1, num2, num3, num4) =>
  (num1 <= num3 && num2 >= num4) || (num3 <= num1 && num4 >= num2);
