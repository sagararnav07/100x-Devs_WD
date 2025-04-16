# Node.js & Express.js Complete Guide

## Introduction
Node.js is a runtime environment that allows you to run JavaScript on the server-side. Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.

---

## 1. Setting Up a Node.js Project

To start a Node.js project, initialize it using:
```sh
mkdir myapp && cd myapp
npm init -y
```
This creates a `package.json` file.

To install Express:
```sh
npm install express
```

---

## 2. Express.js Basics
### Creating a Basic Server
```js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```
Run the server:
```sh
node server.js
```

---

## 3. HTTP Methods in Express

### 3.1 GET Request
```js
app.get('/users', (req, res) => {
    res.json({ message: 'GET request received' });
});
```

### 3.2 POST Request
```js
app.post('/users', (req, res) => {
    res.json({ message: 'POST request received' });
});
```

### 3.3 PUT Request
```js
app.put('/users/:id', (req, res) => {
    res.json({ message: `PUT request received for user ${req.params.id}` });
});
```

### 3.4 DELETE Request
```js
app.delete('/users/:id', (req, res) => {
    res.json({ message: `DELETE request received for user ${req.params.id}` });
});
```

---

## 4. Middleware in Express
Middleware functions execute between request and response cycles.

### Creating Middleware
```js
app.use((req, res, next) => {
    console.log('Middleware executed');
    next();
});
```

### Body Parsing Middleware
```js
const bodyParser = require('body-parser');
app.use(bodyParser.json());
```

---

## 5. Express Router
To organize routes in separate files:

### `routes/userRoutes.js`
```js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Users List');
});

module.exports = router;
```

### `server.js`
```js
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);
```

---

## 6. Connecting to a Database
Using MongoDB with Mongoose:

### Install Mongoose
```sh
npm install mongoose
```

### Connect to MongoDB
```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));
```

---

## 7. Organizing File Structure
```
myapp/
│── server.js
│── package.json
│── routes/
│   ├── userRoutes.js
│── models/
│   ├── User.js
│── controllers/
│   ├── userController.js
│── middleware/
│   ├── authMiddleware.js
│── config/
│   ├── db.js
```

---

## 8. Running the Application
### Start Server
```sh
node server.js
```
Or use Nodemon for auto-restarts:
```sh
npm install -g nodemon
nodemon server.js
```

---

## 9. Error Handling in Express
```js
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
```

---

## 10. Deployment
To deploy, use platforms like **Heroku** or **Vercel**:
```sh
git init
git add .
git commit -m "Initial commit"
heroku create myapp
heroku git:remote -a myapp
git push heroku main
```

---

This guide covers all essential concepts for building scalable applications with Node.js and Express.js.

