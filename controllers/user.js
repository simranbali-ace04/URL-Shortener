const User = require("../models/user");
const {v4 : uuidv4} = require("uuid");
const {setUser} = require("../service/auth");

async function handleUserSignUp(req, res){
    const {name , email, password} = req.body;
    await User.create({
        name,
        email,
        password,
    });
     return res.redirect("/");
}

async function handleUserLogin(req, res){
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(401). json({error: "The user with this email doesn't exist."});
    if(password===user.password){
        const sessionId = uuidv4();
        setUser(sessionId, user);
        res.cookie("uid", sessionId);
        return res.redirect("/");
    } else {
        return res.status(401).json({error: "The password is wrong"});
    }
}

module.exports = {
    handleUserSignUp,
    handleUserLogin,
}