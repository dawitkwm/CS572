const http = require('http');
const fs = require('fs');
const path = require('path');
const memoryUsage = require('./memory-usage');

let bigCsvFilePath = path.join(__dirname, '1987.csv'); // 130MB in size
// let bigCsvFilePath = path.join(__dirname, '2008.csv'); // 700MB in size

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/text'});
    memoryUsage("async: before reading/sending");
    fs.readFile(bigCsvFilePath, 'utf8', (error, data) => res.write(data));
    memoryUsage("async: after reading/sending");
}).listen(8080, () => console.log("Node listening on port 8080"));

// http://localhost:8080/