const EventEmitter = require('events');
const emitter = new EventEmitter();

// register a listener:
emitter.on('msg', function(arg) {
    console.log('Listener Called!', arg);
});

// Raise an event:
emitter.emit('msg', { id: 1, url: 'http://somelink.com'});