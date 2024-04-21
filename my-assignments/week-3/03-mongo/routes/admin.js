const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course} = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username: username,
    password: password,
  });
  res.status(200).send({
    message: "Admin created successfully",
  });
  res.status(404).send("Can't signup")
});

router.post("/courses", adminMiddleware, async (req, res) => {
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
    console.log(newCourse);
    res.status(200).send({
        message : "Course created Successfully",
        courseId : newCourse._id,
    })

});

router.get("/courses", adminMiddleware, async (req, res) => {
    const courses = await Course.find({});
    res.status(200).send({
        courses : courses,
    })
});

module.exports = router;
