/**
 * Created by Edge Tech Academy on 1/3/2017.
 */
let http = require("http");
let count = 0;

http.createServer(function (request, response) {

    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body as "Hello Edge Tech Academy"
    response.end('Hello Edge Tech Academy\n' + count);
    count++;
}).listen(3000);

// Console will print the message
console.log('Server running at http://127.0.0.1:3000/');