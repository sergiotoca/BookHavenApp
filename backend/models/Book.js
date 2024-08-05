const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    new_price: { type: Number, required: true },
    old_price: { type: Number, required: true },
    short_description: { type: String, required: true },
    long_description: { type: String, required: true },
    reviews: { type: Array, default: [] },
    date: { type: Date, default: Date.now },
    available: { type: Boolean, default: true }
});

module.exports = mongoose.model("Book", BookSchema);
