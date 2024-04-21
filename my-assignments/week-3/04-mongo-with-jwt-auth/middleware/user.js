const {JWT_SECRET} = require("../config")
const jwt = require("jsonwebtoken")
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    let authoToken = req.headers.authorization;
    let tokenArr = authoToken.split(" ");
    const token = tokenArr[1];
    const decodedValue = jwt.verify(token, JWT_SECRET);
    if(decodedValue){
        req.headers.username = decodedValue.username;
        next();
    }
    else{
        res.send("you can't log in ");
    }
}

module.exports = userMiddleware;