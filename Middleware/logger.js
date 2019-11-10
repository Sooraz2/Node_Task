function Logger(req,res,next) {

    console.log('This is Middlawere Logging.....');

        next()
}

module.exports = Logger