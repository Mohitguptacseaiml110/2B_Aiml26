const EventEmitter = require("events");

const event = new EventEmitter();

event.on("welcome", (name) => {
    console.log("Welcome " + name);
});

event.emit("welcome", "Mohit");
                                                                                    