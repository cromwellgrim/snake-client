const connect = require('./client.js');

function handleUserInput() {
  const stdin = process.stdin;
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    };
  });
}


const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  handleUserInput();
 
  return stdin;
};

console.log('Connecting ... ');
connect();
setupInput();