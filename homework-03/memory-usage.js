function memoryUsage(name) {
    const usage = process.memoryUsage();
    console.log(name, {
        ResidentSetSize: Math.floor(usage.rss),
        TotalSizeOfTheHeap: Math.floor(usage.heapTotal),
        HeapActuallyUsed: Math.floor(usage.heapUsed)
    });
}
module.exports = memoryUsage;