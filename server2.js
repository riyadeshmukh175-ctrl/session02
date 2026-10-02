const http = require('http');

PORT = 3500;

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Home Page');
    }

    else if (req.url === '/about') {
        res.end('About Page');
    }

    else if (req.url === '/contact') {
        res.end('Contact Page');
    }

    else if (req.url === '/service') {
        res.end('Service Page');
    }
    else if (req.url === '/help') {
        res.end('Help');
    }
    else if (req.url === '/career') {
        res.end('Career Portal');
    }

    else {
        res.end('Page Not Found');
    }
});

server.listen(3500, () => {
    console.log('server running at http://localhost:3500');
});