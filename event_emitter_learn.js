const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on("testEvent", () => {
    console.log("testEvent is triggered");
});
eventEmitter.emit('testEvent');


class Person extends EventEmitter { 
    constructor(name) { 
        super();
        this._name = name;
    }

    get name() { 
        return this._name;
    }
}

let avinash = new Person('Avinash');
avinash.on("name", () => {
   console.log("Hello I am ",avinash.name) 
});
avinash.emit('name');
let susmita = new Person('Susmita');
susmita.on("name", () => {
    console.log("Hello I am ",susmita.name) 
});
susmita.emit('name');