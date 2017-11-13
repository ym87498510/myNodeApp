const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// const server = http.createServer((req, res) => {
//     console.log(req)
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });
const server = http.createServer((req, res) => {
    res.statusCode = 200
res.setHeader('Content-Type', 'text/html')
res.end('<div style="color:gray">hello world</div>')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});