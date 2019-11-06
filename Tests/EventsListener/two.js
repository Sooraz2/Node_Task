
const EventEmitter = require('events')

class Logger extends EventEmitter {

    loggerMessage() {

        this.emit('messageLogged',{name:'Sooraz',surname:'Kunwar'})

    }


}

module.exports = new Logger()
