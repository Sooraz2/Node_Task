
const EventEmitter = require('events')
let logger = require('./two')

logger.on('messageLogged',function(args){

    console.log(`My name is ${args.name} ${args.surname}`)

 })

logger.loggerMessage()