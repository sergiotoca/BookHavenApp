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
                                    <p><strong>Rating:</strong> {review.stars} Stars</p>
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
}
