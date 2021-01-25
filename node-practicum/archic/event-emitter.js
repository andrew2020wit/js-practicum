// the-nodejs-event-emitter
console.log("=== start ===");
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("start", (someNumber) => {
  console.log("it`s started, someNumber: ", someNumber);
});
eventEmitter.emit("start", 12);

console.log("=== end ===");
