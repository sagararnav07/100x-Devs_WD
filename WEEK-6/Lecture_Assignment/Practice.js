//creating an authentication server

const express = require('express');
const jwt = require('jsonwebtoken')
const JWT_SECRET = "randomanything"

const app = express()

app.use(express.json())

//3 endpoints : 1. users -> to dispay all users 2.signup 3.signin

//generate tokeen function that will be stored in the user once they sign in

const users = [];
const generateToken = () => {
    
     let options = ['A','B','C','D','E','F','1','4','5','6','z','y','x','v','u']
     let token = ''

     for(let i = 0; i < options.length; i++)
     {
        token +=  options[Math.floor((Math.random() * options.length))]
     }
     return token
}

app.get('/users', (req,res)=>{
    res.json(users)
})

app.post('/signup', (req,res)=>
    {
        const username = req.body.username
        const password = req.body.password

        users.push({
            username : username,
            password : password
        })

        res.json({
            message: "user signed up"
        })
    })

app.post('/signin', (req,res) => 
{
    const username = req.body.username
    const password = req.body.password

    const user =  users.find(u => u.username == username && u.password == password)

    if(user){
      const token = jwt.sign({
        username: username
      }, JWT_SECRET) //converting username to token using JWT_SECRET

     // user.token = token --> since this token in jwt is stateless you don't need to store it anywhere or in a variable

      res.send({
        message : token
      })
    }else{
     res.json({
        message: "user not found"
     })
    }


})

app.get('/me', (req,res) => {
    const token = req.headers.token;

    const decodedInformation = jwt.verify(token, JWT_SECRET); //{username: "Arnav"} -> jwt.verify decode back jwt to username
    const username = decodedInformation.username //getting username from the decoded variable

    const decodeInfo = jwd.decoded(token) //{username: "Arnav"} -> it does not need JWT_SECRET

    const user = users.find(u => u.token === token)
    
    if(user){
        res.json({
            username: user.username
        })
    }else{
        res.json({
            message: "invailid token"
        }).status(404)
    }
})

app.listen(3000)