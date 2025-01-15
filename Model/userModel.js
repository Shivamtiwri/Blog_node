const connectionDb = require("../Config/dbconfig");

async function getUserAccountModle(userId, callback) {
  connectionDb.query(
    "SELECT * FROM user_account WHERE user_id=?",
    [userId],
    async (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    }
  );
}
module.exports = {
  getUserAccountModle,
};
