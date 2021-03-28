var http = require('http');
const hostname='localhost'
const port = '2000'
var fs = require('fs');
const server=http.createServer(function (req, res) {
  fs.readFile('data.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
})
server.listen(port,hostname,()=>{
	console.log('Server running at http://${hostname}:${port}/')
})