const net = require('net');
// const { IP, PORT } = require('./constants');
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

  return conn;

};

module.exports = { connect };