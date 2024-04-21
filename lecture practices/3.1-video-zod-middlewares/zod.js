// https://zod.dev/?id=from-npm-nodebun

const express = require("express");
const zod = require("zod")

const app = express() ;
const PORT = 8000;

// const schema= zod.array(zod.number());

// we have to create a schema for our input
// suppose we want our input to be like this
// {
//     email : string => email,
//     password : atleast 8 letters,
//     country : "IN" or "US"
// }

const schema = zod.object({
    email : zod.string().email(),
    password : zod.string(),
    country : zod.literal("IN").or(zod.literal("US")),
    kidneys : zod.array(zod.number())
})

// middleware to parse json
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("i am in get route")
});

app.post("/", (req, res)=>{
    // expects kidneys = [1,2]
    const kidneys = req.body;
    const response = schema.safeParse(kidneys);
    // let kidneyLength = kidneys.length;
    // res.send("you have "+kidneyLength+ " kidneys")

    if(!response.success) res.send("invalid input")
    res.send(response)
})

// app.use((err, req, res, next)=>{
//     res.send("some error occured" + err)
// })

app.listen(PORT, () => {
    console.log(`Server started at port http://127.0.0.1:${PORT}`);
});