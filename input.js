const { builtinModules } = require("module");

let connection;

function handleUserInput() {
  const stdin = process.stdin;
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
  stdin.on('data', (key) => {
    if (key === '\u0087') {
      conn.write('Move: up');
    }
  });
  stdin.on('data', (key) => {
    if (key === '\u0083') {
      conn.write('Move: down');
    }
  });
  stdin.on('data', (key) => {
    if (key === '\u0056') {
      conn.write('Move: left');
    }
  });
  stdin.on('data', (key) => {
    if (key === '\u0222') {
      conn.write('Move: right');
    }
  });
}

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  handleUserInput();

  return stdin;
};

module.exports = { setupInput };