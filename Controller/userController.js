const {
  getBlogData,
  userComment,
  userlike_table,
  getsingelBlogData,
} = require("../Model/userModel");

async function getBlog(req, res) {
  getBlogData(req, (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json({
        Response_code: 200,
        data: result,
        msg: "get all data... !",
      });
    }
  });
}

async function getSingaleBlog(req, res) {
  getsingelBlogData(req, (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json({
        Response_code: 200,
        blog: result[0],
        msg: "get all data... !",
      });
    }
  });
}

async function userCommentBlog(req, res) {
  const { comment_content, blog_id } = req.body;
  try {
    // Check if email matches
    if (!comment_content) {
      return res.status(401).json({
        Response_code: 401,
        msg: "comment content req...!",
      });
    }

    // Check if password matches
    if (!blog_id) {
      return res.status(401).json({
        Response_code: 401,
        msg: "Blog id not found",
      });
    }
    const result = await new Promise((resolve, reject) => {
      userComment(req, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
    res.status(200).json({
      Response_code: 200,
      // data: result,
      msg: "Created... ! ",
    });
  } catch (error) {
    console.error("Error during admin login:", error);
    res.status(500).json({
      Response_code: 500,
      msg: "Internal server error.",
      error: error.message,
    });
  }
}

async function Like_blog(req, res) {
  const { blog_id } = req.body;
  try {
    if (!blog_id) {
      return res.status(401).json({
        Response_code: 401,
        msg: "Blog id not found",
      });
    }
    const result = await new Promise((resolve, reject) => {
      userlike_table(req, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
    res.status(200).json({
      Response_code: 200,
      // data: result,
      msg: "Created... ! ",
    });
  } catch (error) {
    console.error("Error during admin login:", error);
    res.status(500).json({
      Response_code: 500,
      msg: "Internal server error.",
      error: error.message,
    });
  }
}

module.exports = {
  getBlog,
  userCommentBlog,
  Like_blog,
  getSingaleBlog,
};
