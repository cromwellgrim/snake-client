const net = require('net');

const connect = function() {

  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on ('connect', () => {
    console.log('Server says: you connected');
    conn.write('Name: RAD');
  });

  // conn.on ('connect', () => {
  //   conn.write('Move: up');
  //   setInterval(() => {
  //     conn.write('Move: up');
  //   }, 50);
  // });

  return conn;

};

module.exports = connect;