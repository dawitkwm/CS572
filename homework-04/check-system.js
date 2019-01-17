const {
    Observable
} = require('rxjs');
const os = require('os');

//system info
let cpuCores = os.cpus();
let numOfCpuCores = cpuCores.length;
let ramSize = os.totalmem() / (1024 * 1024 * 1024);

let checkSystem = function() {
    return Observable.create((observer) => {
        //emit system info
        observer.next({
            cpuCores,
            numOfCpuCores,
            ramSize
        });
    });
};

checkSystem().subscribe(val => {
    console.log("Checking your system...");
    if(val.numOfCpuCores < 2) {
        console.log("Processor is not supported.");
    } else if(val.ramSize < 4) {
        console.log("This app needs at least 4GB of RAM.");
    } else {
        console.log("System is checked successfully.");
        console.log(`Your system has ${val.numOfCpuCores} cores and ${val.ramSize}GB of RAM.`);
        console.log("The cores are: ");
        console.log(val.cpuCores)
    }
});