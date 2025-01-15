const { adminLoginModle, AddBlogModel } = require("../Model/adminModel");
const jwt = require("jsonwebtoken");
const secretKey = "hello";

const { getDeviceId } = require("../Middleware");

async function adminLogin(req, res) {
  try {
    const { email, password } = req.body;

    // Call the model function to get the admin data
    const result = await new Promise((resolve, reject) => {
      adminLoginModle(req, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });

    // If no result is found
    if (!result || result.length === 0) {
      return res.status(404).json({
        Response_code: 404,
        msg: "User does not exist.",
      });
    }

    const user = result[0];

    // Check if email matches
    if (user.email !== email) {
      return res.status(401).json({
        Response_code: 401,
        msg: "Unauthorized user - Invalid email.",
      });
    }

    // Check if password matches
    if (user.password !== Number(password)) {
      return res.status(401).json({
        Response_code: 401,
        msg: "Unauthorized user - Invalid password.",
      });
    }
    const id = user.id;
    const token = jwt.sign({ id }, secretKey, { expiresIn: "10d" });
    // Successful login
    res.status(200).json({
      Response_code: 200,
      token: token,
      msg: "Login successful!",
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

async function adminAddBlog(req, res) {
  console.log("Device ID:", getDeviceId());
  const adminId = req.adminId;
  try {
    const { title, meta_title, description } = req.body;

    // Call the model function to get the admin data

    // If no result is found
    if (!title) {
      return res.status(201).json({
        Response_code: 201,
        msg: "Enter title ... !",
      });
    }

    // Check if email matches
    if (!meta_title) {
      return res.status(201).json({
        Response_code: 201,
        msg: "Enter Meta title ... !",
      });
    }

    // Check if password matches
    if (!description) {
      return res.status(201).json({
        Response_code: 201,
        msg: "Enter Description... !",
      });
    }
    AddBlogModel(req, adminId, (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json({
          Response_code: 200,
          msg: "Blog Created successful... !",
        });
      }
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
  adminLogin,
  adminAddBlog,
};
