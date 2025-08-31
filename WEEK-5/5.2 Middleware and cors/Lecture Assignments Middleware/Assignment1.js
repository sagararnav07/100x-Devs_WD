//Q1. Create a middleware function that logs each incoming request's HTTP method, URL, and timestamp to the console

const express = require('express');


const app = express()

function displayItems(req,res,next){

    console.log(`the method used in this route is :- ${req.method}`)
    console.log(`the route is :- ${req.hostname} ${req.url} `)
    console.log(`The current date and time is :- ${new Date()}`)
    next()

}

app.use(displayItems)

app.get('/add', function(req,res){
   const a = parseInt(req.query.a);
   const b = parseInt(req.query.b);

   res.json({
    answer: a + b
   })
})

app.get('/subtract', function(req,res){
   const a = req.query.a;
   const b = req.query.b;

   res.json({
    answer: a - b
   })
})

app.get('/multiply', function(req,res){
   const a = req.query.a;
   const b = req.query.b;

   res.json({
    answer: a * b
   })
})

app.get('/divide', function(req,res){
   const a = req.query.a;
   const b = req.query.b;

   res.json({
    answer: a/b
   })
})


app.listen(3000);