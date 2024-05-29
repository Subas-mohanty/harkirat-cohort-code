const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://mohantysubas143:Subas%40mongodb@cluster0.rsgb3ph.mongodb.net/paytm").then(()=>console.log("mongoose connected...."))

const userSchema = new mongoose.Schema({
  userName : String,
  firstName : String,
  lastName : String, 
  passsword : String
})

const accountSchema = new mongoose.Schema({
  userId :{
    type : mongoose.Schema.Types.ObjectId, // Reference to user model
    ref : "User",
    required : true,
  },
  balance :{
    type : Number,
    required : true,
  }
})

const User = mongoose.model("users", userSchema);
const Account = mongoose.model("accounts", accountSchema);


module.exports = {
  User,
  Account
}
