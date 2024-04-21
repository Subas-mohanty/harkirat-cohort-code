const fs = require("fs")
const express = require("express")
const PORT = 8000;
const app = express();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.get("/", (req, res)=>{
    // res.end("hello from server")
    console.log(req.query)
    res.json({
        name : "subu",
        message : "hello buddy , programming is awesome job , you will love it "
    })
})
app.post("/", (req, res)=>{
    console.log(req.body)
    const uname = req.body.name;
    const task = req.body.task;

    fs.writeFile("temp.txt",`Name: ${uname} has set a task : ${task}`, ()=>{
        res.end("your task has been set")
    }) 
})
app.listen(PORT, ()=>{
    console.log(`Server started at : http://localhost:${PORT}`)
})
