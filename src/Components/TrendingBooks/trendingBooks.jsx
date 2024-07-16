import React, { useEffect } from "react";
import { useGlobalContext } from "../../Context/context.jsx";
import bookPlaceholder from '../Assets/book.jpg'; // Import your placeholder image
import "./trendingBooks.css";

const TrendingBooks = () => {
  const { books, loading, resultTitle, fetchTrendingBooks } = useGlobalContext();

  useEffect(() => {
    fetchTrendingBooks();
  }, []);  // The empty array ensures this effect runs only once after the component mounts

  const getRandomPrice = () => {
    return (Math.random() * (50 - 10) + 10).toFixed(2); // Generates random price between 10 and 50
  };

  if (loading) {
    return <div className="trending-books-container">Loading...</div>;
  }

  return (
    <div className="trending-books-container">
      <h2>{resultTitle}</h2>
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <div className="book-image-container">
              {book.cover_id ? (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                  alt={book.title}
                  className="book-image"
                  style={{ width: "100%", height: "100%" }}
                />
              ) : (
                <img
                  src={bookPlaceholder}
                  alt="Book Placeholder"
                  className="book-image"
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </div>
            <div className="book-info">
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>Price: ${getRandomPrice()}</p>
              {/* Add brief description or additional details here if available */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingBooks;
