const express = require('express')
const app = express()

const PORT = 3000
//SEE THE SAME CODE BUT DIFFERENCE IN BOILERPLATE FROM 01.index.js and 02.index.js
//Here we create a middleware
//Middleware functions are those functions that have access to all the objects response, rejecet and next
//now we don't need to define each app.get what to check we can just call it like 
function ticketCheckerMiddleWare(req,res,next){
    const age = req.query.age;
    if(age > 10){
        next() //most important: takes the flag to next middleware
    }else{
        res.json({message : `you are not eligible`})
    }
}

//app.use(ticketCheckerMiddleWare) :- you can also use the middleware like this or you can use it individually as shown below calling in individual function

//now the benefit of middleware function is that it can be reused multiple times with much less boilerplate
app.get('/check', ticketCheckerMiddleWareicketCheckerMiddleWaret, function(req,res){
   res.json({msg:`eligible`})
})

app.get('/check2', ticketCheckerMiddleWare, function(req,res){
    res.json({msg:`eligible`})
 })
 


app.listen(PORT,console.log(`app is listening on port ${PORT}`))