const jwt = require("jsonwebtoken")

const secretKey = "subu";

// const secretKey = "robo"

const user = {
    name : "subas",
    accountNumber : 99848284,
}
let name = "lasklkflksadf";
const token = jwt.sign(name, secretKey)
console.log(token)
// key = "subu"
// let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3ViYXMiLCJhY2NvdW50TnVtYmVyIjo5OTg0ODI4NCwiaWF0IjoxNzA5MjA1Nzc4fQ.jUAGcK-27nafqCzBaR1v5AvshP_EpHdBqtSZgUcRqCI"
// const data = jwt.verify(token, secretKey)
// // console.log(data)

// const decoded = jwt.decode("yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3ViYXMiLCJhY2NvdW50TnVtYmVyIjo5OTg0ODI4NCwiaWF0IjoxNzA5MjA1Nzc4fQ.jUAGcK-27nafqCzBaR1v5AvshP_EpHdBqtSZgUcRqCI");
// console.log(decoded)

// const token2 = jwt.sign(user, secretKey)
// console.log(token2)
// key = "robo"
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3ViYXMiLCJhY2NvdW50TnVtYmVyIjo5OTg0ODI4NCwiaWF0IjoxNzA5MjA1ODY2fQ.vjdCNVT1ksApFCfP3c6eBKZ0WsBB-7z95FDWs__EcAQ