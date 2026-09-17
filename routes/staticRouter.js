const express = require("express");
const Url = require("../models/url");
const Router = express.Router();

Router.get("/", async (req, res)=>{
    const allUrls = await Url.find({});
    res.render("home", {
        urls: allUrls
    });
});

Router.get("/signup", (req, res)=>{
    return res.render("signup")
});

Router.get("/login", (req, res)=>{
    return res.render("login")
});

module.exports = Router;
