const {Observable} = require('rxjs');
const os = require('os');

let cpuCores = os.cpus();
let numOfCpuCores = cpuCores.length;
let ramSize = os.totalmem() / (1024 * 1024 * 1024); 

let checkSystem = Observable.create((observer) => {
    observer.next({
        cpuCores, 
        numOfCpuCores, 
        ramSize
    }); //emit info
});

checkSystem.subscribe(val => 
    console.log(val)
);