import React, { useContext } from 'react'
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import ShopContext from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                {/* Image Selector If Needed*/}
                {/* <div className='productdisplay-img-list'>
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div> */}
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-stars'>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className='productdisplay-right-prices'>
                    <div className='productdisplay-right-price-old'>{product.old_price}</div>
                    <div className='productdisplay-right-price-new'>{product.new_price}</div>
                </div>
                <div className='productdisplay-right-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className='productdisplay-right-size'>
                    <h1>Select Option</h1>
                    <div className='productdisplay-right-sizes'>
                        <div>E-book</div>
                        <div>Printed Version</div>
                    </div>
                </div>
                <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category: </span>{product.category}</p>
                <p className='productdisplay-right-category'><span>Tags: </span>{product.category}</p>
            </div>
        </div>
    );
}
