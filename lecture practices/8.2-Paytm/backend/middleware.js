const JWT_SECRET = require("./config");
const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  
  const token = req.headers.authorization;
  console.log(token);
  const tokenArr = token.split(" ");
  
  console.log(tokenArr);
  console.log(tokenArr[0]);
  console.log(tokenArr[1]);

  if (!token || tokenArr[0] !== "bearer") {
    res.send("invalid inputs");
    return;
  }

  try {
    const verifiedToken = jwt.verify(tokenArr[1], JWT_SECRET);
    if (verifiedToken) {
      req.userId = verifiedToken.userId;
      next();
    } else {
      res.status(403).send("invalid inputs");
    }
  } catch (err) {
    res.send("invalid inputs");
  }
}
module.exports = authMiddleware;
