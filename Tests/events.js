

const EventEmitter = require('events')

const emittrer = new EventEmitter();

 emittrer.on('messageLogged',function(args){

    console.log(`My name is ${args.name} ${args.surname}`)

 })

 emittrer.emit('messageLogged',{name:'Sooraz',surname:'Kunwar'})