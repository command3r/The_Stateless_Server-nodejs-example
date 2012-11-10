var http = require('http');
var connect = require('connect');
var fs = require('fs');

var middlewares = require('./middlewares');

connect()
  .use(middlewares.pub)
  .use(connect.json())
  .use(middlewares.json)
  .use(middlewares.any)
  .listen(3000, '127.0.0.1');

console.log('Rodando o servidor em http://localhost:3000/');
