const express = require('express')
const app = express()

const PORT = 3000

/*Using middleware : implementation in 02.index.js
Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. The next middleware function is commonly denoted by a variable named next.
Middleware functions can perform the following tasks:
• Execute any code.
• Make changes to the request and the response objects.
• End the request-response cycle.
• Call the next middleware function in the stack. */

//this code given below is implemented using a middleware in 02.index.js

//at first we used a function and called down in both app.get 
function ticketChecker(age){
    if(age > 10){
        return true
    }else{
        return false
    }
}

app.get('/check', function(req,res){
    const age = req.query.age

    if(ticketChecker(age) == true){
        res.json({message : `you are eligible`})
    }
    else{
        res.json({message : `you are not eligible`})
    }
})



app.get('/check2', function(req,res){
    const age = req.query.age

    if(ticketChecker(age) == true){
        res.json({message : `you are eligible`})
    }
    else{
        res.json({message : `you are not eligible`})
    }
})

app.listen(PORT,console.log(`app is listening on port ${PORT}`))