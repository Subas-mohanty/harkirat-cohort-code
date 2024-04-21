const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const app = express();

app.use(express.json());
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

// function to check if user exist or not
function userExit(username, password) {
  let userExit = false;
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username == username &&
      ALL_USERS[i].password == password
    ) {
      userExit = true;
    }
  }
  return userExit;
}

app.get("/user", (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, jwtPassword);
  const username = decoded.username;
  res.status(200).json({
    "this is you": username,

    "other users": ALL_USERS.filter((value) => {
      // if(value.username == username) return false;
      // else return true;
      return value.username != username;
    }),
  });
  //   try {
  //     const decoded = jwt.verify(token, jwtPassword);
  //     const username = decoded.username;
  //     res.status(200).json({
  //         "this is you" : username,
  //         "other users" : ALL_USERS.filter((value)=>{
  // if(value.username == username) return false;
  // else return true;
  //     return value.username != username
  // })
  //     })
  //   }
  //   catch (error) {
  //     return res.send({
  //         msg : 'invalid token'
  //     })
  //   }
});

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExit(username, password)) {
    res.send({
      msg: "user doesn't exit in the server",
    });
  }

  let token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.listen(8000, () => {
  console.log("Server started...");
});
