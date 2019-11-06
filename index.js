const express = require('express');
const Joi = require('joi')
const app = express();
app.use(express.json());

const users = [
    {id:1,name:"sooraz",suranme:"kunwar"},
    {id:2,name:"hari",suranme:"karki"},
    {id:3,name:"mahesh",suranme:"lama"},
    {id:4,name:"Anooz",suranme:"shrestha"},

]


app.get('/',function(req,res){

    res.send('Login Successfull');

})


app.post('/api/getAllUsers', function(req,res){

    res.send(users)
})



app.post('/api/getUsers', function(req,res){

    res.send(req.body.name);
 
})


app.get('/api/getUsers/:userID', function(req,res){
    
  
    const schema = {
        userID : Joi.number().min(1).required()
     }
    
    const result = Joi.validate(req.params,schema);

   if(result.error) {
   
       res.status(404).send(result.error.details[0].message);

       return;

   }

   let userData = users.find(function(element) {  return element.id == parseInt(req.params.userID)});

    if(!userData) res.status(404).send(" User with the given id not found");

   res.send(userData)
})




const portNumber = process.env.PORT || 3000

app.listen(portNumber,function(){
    console.log(`Listening on port ${portNumber}....`);
})