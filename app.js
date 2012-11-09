var http = require('http');
var parseUrl  = require('url').parse;

var nodeServer = function (req, res) {
  var url = parseUrl(req.url);

  res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
  res.end('Opa! Esse é o conteúdo da <strong>' + url.pathname + '</strong>');
}

http.createServer(nodeServer).listen(3000, '127.0.0.1');
console.log('Rodando o servidor em http://localhost:3000/');
