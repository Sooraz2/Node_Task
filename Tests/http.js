const http = require('http');

const server = http.createServer(function(request,response){

    if(request.url === '/') {

        response.write('This is in web');
        response.end();
    }
    if(request.url == '/api/test') {

        response.write(JSON.stringify({ name: "John", age: 30, city: "New York" }))
        response.end();
    }



});

//server.on('connection', (socket) => {

   // console.log('New Connection');

//});

server.listen(3000)
