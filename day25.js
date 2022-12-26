const fs = require('fs')
fs.readFile('inputs/input25.txt', 'utf8', function read(err, data) {
  if (err) {
    throw err
  }

  const lines = data.split(/\r?\n/)

  const getInput = {
    2: 2,
    1: 1,
    0: 0,
    '-': -1,
    '=': -2,
  }

  function toDecimal(char, pos) {
    return getInput[char] * Math.pow(5, pos)
  }

  function fromSNAFUToDec(snafu) {
    if (!(typeof snafu === 'string')) throw new Error('Invalid input')
    const length = snafu.length
    let resArr = []
    resArr = snafu.split('').map((char, i) => {
      return toDecimal(char, length - i - 1)
    })
    return resArr.reduce((acc, el) => acc + el, 0)
  }

  const MAPPING = '=-012'
  const fromDecToSNAFU = (number) =>
    [...number.toString(5)]
      .map(Number)
      .reduceRight(
        ([res, carry], v) => (
          (v += carry), [[v > 2 ? v - 5 : v, ...res], v > 2 ? 1 : 0]
        ),
        [[], 0]
      )[0]
      .map((v) => MAPPING[v + 2])
      .join('')

  ;(function part1() {
    const res = lines.map(fromSNAFUToDec).reduce((acc, el) => acc + el, 0)
    // console.log(res) //33411698619881

    console.log(fromDecToSNAFU(33411698619881))

    // console.log(decimalToFiveBasedNumber(1747))
  })()
  ;(function part2() {})()
})
