const connectionDb = require("../Config/dbconfig");

async function adminLoginModle(req, callback) {
  const { email } = req.body;
  connectionDb.query(
    "SELECT * FROM admin WHERE email=?",
    [email],
    async (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    }
  );
}

async function AddBlogModel(req, adminId, callback) {
  const { title, meta_title, description } = req.body;
  connectionDb.query(
    "INSERT INTO `blog_content` ( `admin_id`, `title`, `meta_title`, `description`) VALUES ( ?, ?, ?, ?);",
    [adminId, title, meta_title, description],
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
  adminLoginModle,
  AddBlogModel,
};
