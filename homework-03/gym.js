const EventEmitter = require('events');

class Gym extends EventEmitter {
    constructor() {
        super();
        setInterval(() => this.emit("boom"), 1000);
    }
}

module.exports = Gym;