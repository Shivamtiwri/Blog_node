const jwt = require("jsonwebtoken");
const secretKey = "hello";
const os = require("os");
const crypto = require("crypto");

async function Verify(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Invalid token", Response_code: 401 });
  }
  const token = authHeader.split(" ")[1];
  try {
    // Verify the JWT token
    const decoded = jwt.verify(token, secretKey);
    const currentTime = Math.floor(Date.now() / 1000);
    if (decoded.exp < currentTime) {
      return res
        .status(401)
        .json({ error: "Token expired", Response_code: 401 });
    }
    if (!decoded.id) {
      return res
        .status(401)
        .json({ error: "Invalid credentials", Response_code: 403 });
    }
    // Token is valid
    req.adminId = decoded.id;
    next();
  } catch (err) {
    // Handle token verification errors
    res
      .status(401)
      .json({ status: false, error: "Token expired", Response_code: 401 });
  }
}

function getDeviceId() {
  const networkInterfaces = os.machine();

  return JSON.stringify(networkInterfaces);
}

module.exports = {
  Verify,
  getDeviceId,
};
