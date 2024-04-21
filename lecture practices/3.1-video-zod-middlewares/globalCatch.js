const express = require("express") ;

const app = express() ;
const PORT = 8000;

// middleware to parse json
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("i am in get route")
});


app.post("/", (req, res)=>{
    // expects kidneys = [1,2]
    const kidneys = req.body.kidneys;
    let kidneyLength = kidneys.length;
    res.send("you have "+kidneyLength+ " kidneys")
})

// if we got an error then then will be printed on the screen , from that information someone can decode our logic , to avoid this we can use another middleware at the end of the route like this, it will take 4 arguments instead of 3

app.use((err, req, res, next)=>{
    // if(err){
    //     res.send("something error has occured in our side")
    // }
    res.send("something error has occured in our side")
})
app.listen(PORT, () => {
    console.log(`Server started at port http://127.0.0.1:${PORT}`);
});