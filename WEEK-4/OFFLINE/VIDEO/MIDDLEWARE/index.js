const express = require('express')
const app = express()

const PORT = 3000

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