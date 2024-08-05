import React, { useState } from 'react';
import './DescriptionBox.css';

export const DescriptionBox = (props) => {
    const { product } = props;

    // State to track which content to show, defaulting to showing the description
    const [showDescription, setShowDescription] = useState(true);

    // Function to toggle between showing description and reviews
    const toggleContent = (isDescription) => {
        setShowDescription(isDescription);
    };

    // Function to render star ratings
    const renderStars = (stars) => {
        const fullStar = '★'; // Unicode star character
        const emptyStar = '☆'; // Unicode empty star character
        let starRating = '';

        // If stars are not provided, generate a random number between 1 and 5
        const rating = stars || Math.floor(Math.random() * 5) + 1;

        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                starRating += fullStar;
            } else {
                starRating += emptyStar;
            }
        }

        return (
            <span className="star-rating">
                {starRating.split('').map((star, index) => (
                    <span key={index} className={star === '★' ? 'full-star' : 'empty-star'}>
                        {star}
                    </span>
                ))}
            </span>
        );
    };

    return (
        <div className='descriptionbox'>
            <div className='descriptionbox-navigator'>
                {/* Toggle to description view */}
                <div className={`descriptionbox-nav-box ${showDescription ? '' : 'fade'}`} onClick={() => toggleContent(true)}>
                    Description
                </div>
                {/* Toggle to reviews view */}
                <div className={`descriptionbox-nav-box ${!showDescription ? '' : 'fade'}`} onClick={() => toggleContent(false)}>
                    Reviews ({product.reviews.length})
                </div>
            </div>
            <div className='descriptionbox-content'>
                {/* Conditional rendering based on state */}
                {showDescription ? (
                    <div className='descriptionbox-description'>
                        {product.long_description}
                    </div>
                ) : (
                    <div className='descriptionbox-reviews'>
                        {product.reviews.length > 0 ? (
                            product.reviews.map((review, index) => (
                                <div key={index} className='review'>
                                    <p><strong>Rating:</strong> {renderStars(review.stars)}</p>
                                    <p>{review.text}</p>
                                </div>
                            ))
                        ) : (
                            <p>No reviews yet.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
