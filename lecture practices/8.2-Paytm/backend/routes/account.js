const express = require("express");
const authMiddleware = require("../middleware");
const { Account } = require("../db");
const { default: mongoose } = require("mongoose");
const accountRouter = express.Router();

accountRouter.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });
  res.send(account.balance);
});

// bad solution , if the server or the database goes down this will give all wrong values
// accountRouter.post("/transfer", async (req, res) => {
//   const { amount, to } = req.body;
//   const account = await Account.findOne({
//     userId: req.userId,
//   });

//   if (account.balance < amount) {
//     res.send("Insufficient balance");
//     return;
//   }

//   const toAccount = await Account.findOne({
//     userId: to,
//   });
//   if (!toAccount) {
//     res.status(400).send("invalid account");
//     return;
//   }

//   const updateFrom = await Account.updateOne(
//     {
//       userId: req.userId,
//     },
//     {
//       $inc: {
//         balance: -amount,
//       },
//     }
//   );
//   const updateTo = await Account.updateOne(
//     {
//       userId: to,
//     },
//     {
//       $inc: {
//         balance: amount,
//       },
//     }
//   );

//   res.send("transfer complete");
// });

accountRouter.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession(); // initializing a session

  // from this startTransaction to the commitTransaction , either all will be execute or nothing will execute
  session.startTransaction();
  const { amount, to } = req.body;
  console.log(to);
  console.log(req.userId);

  const account = await Account.findOne({
    userId: req.userId,
  }).session(session);

  if (!account || account.balance < amount) {
    await session.abortTransaction(); // kill and terminate the whole process
    res.send("insufficient balance");
    return;
  }

  const toAccount = await Account.findOne({
    userId: to,
  }).session(session);

  if (!toAccount) {
    await session.abortTransaction();
    res.send("invalid account");
    return;
  }

  // Perform the transfer
  try {
    await Account.updateOne(
      {
        userId: req.userId,
      },
      {
        $inc: {
          balance: -amount,
        },
      }
    ).session(session);
  
    await Account.updateOne(
        {
          userId: to,
        },
        {
          $inc: {
            balance: amount,
          },
        }
      )
      .session(session);
  
  } catch (error) {
    console.log(error);
  }
  // commit the transfer

  await session.commitTransaction();
  res.send("Transaction complete");
});
module.exports = accountRouter;
