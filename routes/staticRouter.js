const express = require("express");
const Url = require("../models/url");
const Router = express.Router();

Router.get("/", async (req, res)=>{
    const allUrls = await Url.find({});
    res.render("home", {
        urls: allUrls
    });
})

module.exports = Router;
