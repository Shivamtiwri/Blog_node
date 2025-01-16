const {
  getBlog,
  userCommentBlog,
  Like_blog,
  getSingaleBlog,
} = require("../Controller/userController");

const express = require("express");

const router = new express.Router();
router.get("/get_blog", getBlog);
router.get("/get-singale-blog", getSingaleBlog);
router.post("/add_comment", userCommentBlog);
router.post("/like_blog", Like_blog);

module.exports = router;
