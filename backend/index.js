require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const fileRoutes = require('./routes/fileRoutes');
const app = express();
const port = process.env.PORT || 4000;
const { type } = require("os");
const { log } = require("console");


// Middleware
app.use(express.json());
app.use(cors());

// Static files for images
app.use('/images', express.static('upload/images'));

// Verify environment variable
console.log('MongoDB URI:', process.env.MONGO_URI);

// Database Connection:
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/api/files', fileRoutes);

// Home route for basic API health check
app.get("/", (req, res) => {
    res.send("Express App is Running");
});

app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on Port " + port);
    } else {
        console.log("Error: " + error);
    }
});
