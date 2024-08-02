const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for user signup
router.post('/signup', userController.signup);

// Route for user login
router.post('/login', userController.login);

// Route for adding books to the cart
router.post('/addtocart', userController.fetchUser , userController.addToCart);

// Route for removing books from the cart
router.post('/removefromcart', userController.fetchUser , userController.removeFromCart);

// Route for getting cart data
router.post('/getcart',userController.fetchUser,userController.getCart)

module.exports = router;
