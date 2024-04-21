const express = require("express")
const cors = require("cors")
const todos = require("./todo.json");
const app = express()

app.use(cors())
app.get("/", (req, res)=>{
    res.send(todos);
})

app.listen(3000, ()=>{
    console.log("Server started")
})