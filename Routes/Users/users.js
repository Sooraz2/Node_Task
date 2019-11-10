const express = require('express');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
router = express.Router();


const users = [

    {id:1,name:"sooraz",suranme:"kunwar",username:"sooraz",password:'password'},
    {id:2,name:"hari",suranme:"karki",username:"hari",password:'password'},
    {id:3,name:"mahesh",suranme:"lama",username:"mahesh",password:'password'},
    {id:4,name:"anooz",suranme:"shrestha",username:"anooz",password:'password'},

]

const loginDetails = {username:'username',password:'password'}


router.get('/',function(req,res){ 

    res.send({message:'Welcome'})

})

router.post('/',function(req,res){
    
    const schema = {
        username : Joi.string().required(),
        password : Joi.string().required()
     }
    
    const result = Joi.validate(req.query,schema);

    if(result.error) {
        res.status(404).send(result.error.details[0].message);
        return;
    }

  let userAuthenicated =(users.find(function(elements){
       
        return (elements.username == req.query.username  && elements.password== req.query.password)
   }));


    if(!userAuthenicated) {

        res.status(404).send({message : 'username and password mismatch'}); return; 
    }
    const token = jwt.sign({userid:userAuthenicated.id},config.jwtPrivateKey,{ expiresIn: config.jwttokenLife })
    const refreshToken = jwt.sign({userid:userAuthenicated.id}, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife})

    res.header('jwt-token',token).header('refresh-token',refreshToken).send({ message : "Login Successfull"});

})


router.post('/getAllUsers', function(req,res){
    tokenValidator(req,res)
    res.send(users)
})


router.get('/getUsers/:userID',tokenValidator, function(req,res){
    
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



function tokenValidator(req,res){

    let token = req.header('jwt-token');

    if(!token) res.status(401).send({message:'Access Denied, Token not found' });

    try{

     jwt.verify(token,config.jwtPrivateKey);

    } 
    catch(ex) {

        res.status(400).send('Invalid Token'); return;
    }

}



module.exports = router;