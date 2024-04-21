// res.send() vs res.end() 
// https://stackoverflow.com/questions/29555290/what-is-the-difference-between-res-end-and-res-send

// res.send() , can see the type of the text and respond back with the content type while res.end() only responds text and it doesn't set content type

const express = require("express");
const app = express();

function usrMiddleware(req, res, next) {
  const kidneys = req.query.n;
  const name = req.headers.name;
  const password = req.headers.password;
  if (name !== "subas" && password !== "pass") {
    res.send(" user doesn't exist ");
    return;
  }
  if (name !== "subas" || password !== "pass") {
    res.send("wrong input");
    return;
  }

  next();
}

// when it is used in a route, and we made a request on that route this will be called and the value of counter will be increased
let counter = 0;
function countNoOfClicks(req, res, next){
  counter++;
  console.log(counter);
  next();
}
app.get("/", countNoOfClicks, (req, res)=>{
  res.send("wolia !!")
})
// either we can do this

app.get(
  "/health",countNoOfClicks,
  (req, res, next) => {
    //   res.send("you can't log in");
      next(); // this will never be executed if above line is present
    // this next will call the next function in the argument here it will be usrMiddleware, if any middleware is not present then it will call the final handler function
  },
  usrMiddleware,
  (req, res) => {
    // res.send("you are logged in");
    res.send({msg: "you are logged in "}); // it will work, and return a json object
    // res.end({msg: "you are logged in "}); // but it will throw an error because it expects only strings
    // console.log("after all done") // it is fine
    // res.send("lsdflsf") // we can't do this
  }
);
// or we can do this
// app.use(usrMiddleware)

// app.get("/health", (req, res) => {
//   res.send("you are logged in")
// })

app.listen(3000, () => {
  console.log("server started");
});
