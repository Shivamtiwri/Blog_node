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

async function AddBlogModel(req, adminId, filePath, callback) {
  const { title, meta_title, description } = req.body;
  const imageurl = filePath?.split("\\");
  connectionDb.query(
    "INSERT INTO `blog_content` ( `admin_id`, `title`, `meta_title`, `description`,`image_path`,`image_url`) VALUES ( ?, ?, ?, ?,?,?);",
    [
      adminId,
      title,
      meta_title,
      description,
      filePath,
      `http://192.168.29.162:4000/images/${imageurl[1]}`,
    ],
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
