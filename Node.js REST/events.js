const Logger = require('./logger');
const logger = new Logger();

// register a listener:
logger.on('msg', (arg) => {
    console.log('Listener Called!', arg);
});

logger.log('my message');