const express = require("express");
const { adminLogin, adminAddBlog } = require("../Controller/adminController");
const { Verify, upload } = require("../Middleware");

const Adminrouter = new express.Router();

Adminrouter.post("/login", adminLogin);
Adminrouter.post("/add-blog", Verify, upload.single("image"), adminAddBlog);

module.exports = Adminrouter;
