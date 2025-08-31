//Q2. Create a middleware that counts the total number of request sent to a server. Also create an endpoint that exposes it

const express = require('express')

const app = express()

let reqCount = 0;

function totalReqCount(req,res,next)
{
    reqCount += 1;
    next()
    
}

app.get('/add',totalReqCount, function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        message : a + b
    });
});



app.get('/displayRequest', totalReqCount, (req, res) => {
    res.json({
        totalRequests: reqCount
    });
});


app.listen(3000);