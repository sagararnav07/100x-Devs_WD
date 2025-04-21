const express = require('express')
const app = express()
app.use(express.json())
const user = [{
    name : "jhonn",
    kidneys:[
    {
        healthy : false
    },
  ]
}]
//GET
//query paramater :- '?' uery parameters are part of the URL that come after the question mark (?)
app.get("/", function(req,res){
    //write logic no of kidneys user has
    const jhonKidneys = user[0].kidneys
    const numberOfKidneys = jhonKidneys.length
    // const healthyKidneys = user[0].kidneys.filter(kidney => kidney.healthy === false)

    // console.log(jhonKidneys)
    // console.log(numberOfKidneys)
    // console.log(healthyKidneys)

    let numberOfHealthyKidneys = 0;
    //using filter
    if(jhonKidneys.filter(kidney => kidney.healthy == true))
    {
        numberOfHealthyKidneys += 1;
    }

    //using for loop

    // for(i = 0; i<jhonKidneys.length; i++)
    // {
    //     if(jhonKidneys[i].healthy == false)
    //     {
    //         numberOfHealthyKidneys += 1
    //     }
    // }

     const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

//POST
//app.post: req.body functionality like get has query parameter

app.post('/', function(req,res){
    const isHealthy = req.body.isHealthy
    user[0].kidneys.push({
        healthy : isHealthy
        
    })
    res.json({
        msg:"done"
    })
})

app.put('/', function(req,res){
    for(let i = 0; i < user[0].kidneys.length; i++)
    {
       user[0].kidneys[i].healthy == true
    }
    res.json({
        msg: "ok"
    })
})
/*first method we used get to add and show kidneys which 
are healthy and unhealthy and in the 2nd function we use
 if we run both the function simultaneously both will function*/

 //remove all unhealthy kidneys
 app.delete('/', function(req,res){
   const newKidenys = []
   for( let i=0; i< user[0].kidneys.length; i++)
   {
     if(user[0].kidneys[i].healthy){
        newKidenys.push({
            healthy : true
        })
     }
   }
   user[0].kidneys = newKidenys
   res.json({
    msd : "deleted"
   })
})
app.listen(3000)