const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
    try {
        let check = await User.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({ success: false, error: "Existing user found with the same email address!" });
        }
        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            name: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            cartData: cart
        });

        await user.save();

        const data = { user: { id: user._id } };
        const token = jwt.sign(data, process.env.JWT_SECRET);
        res.json({ success: true, token });
    } catch (error) {
        res.status(500).json({ success: false, error: "Server error during signup." });
    }
};

exports.login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            const passCompare = await bcrypt.compare(req.body.password, user.password);
            if (passCompare) {
                const data = { user: { id: user._id } };
                const token = jwt.sign(data, process.env.JWT_SECRET);
                res.json({ success: true, token });
            } else {
                res.json({ success: false, error: "Wrong Password" });
            }
        } else {
            res.json({ success: false, error: "Wrong Email Id" });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: "Server error during login." });
    }
};


exports.addToCart = async (req,res) => {
    let userData = await User.findOne({_id:req.user.id});
    console.log("Added",req.body.itemId);
    userData.cartData[req.body.itemId] += 1;
    await User.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send({result: "Added"})
}

exports.removeFromCart = async (req,res) => {
    let userData = await User.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0){
        console.log("Removed",req.body.itemId);
        userData.cartData[req.body.itemId] -= 1;
        await User.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
        res.send({result: "Removed"})
    }
    
}

exports.getCart = async (req,res) => {
    console.log("getCart");
    let userData = await User.findOne({_id:req.user.id});
    res.json(userData.cartData);
}

// Creating middelware to fetch user

exports.fetchUser = async(req,res,next)=>{
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({errors:"Please authenticate using valid token!"})
    }
    else{      
        try {
            const data = jwt.verify(token,process.env.JWT_SECRET);
            console.log(data);
            req.user = data.user;
            next();
            
        } catch (error) {
            res.status(401).send({errors:"Please Authenticate using a valid token!"})
        }
    }
}
