const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./models/user");
const { connectMongo } = require("./connection");
const cors = require("cors")
const app = express();
const PORT = 3000;

connectMongo();
app.use(cors())
app.use(express.json());

// input body
// body = {
//  todo : String,
//  description : String
// }
app.get("/todos", async (req, res) => {
  // console.log(todo);
  const todos = await todo.find({});
  res.status(200).send({
    todos,
  });
});

app.post("/todo", async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const parseData = createTodo.safeParse(req.body);
  if (!parseData.success) {
    res.status(411).json({
      msg: "you send the wrong input",
    });
    return;
  }
  // create todo in the db
  const todos = await todo.create({
    title,
    description,
    completed: false,
  });
  res.status(200).send({
    msg: "To do has been created successfully",
  });
});

app.put("/completed", async (req, res) => {
  const body = req.body;
  const parseData = updateTodo.safeParse(body);
  if (!parseData.success) {
    res.status(411).json({
      msg: "you send the wrong input",
    });
    return;
  }
  await todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
