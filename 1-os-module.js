
// Include os module and create its object
const os = require('os');

const hostname = os.hostname();
console.log("Name: " + hostname);

const version = os.release();
console.log("Free memory: " + version);

const totalMemory = os.totalmem();
console.log("Total memory: " + totalMemory);
