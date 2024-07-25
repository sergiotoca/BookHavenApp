const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileCOntroller');

// Endpoint for uploading images
router.post("/upload", fileController.uploadSingle, fileController.uploadImage);

module.exports = router;
