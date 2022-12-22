const fs = require('fs');
fs.readFile('inputs/input11.txt', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }

  function getOperationFunction(input) {
    return function (old) {
      const string = input.replace(/old/, old);
      // Not the ideal approach, but...
      return eval(string);
    };
  }

  // function getOperationFunction(input) {
  //   const match = input.match(/(old [^\d]* \d+|old [^\d]+ old)/);
  //   if (!match) {
  //     throw new Error(`Invalid input: ${input}`);
  //   }
  //   const inputWithoutNew = match[1];
  //   if (/^old [^\d]+ old$/.test(inputWithoutNew)) {
  //     return (old) => old * old;
  //   }
  //   const operation = inputWithoutNew.match(/[+-/*]/)[0];
  //   const value = parseInt(inputWithoutNew.match(/\d+/)[0], 10);
  //   console.log(value);
  //   switch (operation) {
  //     case '+':
  //       return (old) => old + value;
  //     case '-':
  //       return (old) => old - value;
  //     case '*':
  //       return (old) => old * value;
  //     case '/':
  //       return (old) => old / value;
  //     default:
  //       throw new Error(`Invalid operation: ${operation}`);
  //   }
  // }

  console.log(getOperationFunction('old * old')); // 100
  console.log(getOperationFunction('old * 13')); // 130
  console.log(getOperationFunction('old + old')); // 20
  console.log(getOperationFunction('old  + 6')); // 16

  function getMonkeys() {
    const monkeys = data
      .trim()
      .split('\n\n')
      .map((lines, monkeyId) => {
        const items = lines
          .match(/Starting items(?:[:,] (\d+))+/g)[0]
          .split(': ')[1]
          .split(',')
          .map(Number);

        const operation = lines.match(/= ([^\n]+)/)[1];
        const divisibleBy = parseInt(lines.match(/divisible by (\d+)/)[1]);
        const whenTrueSendTo = parseInt(
          lines.match(/If true: throw to monkey (\d)/)[1]
        );
        const whenFalseSendTo = parseInt(
          lines.match(/If false: throw to monkey (\d)/)[1]
        );

        return {
          id: monkeyId,
          totalInspectedObjects: 0,
          items,
          divisibleBy,
          operation: getOperationFunction(operation),
          sendTo: (item) =>
            item % divisibleBy === 0 ? whenTrueSendTo : whenFalseSendTo,
        };
      });
    console.log(monkeys);
    return monkeys;
  }

  (function part1() {
    const monkeys = getMonkeys();
    for (let i = 0; i < 20; i++) {
      for (const monkey of monkeys) {
        let items = monkey.items;
        while (items.length) {
          let item = items.shift();
          monkey.totalInspectedObjects++;
          item = monkey.operation(item);
          item = Math.floor(item / 3);
          const destination = monkey.sendTo(item);
          monkeys[destination].items.push(item);
        }
      }
    }
    const activity = monkeys.map((monkey) => monkey.totalInspectedObjects);
    activity.sort((a, b) => b - a);
    console.log(activity[0] * activity[1]);
  })();

  (function part2() {
    const monkeys = getMonkeys();
    const divider = monkeys
      .map((m) => m.divisibleBy)
      .reduce((a, b) => a * b, 1);
    for (let i = 0; i < 10000; i++) {
      for (const monkey of monkeys) {
        let items = monkey.items;
        while (items.length) {
          let item = items.shift();
          monkey.totalInspectedObjects++;

          item = monkey.operation(item);
          item = item % divider;
          const destination = monkey.sendTo(item);

          monkeys[destination].items.push(item);
        }
      }
    }
    const activity = monkeys.map((m) => m.totalInspectedObjects);
    activity.sort((a, b) => b - a);
    console.log(activity[0] * activity[1]);
  })();
});
