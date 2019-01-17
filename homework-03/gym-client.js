const Gym = require('./gym');

const gym = new Gym();

gym.on("boom", () => console.log("Athlete is working out."));