import React, { createContext, useContext, useCallback, useState, useEffect } from 'react';
import { all_books } from "../Components/Assets/MockupData"; // Ensure the path is correct

const URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=qGOVGFzxLFRTEXZlc41oFYiAGkQKP2FT`;
const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [loading, setLoading] = useState(true);
  const [useMockup, setUseMockup] = useState(false);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      const newBooks = data.results.books.map(({ primary_isbn13, author, book_image, title }) => ({
        id: primary_isbn13,
        author: author,
        cover_id: book_image,
        title: title
      }));
      setBooks(newBooks);
    } catch (error) {
      console.error('Falling back to mockup data:', error);
      setBooks(all_books); // Fallback to mockup data
      setUseMockup(true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  // Functions to handle cart operations
  const addToCart = (itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 1) {
      setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    } else {
      const { [itemId]: _, ...rest } = cartItems;
      setCartItems(rest);
    }
  };

  const getTotalCartAmount = () => {
    return books.reduce((total, book) => {
      return total + (book.new_price || 0) * (cartItems[book.id] || 0);
    }, 0);
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, num) => total + num, 0);
  };

  return (
    <BookContext.Provider value={{
      books,
      loading,
      useMockup,
      cartItems,
      addToCart,
      removeFromCart,
      getTotalCartAmount,
      getTotalCartItems
    }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);
export { BookContext, BookProvider };
