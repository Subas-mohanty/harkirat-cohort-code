const express = require("express");
const app = express();
const PORT = 8000;

let users = [
  {
    name: "xing-lee",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  let noOfKidneys = users[0].kidneys.length;
  let healthyKidneys = users[0].kidneys.filter(
    (values) => values.healthy === true
  );
  // let unhealthyKidneys = users[0].kidneys.filter((values) => values.healthy === false)
  let unhealthyKidneys = noOfKidneys - healthyKidneys.length;
  res.json({
    "No Of Kidneys": noOfKidneys,
    "No Of Healthy Kidneys": healthyKidneys.length,
    "No Of UnHealthy Kidneys": unhealthyKidneys,
  });
});
app.post("/", (req, res) => {
  let num = req.body.n;
  let status = req.body.isHealthy;
  let kidneys = users[0].kidneys;

  for (let i = 0; i < num; i++) {
    kidneys.push({
      healthy: status,
    });
  }
  res.send("kidneys added");
});
app.put("/", (req, res) => {
  let kidneys = users[0].kidneys;
  let healthyKidneys = kidneys.filter((kidney) => kidney.healthy === true).length
  if(healthyKidneys == kidneys.length){
    res.status(411).send("bhai tu kya kar raha hai, sab kidney sahi to hai, fir badalna kyun he tujhe")
  }
  for (let i = 0; i < kidneys.length; i++) {
    kidneys[i].healthy = true;
  }
  res.send("updation done");
});

app.delete("/", (req, res) => {
    let kidneys = users[0].kidneys;
    let unhealthyKidneys = kidneys.filter((kidney) => kidney.healthy ===false).length;
    if(unhealthyKidneys < 1){
        res.status(411).send("bro u don't have an unhealthy kidney near u")
    }
  let newKidneys = [];
  for (let i = 0; i < kidneys.length; i++) {
    if (kidneys[i].healthy) {
      newKidneys.push({
        healthy: true
      });
    }
  }
  users[0].kidneys = newKidneys;
  res.send("All the unhealthy kidneys removed");
});
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
