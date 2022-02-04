const http = require('http')

http
  .createServer(function (req, res) {
    res.write('Hello World from Node App')
    res.end()
  })
  .listen(3000)
