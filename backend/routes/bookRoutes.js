const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/addbook', bookController.addBook);
router.get('/allbooks', bookController.getAllBooks);
router.post('/removebook', bookController.removeBook);

module.exports = router;