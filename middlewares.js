var fs = require('fs');
var parseUrl = require('url').parse;

module.exports = {
  pub: function(req, res, next) {
    var url = parseUrl(req.url);

    if (!url.pathname.match(/public\//)) return next(); 

    fs.readFile('.' + url.pathname, function(err, buffer) {
      res.end(buffer.toString());
    });
  },
  json: function(req, res, next) {
    if (req.method != 'POST') return next();

    var response = { posted_data: req.body };
    res.writeHead(200, {'Content-Type': 'application/json; charset=UTF-8'});
    res.end(JSON.stringify(response));
  },
  any: function (req, res) {
    var url = parseUrl(req.url);

    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    res.end('Opa! Esse é o conteúdo da <strong>' + url.pathname + '</strong>');
  }
}
