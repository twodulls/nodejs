var http = require('http');
var url = require('url');
/*
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
*/

function start(route, handle){
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log('request for ' + pathname + ' received.');

        route(handle, pathname, response);    //injected function call
    }
    
    http.createServer(onRequest).listen(8888);
    console.log('Server has started...')
}

exports.start = start;

