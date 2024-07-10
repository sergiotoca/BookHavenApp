import React, { useReducer } from "react";
import ShopContext from "./ShopContext";  // Import the context
import { all_books } from "../Components/Assets/MockupData";

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_books.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const addedAmount = state[action.itemId] + 1;
            return {
                ...state,
                [action.itemId]: addedAmount
            };
        case 'REMOVE':
            const reducedAmount = state[action.itemId] - 1;
            if (reducedAmount < 0) return state;  // Prevent negative quantities
            return {
                ...state,
                [action.itemId]: reducedAmount
            };
        default:
            return state;
    }
};

export const ShopContextProvider = (props) => {
    
    const [cartItems, dispatchCartAction] = useReducer(cartReducer, getDefaultCart());

    const addToCart = (itemId) => {
        dispatchCartAction({ type: 'ADD', itemId });
    }

    const removeFromCart = (itemId) => {
        dispatchCartAction({ type: 'REMOVE', itemId });
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_books.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_books,
        cartItems,
        addToCart,
        removeFromCart
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}
