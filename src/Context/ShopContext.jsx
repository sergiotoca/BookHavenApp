import React, { createContext } from "react";
import { all_books } from "../Components/Assets/MockupData";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = {all_books};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;