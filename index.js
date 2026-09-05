const express = require("express");
const app = express();
const PORT = 8001;
const urlRoutes = require("./routes/url.js");
const connectDB = require("./config/db.js");

connectDB("mongodb://127.0.0.1:27017/url-shortener")
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database connection failed", err);
  });

app.use(express.json());

app.use("/url", urlRoutes);

app.listen(PORT, () => {
  console.log(`Server connected at PORT ${PORT}`);
});
