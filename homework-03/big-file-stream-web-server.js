const http = require('http');
const fs = require('fs');
const path = require('path');
const memoryUsage = require('./memory-usage');

let bigCsvFilePath = path.join(__dirname, '1987.csv'); // 130MB in size
// let bigCsvFilePath = path.join(__dirname, '2008.csv'); // 700MB in size

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/text'});
    memoryUsage("stream: before streaming");
    fs.createReadStream(bigCsvFilePath).pipe(res);
    memoryUsage("stream: after streaming");
}).listen(8080, () => console.log("Node listening on port 8080"));

// http://localhost:8080/