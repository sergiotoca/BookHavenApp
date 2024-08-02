import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Shop } from "./Pages/Shop";
import { ShopCategory } from "./Pages/ShopCategory";
import { Product } from "./Pages/Product";
import { LoginSignup } from "./Pages/LoginSignup";
import { Cart } from "./Pages/Cart";
import { Footer } from "./Components/Footer/Footer";
import TrendingBooks from "./Components/TrendingBooks/TrendingBooks";
import ShopContextProvider from "./Context/ShopContext";
import { AppProvider } from "./Context/context";
import { Hero } from "./Components/Hero/Hero";
// import Admin from '../../admin/src/App';

function App() {
  

  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Shop />} />
          <Route path="/trending-books" element={<TrendingBooks />} />
          <Route path="/classic" element={<ShopCategory category="classic" />} />
          <Route path="/modern" element={<ShopCategory category="modern" />} />
          <Route path="/science" element={<ShopCategory category="science" />} />
          <Route path="/history" element={<ShopCategory category="history" />} />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          {/* <Route path="/admin" element={<Admin />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
