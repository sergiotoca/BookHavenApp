const User = require('../models/User');
const jwt = require('jsonwebtoken');

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
        const user = new User({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
            cartData: cart
        });

        await user.save();

        const data = { user: { id: user._id } };
        const token = jwt.sign(data, 'secret_ecom');  // You should move 'secret_ecom' to an environment variable
        res.json({ success: true, token });
    } catch (error) {
        res.status(500).json({ success: false, error: "Server error during signup." });
    }
};

exports.login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            const passCompare = req.body.password === user.password;  // Consider using bcrypt for password comparison
            if (passCompare) {
                const data = { user: { id: user._id } };
                const token = jwt.sign(data, 'secret_ecom');
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
