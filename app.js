var fs = require('fs');
var http = require('http');

var Name = process.argv[2];

fs.writeFile('index.html',`<h1> Hello World </h1> <p> This is ${ Name }... </p>`,
function(err){
    if(err) throw err;
});

http.createServer(function (req, res) {
    //Open a file on the server and return its content:
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }).listen(5000);