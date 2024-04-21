const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(
    "mongodb+srv://mohantysubas143:Subas%40mongodb@cluster0.rsgb3ph.mongodb.net/user_app"
  )
  .then(() => {
    console.log("mongoose connected...");
  });

// middleware to parse json
app.use(express.json());

// directly passing the schema in the model
const User = mongoose.model("users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  // const name = req.body.name;
  // const password = req.body.password;
  // const email = req.body.email;

  // destructuring req.body
  const { name, email, password } = req.body;
  // if(!name && !email && !password){
  //     return res.send({
  //         error : "name, email and password required"
  //     })
  // }

  // checking if the user exist or not, findone() returns the user if present otherwise null
  const userExit = await User.findOne({ email: email });

  if (userExit) {
    res.send({
      msg: "user exit",
    });
    return;
  } 
  else {
    // we can also do like this
    // await User.create({
    //     name: name,
    //     email: email,
    //     password: password,
    //   });


    const user = new User({
      name: name,
      email: email,
      password: password,
    });
    user.save();

    res.send({
      msg: "user created successfully",
    });
  }
});
app.listen(8000, () => {
  console.log("Server started");
});
