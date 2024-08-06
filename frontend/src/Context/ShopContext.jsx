import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [allBooks, setAllBooks] = useState([]);
    const [cartItems, setCartItems] = useState({});
    
    useEffect(()=>{
        fetch('http://localhost:4000/api/books/allbooks')
        .then((response)=>response.json())
        .then((data)=>setAllBooks(data))

        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/api/users/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: "",
            })
                .then((response) => response.json())
                .then((data) => setCartItems(data));
        }
    }, []);

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[itemId]) {
                updatedCart[itemId] += 1;
            } else {
                updatedCart[itemId] = 1;
            }
            return updatedCart;
        });

        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/api/users/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId })
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[itemId]) {
                updatedCart[itemId] -= 1;
                if (updatedCart[itemId] <= 0) {
                    delete updatedCart[itemId];
                }
            }
            return updatedCart;
        });

        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/api/users/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId })
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = allBooks.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const contextValue = { getTotalCartItems, getTotalCartAmount, allBooks, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
