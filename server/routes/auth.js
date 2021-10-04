const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/protected", (req, res) => {
  res.send("Hello User");
});

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(422).json({
      error: "Please add all the fields.",
    });
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res.status(422).json({
          error: "User already exists with that email.",
        });
      }
      bcrypt.hash(password, 12).then((hashedpassword) => {
        const user = new User({
          name: name,
          email: email,
          password: hashedpassword,
        });
        user
          .save()
          .then((user) => {
            res.json({
              message: "User saved successfully.",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({
      error: "Please add email or password",
    });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({
        error: "Invalid Email or password.",
      });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((match) => {
        if (match) {
          // res.json({
          //   // message: "Successfully signed in.",
          // });
          const token = jwt.sign(
            { _id: savedUser._id },
            process.env.JWT_SECRET
          );
          res.json({ token });
        } else {
          return res.status(422).json({
            error: "Invalid Email or password.",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
