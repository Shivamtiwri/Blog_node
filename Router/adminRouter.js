const express = require("express");
const { adminLogin, adminAddBlog } = require("../Controller/adminController");
const { Verify } = require("../Middleware");

const Adminrouter = new express.Router();

Adminrouter.post("/login", adminLogin);
Adminrouter.post("/add-blog", Verify, adminAddBlog);

module.exports = Adminrouter;
