const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require("../config")

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    let authoToken = req.headers.authorization; // bearer token
    let tokenArr = authoToken.split(" "); // here we are splitting the string and getting the actual token
    const token = tokenArr[1]; // this is the actual token

    try {
        const decodedValue = jwt.verify(token, JWT_SECRET);
        if(decodedValue){
            next();
        }
        else{
            res.send("you can't log in ");
        }
    } catch (error) {
        res.send({
            msg : "Incorrect inputs"
        })
    }
}

module.exports = adminMiddleware;