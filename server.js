var http = require('http');
var url = require("url");


function start(route, handle){
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(pathname);

        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write("Hello World\n");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server starts at http://localhost:8888/");
}

exports.start = start;