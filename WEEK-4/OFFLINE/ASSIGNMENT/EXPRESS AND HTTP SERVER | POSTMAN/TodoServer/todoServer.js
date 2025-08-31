// Importing required modules
const express = require('express');              // Express framework to build server and API
const bodyParser = require('body-parser');       // Middleware to parse JSON request bodies
const fs = require("fs");                        // Node.js File System module for reading/writing files
const path = require('path');                    // Module to handle file paths

// Creating an instance of an Express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Defining the path to the JSON file that stores todo items
const name = path.join(__dirname, 'todos.json');

// Port number for the server
PORT = 3000

// Helper function to find the index of a todo item by ID
function findIndex(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return i; // Return index if ID matchesd
  }
  return -1; // Return -1 if item not found
}

// Helper function to remove an item from an array at a specific index
function removeAtIndex(arr, index) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) newArray.push(arr[i]); // Keep all elements except the one at the given index
  }
  return newArray;
}

// GET /todos - returns all todo items
app.get('/todos', (req, res) => {
  fs.readFile(name, "utf8", function(err, data) {
    if (err) throw err; // If file read fails, throw error
    res.json(JSON.parse(data)); // Parse the data and send as JSON response
  });
});

// GET /todos/:id - returns a single todo item by ID
app.get('/todos/:id', (req, res) => {
  fs.readFile(name, "utf8", function(err, data) {
    if (err) throw err;
    const todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id)); // Find index of todo with given ID
    if (todoIndex === -1) {
      res.status(404).send(); // If not found, respond with 404
    } else {
      res.json(todos[todoIndex]); // Send the matched todo item
    }
  });
});

// POST /todos - creates a new todo item
app.post('/todos', function(req, res) {
  const newTodo = {
    id: Math.floor(Math.random() * 1000000), // Generate a random ID
    title: req.body.title,                  // Get title from request body
    description: req.body.description       // Get description from request body
  };
  //load all the current todos from the file
  fs.readFile(name, "utf8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    todos.push(newTodo); // Add new todo to the list
    fs.writeFile(name, JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(201).json(newTodo); // Respond with the created todo
    });
  });
});

// PUT /todos/:id - updates an existing todo item
app.put('/todos/:id', function(req, res) {
  fs.readFile(name, "utf8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id)); // Find the todo to update
    if (todoIndex === -1) {
      res.status(404).send(); // If not found, respond with 404
    } else {
      const updatedTodo = {
        id: todos[todoIndex].id,             // Keep the same ID
        title: req.body.title,               // Update title
        description: req.body.description    // Update description
      };
      todos[todoIndex] = updatedTodo; // Replace the old todo with updated one
      fs.writeFile(name, JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(200).json(updatedTodo); // Respond with updated todo
      });
    }
  });
});

// DELETE /todos/:id - deletes a todo item
app.delete('/todos/:id', function(req, res) {
  fs.readFile(name, "utf8", (err, data) => {
    if (err) throw err;
    let todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id)); // Find index of todo to delete
    if (todoIndex === -1) {
      res.status(404).send(); // If not found, respond with 404
    } else {
      todos = removeAtIndex(todos, todoIndex); // Remove todo from list
      fs.writeFile(name, JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(200).send(); // Respond with success
      });
    }
  });
});

// Fallback route for all unmatched paths
app.use((req, res, next) => {
  res.status(404).send(); // Respond with 404 Not Found
});

// Start the server and listen on the specified port
app.listen(PORT, console.log(`app is listening on port ${PORT}`));

// Exporting app for external use (like testing)
module.exports = app;
