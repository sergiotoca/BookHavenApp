import React, {useEffect} from "react";
import { useGlobalContext } from "../../Context/context.jsx";
import "./TrendingBooks.css"; // Import your CSS file for styling
import { Item } from '../Item/Item.jsx'

const TrendingBooks = () => {
  const { books, loading, resultTitle, fetchTrendingBooks } = useGlobalContext();

  useEffect(() => {
    fetchTrendingBooks();
  }, []);  // The empty array ensures this effect runs only once after the component mounts

  
  if (loading) {
    return <div className="trending-books-container">Loading...</div>;
  }

  return (
    <div className="trending-books-container">
      <h2>{resultTitle}</h2>
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            {/* <Item key={i} id={book.id} name={book.title} image={book.cover_id}/> */}
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
