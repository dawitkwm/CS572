let http = require('http');
let fs = require('fs');
let path = require('path');

let bigCsvFilePath = path.join(__dirname, '1987.csv'); // 130MB in size
let bigCsvFilePath = path.join(__dirname, '2008.csv'); // 700MB in size

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/text'});
    fs.readFile(bigCsvFilePath, 'utf8', (error, data) => res.end(data));
}).listen(8080, () => console.log("Node listening on port 8080"));

// http://localhost:8080/