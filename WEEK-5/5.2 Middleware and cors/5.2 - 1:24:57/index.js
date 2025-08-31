const express = require('express');


const app = express()

//1.1let's create a variable requestCount that counts and logs the number of times a request is sent o each endpoing

let requestCount = 0;

function requestIncrement(req,res,next){ //middleware function
   requestCount  += 1; 
   console.log(`total number of request:- ${requestCount}`)
   next()
}

//app.get('/add', function(req,res){
function requestHandler(req,res){ //middleare function
   //1.2 request count will increment by 1 each time add end point is hit
   // 1.3 requestCount += 1;
   // 1.4 console.log(`Total number of requst = ${requestCount}`)

   //1.5 we have commented the upper case now we can write this requestCount in a different way
   //main logic
   const a = parseInt(req.query.a);
   const b = parseInt(req.query.b);

   res.json({
    answer: a + b
   });
}

//1.6 another way

app.get('/add', requestIncrement, requestHandler); //calling chain of middlewares directly in route 




// app.get('/multiply', function(req,res){
//    const a = req.query.a;
//    const b = req.query.b;

//    res.json({
//     answer: a * b
//    })
// })




app.listen(3000);