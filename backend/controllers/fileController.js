const multer = require('multer');
const path = require('path');

// Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

exports.uploadSingle = upload.single('product');  // This middleware function is to be used in routes

exports.uploadImage = (req, res) => {
    if (req.file) {
        res.json({
            success: 1,
            image_url: `http://localhost:${process.env.PORT || 4000}/images/${req.file.filename}`
        });
    } else {
        res.status(400).json({
            success: 0,
            error: "No file uploaded"
        });
    }
};
