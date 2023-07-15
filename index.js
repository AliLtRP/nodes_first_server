const http = require('http');
const fs = require('fs');
const url = require('url');

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', ()=>{
    console.log('it working now');
});


http.createServer((req, res)=>{

    const path = url.parse(req.url, true);

    fs.readFile('./'+path.pathname, (err, data)=>{

        if(err){
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write("404 page not found");
            res.end();
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });

}).listen(8000);