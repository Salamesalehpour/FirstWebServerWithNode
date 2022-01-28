const http = require('http');
const fs = require('fs');
const port = 5000;

const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.write('Hello world');
        res.end();
    }

    if (req.url === '/index.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('index.html', function (err, data) {
            if (err) {
                res.writeHead(404);
                res.write('Error : File not found');
            } else {
                res.write(data);
            }
            res.end();
        })
    }
});

server.listen(port, function (error) {
    console.log(error);
    if (error) {
        throw new Error(error.message);
    }
    else {
        console.log('listening on port ' + port);
    }
})