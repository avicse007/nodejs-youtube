const http = require('http'); 
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello from Node js server to root user');
        res.end();
    }
    else if (req.url === '/file') { 
        res.writeHead(200, { 'Content-type': 'test/html' });
        fs.createReadStream('event_emitter_learn.js', 'utf-8').pipe(res);      
    }
    else if (req.url === '/json') { 
        res.writeHead(200, { 'Content-type': 'application/json' });
        fs.createReadStream('some.json', 'utf-8').pipe(res);      
    }
    else if (req.url === '/image') { 
        res.writeHead(200, { 'Content-type': 'image/png' });
        fs.createReadStream('someImage.png').pipe(res);      
    }
    
    else { 
        res.write('Hello from Node js server to none root user');
        res.end();
    }
});

server.listen(3000);