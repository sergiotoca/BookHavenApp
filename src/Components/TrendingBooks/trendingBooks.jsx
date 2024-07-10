import React from "react";
import { useGlobalContext } from "../../Context/context.jsx";
import "./trendingBooks.css"; // Import your CSS file for styling

const TrendingBooks = () => {
  const { books, loading, resultTitle } = useGlobalContext();

  if (loading) {
    return <div className="trending-books-container">Loading...</div>;
  }

  return (
    <div className="trending-books-container">
      <h2>{resultTitle}</h2>
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
              alt={book.title}
              className="book-image"
            />
            <div className="book-info">
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              {/* Add more book details here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingBooks;
