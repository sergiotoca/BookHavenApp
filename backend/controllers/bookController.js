const Book = require('../models/Book');

exports.addBook = async (req, res) => {
    let books = await Book.find({});
    let id = books.length > 0 ? books.slice(-1)[0].id + 1 : 1;
    const book = new Book({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price
    });
    await book.save();
    res.json({ success: true, name: req.body.name });
};

exports.getAllBooks = async (req, res) => {
    let books = await Book.find({});
    res.send(books);
};

exports.removeBook = async (req, res) => {
    await Book.findOneAndDelete({ id: req.body.id });
    res.json({ success: true, name: req.body.name });
};