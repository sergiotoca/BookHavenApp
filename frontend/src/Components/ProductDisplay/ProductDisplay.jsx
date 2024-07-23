import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    // Calculate average rating from reviews
    const getAverageRating = (reviews) => {
        const total = reviews.reduce((acc, review) => acc + review.stars, 0);
        return reviews.length > 0 ? total / reviews.length : 0;
    };

    // Create stars display
    const renderStars = (average) => {
        const fullStars = Math.floor(average);
        const hasHalfStar = average % 1 >= 0.5;
        const totalStars = fullStars + (hasHalfStar ? 1 : 0);
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<img src={star_icon} alt="Full star" key={i} />);
        }
        if (hasHalfStar) {
            stars.push(<img src={star_icon} alt="Half star" key="half-star" />);
        }
        while (stars.length < 5) {
            stars.push(<img src={star_dull_icon} alt="Empty star" key={`empty-${stars.length}`} />);
        }

        return stars;
    };

    const averageRating = getAverageRating(product.reviews);

    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt={product.name} />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-stars'>
                    {renderStars(averageRating)}
                    <p>({product.reviews.length} reviews)</p>
                </div>
                <div className='productdisplay-right-prices'>
                    <div className='productdisplay-right-price-old'>${product.old_price.toFixed(2)}</div>
                    <div className='productdisplay-right-price-new'>${product.new_price.toFixed(2)}</div>
                </div>
                <div className='productdisplay-right-description'>
                    {product.short_description}
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
