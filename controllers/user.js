const User = require("../models/user");

async function handleUserSignUp(req, res){
    const {name , email, pasword} = req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.render("home");
}

module.exports = {
    handleUserSignUp,
}