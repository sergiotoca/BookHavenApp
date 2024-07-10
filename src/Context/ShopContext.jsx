// ShopContext.js
import { createContext } from "react";

const ShopContext = createContext({
    cartItems: {},
    getTotalCartItems: () => 0,
    getTotalCartAmount: () => 0,
    all_books: [],
    addToCart: () => {},
    removeFromCart: () => {}
});

export default ShopContext;