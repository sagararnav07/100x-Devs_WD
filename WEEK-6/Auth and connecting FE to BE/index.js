//Same as the LEcture Assignment -2:06:38

const express = require('express')
const jwt = require('jsonwebtoken')
const JWT_SECRET = "sagararnav_07"

const app = express()
app.use(express.json())


const users = []

app.get('/users', (req,res)=>{
    res.json(users)
})

//signup
app.post('/signup',(req,res)=>
    {
        const username = req.body.username
        const password = req.body.password

        users.push({
            username : username,
            password : password
        })

        res.json({
            message : "you are signed up"
        })

    })


//signin

app.post('/signin', (req,res)=>
    {
        const username = req.body.username
        const password = req.body.password

        const user = users.find(u => u.username == username && u.password == password )

        if(user)
        {
            let token = jwt.sign({
                username: username
            },JWT_SECRET)

            res.status(201).send({
                message : token
            })
        }else{ 
            res.status(401).send({
                message : "no such user"
            })
        }
    })


//me

app.get('/me', (req,res)=>{
    
    const token = req.headers.token;
    
    const decodedInfo = jwt.verify(token,JWT_SECRET)
    const extractInfo = decodedInfo.username //it will only print "Arnav"
     //res.json(extractInfo) -> commented because sending more than one response in a function gives error

    //if you want to print more data loop it
    if(decodedInfo.username){
    let foundUser = null
    for(let i = 0; i < users.length; i++)
    {
        if(users[i].username == decodedInfo.username){
            foundUser = users[i]
        }
    }

    res.json({
        username: foundUser.username,
        password: foundUser.password
    })
  }

})

app.listen(3000)
