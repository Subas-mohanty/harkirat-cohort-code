const { Router } = require("express");
const router = Router();
const { User, Course} = require("../db");
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;

    const user = User.create({
        username : username,
        password : password,
        purchasedCourses : [],
    })
    res.status(200).send("User created successfully");

});

router.get('/courses', async (req, res) => {
    const courses = await Course.find({});
    res.status(200).send({
        courses : courses,
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;

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
    const username = req.headers.username;
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