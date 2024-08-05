const Book = require('../models/Book');
const GOOGLE_BOOKS_API_KEY = process.env.GOOGLE_BOOKS_API_KEY;

// Dynamic import for node-fetch
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Function to generate random reviews
const generateRandomReviews = () => {
    const reviews = [
        "Amazing book!",
        "Really enjoyed it.",
        "Not what I expected.",
        "Would highly recommend.",
        "A bit slow in the middle, but great ending.",
        "Couldn't put it down.",
        "Well written and engaging.",
        "Fantastic read!",
        "Interesting perspective.",
        "Loved the characters."
    ];
    const randomReviews = [];
    const numberOfReviews = Math.floor(Math.random() * 5) + 1; // Generate between 1 to 5 reviews

    for (let i = 0; i < numberOfReviews; i++) {
        randomReviews.push(reviews[Math.floor(Math.random() * reviews.length)]);
    }

    return randomReviews;
};

// Function to fetch books from an external API and store them in the database
exports.fetchAndStoreBooks = async (req, res) => {
    const categories = ['classic literature', 'modern literature', 'science', 'history', 'trending books'];
    
    try {
        // Fetch the current highest ID
        const lastBook = await Book.findOne().sort({ id: -1 });
        let currentId = lastBook ? lastBook.id : 0;

        for (const category of categories) {
            // Special handling for 'trending books' category
            const query = category === 'trending books' 
                ? 'trending' // Define the search query for trending books
                : `subject:${category}`;

            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20&key=${GOOGLE_BOOKS_API_KEY}`);
            const data = await response.json();
            const books = data.items;

            // Loop through each book and store it in the database
            for (let book of books) {
                currentId += 1;

                const newBook = new Book({
                    id: currentId,
                    name: book.volumeInfo.title,
                    image: book.volumeInfo.imageLinks?.thumbnail || 'default-image-url', // Replace with a default image URL if necessary
                    category: category,
                    new_price: (Math.random() * (50 - 10) + 10).toFixed(2), // Random price between $10 and $50
                    old_price: (Math.random() * (100 - 50) + 50).toFixed(2), // Random old price between $50 and $100
                    short_description: book.volumeInfo.description || 'No description available',
                    long_description: book.volumeInfo.description || 'No detailed description available',
                    reviews: generateRandomReviews() // Generate random reviews
                });

                await newBook.save();
            }
        }

        res.json({ success: true, message: 'Books fetched and stored successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching and storing books', error });
    }
};

exports.addBook = async (req, res) => {
    // Fetch the current highest ID
    const lastBook = await Book.findOne().sort({ id: -1 });
    let currentId = lastBook ? lastBook.id : 0;

    const book = new Book({
        id: currentId + 1,
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
// Function to fetch books by category
exports.getBooksByCategory = async (req, res) => {
    const { category } = req.params;

    try {
        // Fetch books from the database based on category
        const books = await Book.find({ category: category });
        res.json(books);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching books by category', error });
    }
};


exports.removeBook = async (req, res) => {
    await Book.findOneAndDelete({ id: req.body.id });
    res.json({ success: true, name: req.body.name });
};
