const express = require("express");
const { getUserAccount } = require("../Controller/userController");

const router = new express.Router();

router.post("/get-user-account", getUserAccount);

module.exports = router;
