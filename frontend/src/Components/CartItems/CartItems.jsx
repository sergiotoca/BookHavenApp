import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/remove_icon.png';

export const CartItems = () => {
    const { getTotalCartAmount, allBooks, cartItems, removeFromCart } = useContext(ShopContext);

    console.log('All Books:', allBooks);
    console.log('Cart Items:', cartItems);

    const renderedItems = allBooks.map((e) => {
        if (cartItems[e.id] > 0) {
            console.log('Rendering item:', e);
            return (
                <div key={e.id}>
                    <div className="cartitems-format cartitems-format-main">
                        <img className='carticon-product-icon' src={e.image} alt={e.name} />
                        <p>{e.name}</p>
                        <p>${e.new_price.toFixed(2)}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                        <img className='cartitems-remove-icon' onClick={() => { removeFromCart(e.id) }} src={remove_icon} alt="Remove" />
                    </div>
                    <hr />
                </div>
            );
        }
        return null;
    });

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {renderedItems}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount().toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount().toFixed(2)}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, please enter it here:</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
