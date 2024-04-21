const express = require("express")
const cors = require("cors")
const app = express();

app.use(cors())
app.get("/", (req, res)=>{
    let a = parseInt(req.query.a);
    let b = req.query.b;
    let ans = a+ parseInt(b);
    // res.send(ans) // if we directly send like this it will think we are sending any status code so it will give an error, so we have to do something like this
    res.send(ans.toString());
})

app.listen(3000);