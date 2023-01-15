const EventEmitter = require('events'); // it represent a class

const emitter = new EventEmitter();

// register a listner for bellRing event
emitter.on('bellRing', (text) => {
    console.log(`need to run ${text}`);
    console.log(text.text2);
});

// raise an event
// emitter.emit('bellRing', 'this is perameter'); // 1st one is event, 2nd is paramerter
emitter.emit('bellRing', {
    text1: 'test',
    text2: 'test2',
}); // 1st one is event, 2nd is paramerter
