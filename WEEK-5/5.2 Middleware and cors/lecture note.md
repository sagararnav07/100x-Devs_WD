### MIDDLEWARES ###

1. Middleware can stop request from the cliend to reach the route handler for i.e suppose there is a website
**admin.google.com/passwords** only for the google employees so even though i send a request to this endpoint from my browser there is a middleware there that will not let me access it 

2. Middleware is used for authentication mostly or calling the *next()* function from the stack, if we want to summarise then middle ware can stop the request response cycle

3. Express is nothing but a chain of middlewares so we created a function

function requestCount(req,res,next){
   requestIncrement += 1;
   console.log(`total number of request:- ${requestIncrement}`)
}

and changed :- app.get('/add', function(req,res){}) to function requestHandler(req,res){}

then called this as a middleware by creating another route like this
app.get('/add', requestCount, requestHandler);

as by the definition a middleware is some function that has access to request aboject, response object and next function 

4. external middlewares:-

 a. express.json :- it parses incoming data into json format , use it when you know your request 
                    is comming in json or you won't get your data in 'req.json' and you cam't access a function req section
                    it is a function so it won't work with app.use(express.json()) what you have to do is shown below

                    app.use(express.json)

 b. body-parser :- same as express.json() but you have to import this  
 c. cors :- cross origin resource sharing this middleware allows only listed server origing to send
            data and it is used to connect and communicate frontend and backed

# -------------------------------------------------------------------------------------------------

CORS

by default we cross origin resource sharing should be banned for i.e if I create a script in which
i want to send request to hdfc bank to withraw some cash and if they allow cross origin resource 
sharing then anyone could come to my website use the fetch command i built and withraw any amount of
money and that should not be the case that's why we have cors

