var http = require('http');

http.createServer(function(req, res){
    res.write('Hello World from Node App - Updated');
    res.end();
}).listen(3000);