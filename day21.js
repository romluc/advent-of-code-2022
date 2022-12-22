const fs = require('fs');
const { symbols, solve_linear, parse_expr } = require('sympy');

const compute = (name, lookup) => {
  if (typeof lookup[name] === 'number') {
    return lookup[name];
  }

  const parts = lookup[name];

  const left = compute(parts[0], lookup);
  const right = compute(parts[2], lookup);

  // not great practice, but for this solution, it suffices
  return eval(`${left}${parts[1]}${right}`);
};

const compute2 = (name, lookup) => {
  if (name === 'humn') {
    return symbols('humn');
  }

  if (typeof lookup[name] === 'number') {
    return lookup[name];
  }

  const parts = lookup[name];

  const left = compute(parts[0], lookup);
  const right = compute(parts[2], lookup);

  return parse_expr(`(${left})${parts[1]}(${right})`);
};

fs.readFile('inputs/input21.txt', 'utf8', (err, data) => {
  if (err) throw err;

  (function part1() {
    const lines = data.trim().split('\n');
    const lookup = {};

    for (const line of lines) {
      const parts = line.split(' ');
      const monkey = parts[0].slice(0, -1);

      if (parts.length === 2) {
        lookup[monkey] = parseInt(parts[1], 10);
      } else {
        lookup[monkey] = parts.slice(1);
      }
    }

    console.log(lookup);
    console.log(compute('root', lookup));
  })();

  (function part2() {
    const lines = data.trim().split('\n');
    const lookup = {};

    for (const line of lines) {
      const parts = line.split(' ');
      const monkey = parts[0].slice(0, -1);

      if (parts.length === 2) {
        lookup[monkey] = parseInt(parts[1], 10);
      } else {
        lookup[monkey] = parts.slice(1);
      }
    }

    const left = compute(lookup['root'][0], lookup);
    const right = compute(lookup['root'][2], lookup);
    const ans = solve_linear(left, right)[1];
    console.log(ans);
  })();
});
