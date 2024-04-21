const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title : String, 
    description : String,
    completed : Boolean,
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}