const connectionDb = require("../Config/dbconfig");
const { getDeviceId } = require("../Middleware");

async function getBlogData(req, callback) {
  try {
    const deviceId = getDeviceId(req);

    const query = `
      SELECT 
        bc.*, 
        COALESCE(lt.like_status, 0) AS like_status
      FROM 
        blog_content bc
      LEFT JOIN 
        like_table lt 
      ON 
        bc.id = lt.blog_id AND ? = lt.device_id
      LIMIT 25;
    `;

    connectionDb.query(query, [deviceId], (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return callback(err);
      }
      callback(null, result);
    });
  } catch (error) {
    console.error("Error fetching blog data:", error);
    callback(error);
  }
}

async function getsingelBlogData(req, callback) {
  try {
    const deviceId = getDeviceId(req);
    const id = req.query.id;
    console.log(id);

    const query = `
     SELECT bc.*, COALESCE(lt.like_status, 0) AS like_status FROM blog_content bc LEFT JOIN like_table lt ON bc.id = lt.blog_id AND ? = lt.device_id WHERE bc.id = ?;
    `;

    connectionDb.query(query, [deviceId, id], (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return callback(err);
      }
      callback(null, result);
    });
  } catch (error) {
    console.error("Error fetching blog data:", error);
    callback(error);
  }
}

async function userComment(req, callback) {
  const { comment_content, blog_id } = req.body;
  const diviveid = getDeviceId(req);
  connectionDb.query(
    "INSERT INTO `comment` ( `device_id`, `blog_id`, `comment_content`) VALUES (?, ?, ?) ",
    [diviveid, blog_id, comment_content],
    async (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    }
  );
}

async function userlike_table(req, callback) {
  const { like_status, blog_id } = req.body;
  const diviveid = getDeviceId(req);
  connectionDb.query(
    "INSERT INTO `like_table` ( `device_id`, `blog_id`, `like_status`) VALUES (?, ?, ?) ",
    [diviveid, blog_id, like_status],
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
  getBlogData,
  userComment,
  userlike_table,
  getsingelBlogData,
};
