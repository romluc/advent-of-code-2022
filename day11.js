const fs = require('fs')
fs.readFile('inputs/input11.txt', 'utf8', function read(err, data) {
  if (err) {
    throw err
  }

  function getOperationFunction(input) {
    return function (old) {
      const string = input.replace(/old/, old)
      // Warning: do not use in prod
      return eval(string)
    }
  }

  function parseInput(input) {
    const monkeys = []
    const lines = input.split('\n')
    let currentMonkey = null
    for (const line of lines) {
      if (line.startsWith('Monkey')) {
        currentMonkey = {}
        monkeys.push(currentMonkey)
      } else if (line.startsWith('  Starting items')) {
        const parts = line.split(':')
        currentMonkey.items = parts[1].trim().split(', ').map(Number)
      } else if (line.startsWith('  Operation')) {
        currentMonkey.operation = line.match(/= ([^\n]+)/)[1]
        // line
        //   .split(': ')[1]
        //   .replace('new = old', '')
        //   .trim()
      } else if (line.startsWith('  Test')) {
        currentMonkey.test = line.split(': ')[1].split(' ')[2].trim()
      } else if (line.startsWith('  If true')) {
        currentMonkey.ifTrue = line.split(': ')[1].split(' ')[2].trim()
      } else if (line.startsWith('  If false')) {
        currentMonkey.ifFalse = line.split(': ')[1].split(' ')[2].trim()
      }
    }
    console.log(monkeys)
    return monkeys
  }
  function getOperationFunction(input) {
    return function (old) {
      const string = input.replace(/old/, old)
      // Warning: do not use in prod
      return eval(string)
    }
  }

  ;(function part1() {
    // parseInput(data)
    const result = simulateMonkeys(parseInput(data))
    console.log(result)
    // console.log(getOperationFunction('old * 19')(10))
    // console.log(getOperationFunction('old * old')(10))
    // console.log(getOperationFunction('old + 3')(10))
  })()
})

function simulateMonkeys(monkeys) {
  while (true) {
    let allMonkeysEmpty = true
    for (const monkey of monkeys) {
      if (monkey.items.length > 0) {
        allMonkeysEmpty = false
        const item = monkey.items.shift()
        console.log(item)
        let worry = item
        worry = worry * monkey.operation
        console.log(worry)
        worry = Math.floor(worry / 3)
        const target =
          worry % monkey.test === 0 ? monkey.ifTrue : monkey.ifFalse
        monkeys[target]?.items.push(worry)
      }
    }
    if (allMonkeysEmpty) {
      break
    }
  }
  return monkeys
}
