const express= require("express");
const { handleUserSignUp, handleUserLogin } = require("../controllers/user");
const Router = express.Router();

Router.post("/", handleUserSignUp)
Router.post("/login", handleUserLogin);

module.exports = Router;