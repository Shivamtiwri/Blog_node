const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectionDb } = require("./Config/dbconfig");
const router = require("./Router/userRouter");
const Adminrouter = require("./Router/adminRouter");
const { getDeviceId } = require("./Middleware");

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  const cleanIp = req.ip.replace(/^.*:/, ""); // Removes everything up to the last colon
  const lastValue = cleanIp.split(".");
  console.log(cleanIp);

  res.send(`Device ID: ${lastValue[3]}`);
});
connectionDb();
app.use("/images", express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", router);
app.use("/admin", Adminrouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
