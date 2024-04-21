const express = require("express");
const userRouter = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const authMiddleware = require("../middleware");
const { User, Account } = require("../db");

const schema = zod.object({
  userName: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string().min(8),
});

async function ifUserExist(userName) {
  const user = await User.findOne({
    userName: userName,
  });
  return user;
}

userRouter.post("/signup", async (req, res) => {
  const userName = req.body.userName;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.password;

  if (!userName || !firstName || !lastName || !password) {
    res.status(411).send({
      msg: "all fields required",
    });
    return;
  }

  // if a user with this username is already exist then we can create another user with the same name
  if (ifUserExist(userName)._id) {
    res.status(411).send({
      msg: "user with this userName is already exist",
    });
    return;
  }

  const validateUser = schema.safeParse(req.body);

  if (!validateUser.success){
    res.status(411).send("wrong inputs");
    return;
  }

  const user = await User.create({
    userName,
    firstName,
    lastName,
    password,
  });

  const userId = user._id;

  // giving the user a default balance
  const balance = await Account.create({
    userId,
    balance: 8000,
  });

  // making an jwt token of the userId , so that the end user don't have to provide it's usernamea and password in every request
  let token = jwt.sign({ userId }, JWT_SECRET);

  res.send({
    msg: "user created successfully",
    token: token,
  });
});

userRouter.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.send({
    user: users.map((user) => ({
      userName: user.name,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

userRouter.use(authMiddleware);
userRouter.post("/signin", (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;

  const user = User.findOne({
    userName: userName,
    passsword: password,
  });
  if (!user) {
    res.send({
      msg: "invalid inputs",
    });
    return;
  } else {
    res.send({
      msg: "logged in",
    });
  }
});

// this is using the authmiddleware because we are using that globally
userRouter.put("/update", async (req, res) => {
  console.log("hello");
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.password;

  console.log(firstName);
  console.log(lastName);
  console.log(password);
  const validateUser = schema.safeParse(req.body);
  if (!validateUser.success) res.send("send valid inputs");

  const updateUser = await User.updateOne(
    {
      _id: req.userId,
    },
    {
      firstName: firstName,
      lastName: lastName,
      password: password,
    }
  );

  res.send("User updated successfully");
});

module.exports = userRouter;
