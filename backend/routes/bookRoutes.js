const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/fetch-and-store-books', bookController.fetchAndStoreBooks);

router.post('/addbook', bookController.addBook);
router.get('/allbooks', bookController.getAllBooks);
router.post('/removebook', bookController.removeBook);

// New route to get books by category
router.get('/:category', bookController.getBooksByCategory);

module.exports = router;