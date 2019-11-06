const fs = require('fs');

const files = fs.readdirSync('./')

console.log(files);


fs.readdir('./',function(err,result){

    if(err) console.log('Error',err)
    else console.log('Result',result)

})


fs.readdir('./',function(error,listoffiles){


    console.log(listoffiles)

});