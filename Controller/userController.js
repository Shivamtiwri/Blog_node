const { getUserAccountModle } = require("../Model/userModel");

async function getUserAccount(req, res) {
  const userId = req.userId;
  getUserAccountModle(userId, (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json({
        Response_code: 200,
        data: result[0],
        msg: "Account get Successfuly... !",
      });
    }
  });
}

module.exports = {
  getUserAccount,
};
