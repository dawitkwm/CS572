const fs = require('fs');
const url = require('url');

process.on("message", (urlStr) => {
    console.log(urlStr);
    let pathToFile = url.parse(urlStr, true).query.url;
    console.log(pathToFile);
    let src = fs.createReadStream(pathToFile);  
    let fileData = "";  
    src.on('data', (dataChunk) => {
        fileData += dataChunk;
    });
    src.on('end', () => {
        process.send(fileData); 
    });
});