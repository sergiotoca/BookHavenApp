import React, { useContext } from 'react';
import './RelatedProducts.css';
import { ShopContext } from '../../Context/ShopContext.jsx';
import { Item } from '../Item/Item.jsx';

export const RelatedProducts = (props) => {
    const { product } = props;
    const { allBooks } = useContext(ShopContext);

    return (
        <div className='relatedproducts'>
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {allBooks
                    .filter((item) => item.category === product.category && item.id !== product.id) // Exclude the current product
                    .map((item) => (
                        <Item
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    ))
                }
            </div>
        </div>
    );
};
