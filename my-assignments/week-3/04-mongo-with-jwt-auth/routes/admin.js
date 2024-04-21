const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, Course} = require("../db");
const router = Router();
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // const token = jwt.sign({username : username}, key);
    await Admin.create({
        username,
        password
    })
    res.send({ message: 'Admin created successfully'});
});

router.post('/signin', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await Admin.find({username , password});
    console.log(user)
    if(user){
        const token = jwt.sign({username : username}, JWT_SECRET);
        res.json({
            token
        })
    }
    else res.send("can't sign in")

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const desc = req.body.description;
    const price = req.body.price;
    const image = req.body.imageLink;

    const newCourse = await Course.create({
        title : title,
        description : desc,
        price : price,
        imageLink : image,
    })
    // console.log(newCourse);
    res.status(200).send({
        message : "Course created Successfully",
        courseId : newCourse._id,
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const course = await Course.find({});
    if(course) res.status(200).json({course})
    else res.send("can't show courses")
});

module.exports = router;