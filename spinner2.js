// all symbols in an array
const symbols = ['|', '/', '-', '\\'];
// delay before loop starts
let delay = 100;

// iterte outer loop twice 
for (let i = 0; i < 2; i++) {
  // each outer iteration, print symbol in symbols array
  // then inner loop over the symbols array
  for (let symbol of symbols) {
    setTimeout(() => {
      // move cursor to start of line
      process.stdout.write(`\r${symbol}   `);
    }, delay);
    // increase by 200 milliseconds 
    delay += 200;
  }
}

// make a new line after running spinner
setTimeout(() => {
  process.stdout.write('\n');
}, delay);