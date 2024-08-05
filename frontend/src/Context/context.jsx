import React, { createContext, useContext, useCallback, useState } from 'react';

const API_URL = "http://localhost:4000/api/books/trending%20books";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");
  const [showTrending, setShowTrending] = useState(false);

  const fetchTrendingBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (data) {
        const newBooks = data.map((bookSingle) => {
          const { id, name, image, category, new_price, old_price, short_description, long_description, reviews } = bookSingle;
          return {
            id: id,
            title: name,
            cover_image: image,
            category: category,
            new_price: new_price,
            old_price: old_price,
            short_description: short_description,
            long_description: long_description,
            reviews: reviews
          };
        });
        setBooks(newBooks);
        setResultTitle('Trending Books');
      } else {
        setBooks([]);
        setResultTitle('No trending books found!');
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, []);

  return (
    <AppContext.Provider value={{ books, loading, resultTitle, fetchTrendingBooks, showTrending, setShowTrending }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
