const bodyParser = require('body-parser');
const express  = require('express');
const fs = require('fs');
const path = require('path');


const app = express();

PORT = 3000

app.use(bodyParser.json());
const name = path.join(__dirname,'todos.json');


//helper function 1: to find the index of the todo
function findIndex(arr,id)
{
   for(let i =0; i < arr.length ; i++)
   {
       if(arr[i].id === id)
        {
            return i;
        }
   }
   return -1;
}


//helper function 2: to delete an index from the todo list
function removeAtIndex(arr, index)
{
    const newArray = [];
    for(let i = 0; i < arr.length; i++)
    {
       if(i !== index)
       {
         newArray.push(arr[i]);
       }
    }
    return newArray;

}


//display all todos

app.get('/display', function(req,res)
{
    fs.readFile(name, 'utf-8', function(err,data)
    {
        if(err) throw err;
        res.json(
            JSON.parse(data)
        )
    })
})



//display todo by id

app.get('/display/:id', (req,res) => {
    fs.readFile(name,'utf-8', (err,data)=>{
       if(err) throw err;

       const todoList = JSON.parse(data);
       const todos = findIndex(todoList,req.params.id);

       if(todos == -1)
       {
        res.json({
            message : "no such todo exist",
        }).status(404).send();
       }else{
        res.json(todoList[todos]);
       }
    })
})



//add todo

app.post('/newPost',(req,res)=>
    {
        const newTodo =
        {
            id: JSON.stringify(Math.floor(Math.random() * 1000)+1),
            title: req.body.title,
            description: req.body.description
        };
        fs.readFile(name,'utf-8',(err,data)=>{
            if(err) throw err
            const todo = JSON.parse(data)
            todo.push(newTodo)
            fs.writeFile(name,JSON.stringify(todo), (err)=>{
                if(err) throw err
                res.status(201).json(newTodo)
            });
        });
    });

    app.listen(3000);