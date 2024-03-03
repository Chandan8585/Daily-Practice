const User = require("../model/user.model");
const CryptoJS = require("crypto-js");

const signUphandler = async(req, res)=> {
    try {
        const newUser = new User({
            userName : req.body.userName,
            number: req.body.number ,   
            email : req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRETKEY).toString()
        });
        const savedUser =await newUser.save();
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json({message: "Error while creating user"});
    }
}

module.exports = signUphandler