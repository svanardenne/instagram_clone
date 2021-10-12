const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const fs = require("fs");
const Post = mongoose.model("Post");
const formidable = require("formidable");
const requireLogin = require("../middleware/requireLogin");

router.get("/posts", (req, res) => {
  Post.find()
    .populate("postedBy", "_id name")
    .then((posts) => {
      res.json({
        posts,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/post/create", requireLogin, async (req, res) => {
  let form = formidable.IncomingForm();
  form.keepExtensions = true;
  await form.parse(req, (err, fields, files) => {
    // Check for general errors
    if (err) {
      return res.status(400).json({
        error: "image could not be uploaded",
      });
    }
    // Field validation
    const errors = [];
    const { title, body } = fields;
    const { image } = files;
    if (!title) {
      errors.push("Title cannot be blank");
    }
    if (!body) {
      errors.push("Body cannot be blank");
    }
    if (!image) {
      errors.push("Please select an image");
    }
    if (errors.length >= 1) {
      const firstError = errors.map((error) => error)[0];
      return res.status(400).json({ error: firstError });
    }
    // Create user variable
    let post = new Post(fields);
    // Adds photo data to user if size is under 2mb
    if (files.image) {
      if (files.image.size > 2000000) {
        return res.status(400).json({
          error: "Image should be less than 2mb in size",
        });
      }
      post.image.data = fs.readFileSync(image.path);
      post.image.contentType = image.type;
    }
    // Save post
    post
      .save()
      .then((result) => {
        res.json({ message: "Post successful", post: result });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.get("/posts/user", requireLogin, (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
