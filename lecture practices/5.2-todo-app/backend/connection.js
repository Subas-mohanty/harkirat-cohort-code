const mongoose = require("mongoose");

async function connectMongo(){
   await mongoose.connect("mongodb+srv://mohantysubas143:Subas%40mongodb@cluster0.rsgb3ph.mongodb.net/todo-app")
}

module.exports = {
    connectMongo,
}


