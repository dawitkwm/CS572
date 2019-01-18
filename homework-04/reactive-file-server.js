const {
    Subject
} = require('rxjs');
const {
    fork
} = require('child_process');

const http = require('http');

const fileSubject = new Subject();

function sendFile(reqResData) {
    reqResData.res.end(reqResData.fileData);
}


fileSubject.subscribe(sendFile);

http.createServer((req, res) => {
    const child = fork('./homework-04/read-file.js');
    child.send(req.url);
    child.on('message', fileData => {
        // res.end(data);
        fileSubject.next({
            req,
            res,
            fileData
        });
    })
    
}).listen(4000, () => console.log("Listening on localhost, port 4000."));