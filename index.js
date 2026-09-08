const express = require("express");
const app = express();
const path = require("path");
const Url = require("./models/url.js");
const PORT = 8001;
const staticRouter = require("./routes/staticRouter.js")
const urlRoutes = require("./routes/url.js");
const connectDB = require("./config/db.js");

connectDB("mongodb://127.0.0.1:27017/url-shortener")
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database connection failed", err);
  });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", staticRouter);

app.use("/url", urlRoutes);

app.listen(PORT, () => {
  console.log(`Server connected at PORT ${PORT}`);
});
