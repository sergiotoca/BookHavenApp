import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <div className="book-image-container">
          <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt={props.name} />
        </div>
      </Link>
      <div className="book-info">
        <p>{props.name}</p>
        <div className="item-prices">
          <div className="item-price-new">
            New Price: ${props.new_price}
          </div>
          {props.old_price && <div className="item-price-old">
            Old Price: ${props.old_price}
          </div>}
        </div>
      </div>
    </div>
  )
}
