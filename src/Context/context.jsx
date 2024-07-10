import React, { createContext, useContext, useCallback, useState } from 'react';

const URL = "https://openlibrary.org/search.json?title=";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchTrendingBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}trending`);
      const data = await response.json();
      const { docs } = data;

      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const { key, author_name, cover_i, edition_count, first_publish_year, title } = bookSingle;
          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title
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
    <AppContext.Provider value={{ books, loading, resultTitle, fetchTrendingBooks }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
