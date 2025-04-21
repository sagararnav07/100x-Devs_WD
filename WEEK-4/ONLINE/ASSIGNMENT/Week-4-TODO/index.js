import express from "express"
const app = express()
const port = 3000

//route handler
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/',(req,res) =>{
    res.send("What's going on?")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.listen(8000)