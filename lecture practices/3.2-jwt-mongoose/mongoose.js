const mongoose = require("mongoose");

// we can use local mongodb as well
mongoose.connect(
  "mongodb+srv://mohantysubas143:Subas%40mongodb@cluster0.rsgb3ph.mongodb.net/"
);
const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("Users", schema);

const user = new User({
  name: "subas mohanty",
  email: "tzirw@example.com",
  password: "123456",
});
user.save();
