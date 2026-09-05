const express = require('express');
const Router = express.Router();
const { handleGenerateShortUrl, handleRedirect, handleGetAnaytics} = require("../controllers/url.js");
Router.post("/", handleGenerateShortUrl);

Router.get("/:id", handleRedirect);

Router.get("/analytics/:id", handleGetAnaytics);

module.exports = Router;