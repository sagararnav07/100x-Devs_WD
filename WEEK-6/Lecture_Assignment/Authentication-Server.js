const express = require('express')

const app = express();

app.use(express.json()) //to parse incoming json data to body

const users = []

app.get('/users',(req,res)=>{
for(let i = 0; i < users.length; i++)
   {
    console.log(users[i]);
   }

   res.json(users)
})

const generateToken  = () => 
    {
        let options = ['A','B','C','D','E','F','1','4','5','6','z','y','x','v','u']
        
        let token = ''

        for(let i = 0; i < 10; i ++)
        {
            token += options[Math.floor(Math.random() * options.length)]
        }
        return token

    }


app.post('/signup',(req,res) => 
    {
        const username = req.body.username
        const password = req.body.password
        
        users.push({
            username : username,
            password : password
        })

        //to check if there exist a user with the same username or password
        // users.find(u => u.username == username && u.password == password)
        // {
        //   res.json({
        //     message : "user already exists"
        //   })
        //   return
        // }

        res.json({
            message: "user signed in"
        })

    })


    /*Whenever the user hits this endpoint then it should add a token to the in memory variable of the user like this
     { 
       "username": "Arnav"
       "password": "123123"
       "token": "asdj2j323j43nn2k2n3k2"
     }*/

// app.post('/signin', (req,res)=>
//     {
//         const username = req.body.username;
//         const password = req.body.password;

//    let foundUser = null;

//    for(let i = 0; i < users.length; i++)
//    {
//       if(users[i].username == username && users[i].password == password)
//       {
//         foundUser = users[i]
//       }
//    }

//    //user is found then generate a token and send it to user
//    if(foundUser){
//      const token = generateToken()
//      foundUser.token = token

//      res.json({
//         message : token
//      })
//    }else{

//     res.send({
//         message : "User not found"
//     }).status(403)

//    }


// })

//simpler method

app.post('/signin', (req,res) => 
{
    const username = req.body.username
    const password = req.body.password

    const user =  users.find(u => u.username == username && u.password == password)

    if(user){
      const token = generateToken()
      user.token = token

      res.send({
        message : token
      })
    }else{
     res.json({
        message: "user not found"
     })
    }


})

//me endpoint
app.get('/me', (req,res) => {
    const token = req.headers.token;

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

app.listen(3000);

