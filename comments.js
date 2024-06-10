// Create web server
// 1. Create a web server
// 2. Read the file comments.json
// 3. Display the content of the file as a response to the request

// 1. Create a web server
// Load the http module
const http = require('http');
const fs = require('fs');

// Configure the HTTP server to respond with Hello World to all requests
const server = http.createServer((request, response) => {
  // 2. Read the file comments.json
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.end('Not Found');
    } else {
      // 3. Display the content of the file as a response to the request
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.end(data);
    }
  });
});

// Listen on port 8000, IP defaults to