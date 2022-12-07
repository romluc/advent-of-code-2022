//   const test = ['A Y', 'B X', 'C Z'];

  //   const res = [];

  //   for (const round of rounds.slice(0, -1)) {
  //     const scoresMap = {
  //       Loss: 0,
  //       Draw: 3,
  //       Win: 6,
  //     };

  //     if (round.at(0) === 'A' && round.at(2) === 'X')
  //       res.push(scoresMap.Loss + 3);
  //     if (round.at(0) === 'A' && round.at(2) === 'Y')
  //       res.push(scoresMap.Draw + 1);
  //     if (round.at(0) === 'A' && round.at(2) === 'Z') res.push(scoresMap.Win + 2);

  //     if (round.at(0) === 'B' && round.at(2) === 'X')
  //       res.push(scoresMap.Loss + 1);
  //     if (round.at(0) === 'B' && round.at(2) === 'Y')
  //       res.push(scoresMap.Draw + 2);
  //     if (round.at(0) === 'B' && round.at(2) === 'Z') res.push(scoresMap.Win + 3);

  //     if (round.at(0) === 'C' && round.at(2) === 'X')
  //       res.push(scoresMap.Loss + 2);
  //     if (round.at(0) === 'C' && round.at(2) === 'Y')
  //       res.push(scoresMap.Draw + 3);
  //     if (round.at(0) === 'C' && round.at(2) === 'Z') res.push(scoresMap.Win + 1);
  //   }
  //   // console.log(test);
  //   console.log(calculatePoints(res));
  let repChars = [];
  const groupOfThree = [];
  strings.forEach((str, i) => {
    groupOfThree.push(str);
    if (groupOfThree.length === 3) {
      repChars.push(findRepeatedLetter(groupOfThree));
    }

    if ((i + 1) % 3 === 0) groupOfThree.length = 0;
  });


  const res = repChars
    .map(letterValue)
    .filter(Boolean)
    .reduce((acc, el) => acc + el, 0);

  console.log(res);
});

function findRepeatedLetter(arrOfStrings) {
  let partialRes = [];
  let res = [];
  const [s1, s2, s3] = arrOfStrings;

  for (let i in s1) {
    s2.includes(s1[i]) ? partialRes.push(s1[i]) : null;
  }

  for (let i in partialRes) {
    s3.includes(partialRes[i]) ? res.push(partialRes[i]) : null;
  }

  // console.log([...new Set(res)]);
  return [...new Set(res)];
}

function letterValue(char) {
  const anum = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52,
  };
  return anum[char];