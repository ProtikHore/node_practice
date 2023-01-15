const EventEmitter = require('events'); // it represent a class

const emitter = new EventEmitter();

// register a listner for bellRing event
emitter.on('bellRing', () => {
    console.log('need to run');
});

// raise an event
emitter.emit('bellRing');
