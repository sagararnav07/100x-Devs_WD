const express = require('express');


const app = express()

// app.get('/add', function(req,res){
//    const a = parseInt(req.query.a);
//    const b = parseInt(req.query.b);

//    res.json({
//     answer: a + b
//    })
//})

/*Above example is when you have to give quesry oarameters like this in the url bar http://localhost:3000/divide?a=10&b=20
Now that is old if we want to give query parameters like /add/20/30 we should write it dynamically like */
app.get('/add/:a/:b', function (req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.json({
    answer: a + b
  });
});


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