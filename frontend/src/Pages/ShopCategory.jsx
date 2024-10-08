import React, { useContext, useEffect } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import { Item } from '../Components/Item/Item';

export const ShopCategory = (props) => {
    const { allBooks } = useContext(ShopContext);



    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className='shopcategory-indexSort'>
                <p>
                    <span>Showing 1-12</span> out of {allBooks.filter(a=>a.category === props.category).length} products
                </p>
                <div className='shopcategory-sort'>
                    Sort by <img src={dropdown_icon} alt="" className="dropdown-icon" />
                </div>
            </div>
            <div className="shopcategory-products">
                <div className="books-grid">
                    {allBooks.map((item, i) => {
                        if (props.category === item.category) {
                            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>;
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    );
}
