const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config")

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.create({
        username,
        password
    })
    res.send("User created successfully");

});

router.post('/signin', async (req, res) => {
    console.log(JWT_SECRET)
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.find({username, password})
    if(user) {
        const token = jwt.sign({username : username}, JWT_SECRET);
        res.send({
            token
        })
    }
    else res.send("can't sign in")
});

router.get('/courses', async (req, res) => {
    const course = await Course.find({})
    res.send({
        course
    })
});

// update course details
router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username; // directly we can't get that as the user is not sending the username in headers, so we have to update the header in the middleware and then we can use it here
    await User.updateOne({
        username : username,
    },{
        "$push" :{
            purchasedCourses : courseId,
        }
    })
    res.status(200).send({
        msg : "you bought the course"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const username = req.headers.username; // we are not sending this in the username we are getting this from the middleware
    const user = await User.findOne({
        username : username,
    });

    const courses = await Course.find({
        _id:{
            // this in means in the array, user.purchasedCourses
            "$in" : user.purchasedCourses
        }
    });
    res.send({
        courses : courses
    })
});

module.exports = router