// run `node index.js` in the terminal

const fs = require('fs');
fs.readFile('input4.txt', 'utf8', function read(err, data) {
  if (err) {
    throw err;
  }

  const strings = data.split(/\r?\n/);
});
