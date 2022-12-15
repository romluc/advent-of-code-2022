const {
  isGreaterThanOthersInLine,
  howManyUntilEqualOrTaller,
} = require('./utils')
const fs = require('fs')
const { listeners } = require('process')
fs.readFile('inputs/input8.txt', 'utf8', (err, data) => {
  if (err) {
    throw err
  }

  const FIRST_LINE = 99
  const LAST_LINE = 99
  const TWO_LATERAL_COLUMNS = 97 * 2
  const edgesTrees = FIRST_LINE + LAST_LINE + TWO_LATERAL_COLUMNS

  const matrix = data.split(/\r?\n/)
  const treeMatrix = matrix.map(toNumbersArray)

  let arrayOfItemsEqualOrTaller = []
  let number = 0
  let sum = 0

  // Pt.1
  // for (let i = 1; i < treeMatrix.length - 1; i++) {
  //   for (let j = 1; j < treeMatrix.length - 1; j++) {
  //     if (isGreaterThanOthersInLine(treeMatrix, i, j)) sum++;
  //   }
  // }

  // Pt.2
  function checkEqualOrTallerInLine(y, x, dy, dx, map) {
    let visible = 0
    let maximum = map[y][x]

    while (true) {
      y += dy
      x += dx
      map[y]

      if (y < 0 || y >= map.length || x < 0 || x >= map[y].length) {
        break
      }
      visible++

      if (map[y][x] >= maximum) {
        break
      }
    }
    return visible
  }

  function pt2() {
    let max = 0
    for (let y = 0; y < treeMatrix.length; y++) {
      for (let x = 0; x < treeMatrix[y].length; x++) {
        const scenicScore =
          checkEqualOrTallerInLine(y, x, -1, 0, treeMatrix) *
          checkEqualOrTallerInLine(y, x, 1, 0, treeMatrix) *
          checkEqualOrTallerInLine(y, x, 0, 1, treeMatrix) *
          checkEqualOrTallerInLine(y, x, 0, -1, treeMatrix)
        if (scenicScore > max) max = scenicScore
      }
    }
    console.log(max)
  }

  pt2()
  // console.log(arrayOfItemsEqualOrTaller);

  // console.log(sum + edgesTrees);
})

const toNumbersArray = (line) => Array.from(line).map(Number)
