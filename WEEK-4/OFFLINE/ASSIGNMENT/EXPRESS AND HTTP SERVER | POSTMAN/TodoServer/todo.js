const fs = require('fs')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const PORT = 3000


const name = path.join(__dirname, 'todos.json')
//Helper function to find an index
function findIndex(arr,id)
{
  for(let i =0; i < arr.length; i++)
  {
    if(arr[i] == id){
        return i;
    }
  }
  return -1;
}

//helper function to delete at index

function deleteAtIndex(arr,index){
    let newArr = [] 
  for(let i = 0; i < arr.length; i++)
  {
     if(i !== index)newArr.push(arr[i])
  }
return newArr;
}

//get function to list all todos

app.get('/todo', function(req,res){
  fs.readFile(name, 'utf-8', function(err,data){
    if(err) throw err
    res.status(201).json(JSON.parse(data))
  })
})

//get function to list todos by id

app.get('/todo/:id', function(req,res){
    fs.readFile(name, 'utf-8', function(err,data){
        if(err) throw err
        const todos = JSON.parse(data)
        const todoIndex = findIndex(todos, parseInt(req.params.id))

        if(todoIndex == -1){
            res.status(404).send()
        }
        else{
            res.status(201).json(todos[todoIndex])
        }
    })
})



app.listen(PORT,console.log(`App is listening on port ${PORT}`))