import React, { useEffect } from "react";
import { useGlobalContext } from "../../Context/context.jsx";
import bookPlaceholder from '../Assets/book.jpg'; // Import your placeholder image
import "./TrendingBooks.css";
import { Item } from '../Item/Item.jsx';

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
        {books.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.title}
            image={item.cover_image || bookPlaceholder} // Use placeholder if image is missing
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingBooks;
