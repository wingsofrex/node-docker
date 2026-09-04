// Import the HTTP module
const http = require('http');

// Define server port
const PORT = process.env.PORT || 8001;

// Create a basic HTTP server
const server = http.createServer((req, res) => {
    res.statusCode = 200; // OK
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World from Node.js in Docker!\n');
});
// Jenkins webhook test
// Start the server
server.listen(PORT, () => {
    console.log(`Server running at http://0.0.0.0:${PORT}/`);
});

// Jenkins webhook test
// Jenkins webhook test
// Jenkins webhook test
// Jenkins webhook test
