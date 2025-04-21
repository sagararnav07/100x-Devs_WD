/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
    const express = require('express');
    const fs = require('fs');
    const path = require('path');
    const app = express();

// : -> anthing

/*app.get("/file/:filename", function(req,res){
  const name =  req.params.filename  note -> "filename in route Handler and in req.params .filename must be same"
    }) */
//will read directory
app.get('/file', function(req,res){
    const name = path.join(__dirname,'./file/')
    fs.readdir(name, function(err,file){
      if(err){
        console.log(`cannot read file`,err)
      }else{
        res.status(201).json(file)
       }
     })
   })


//will read files inside the directory
  app.get('/file/:filename',function(req,res){
    const name = path.join(__dirname,'./file/', req.params.filename)
    console.log(name)
    fs.readFile(name, 'utf-8', function(err,data){
        if(err){
         console.log(`there was a problem reading file`,err)
        }
        else{
        console.log(`the data in file : `,data)
        res.json({
            data
        })
    }
    })
  })
    
app.listen(3000)
    