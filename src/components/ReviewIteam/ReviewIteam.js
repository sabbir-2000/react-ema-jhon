import { faTrain, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewIteam.css'

const ReviewIteam = (props) => {
    const { product, handleRemoveProduct } = props
    const { name, img, price, shipping, quantity } = product
    return (
        <div className='review-item'>

            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details" title={name}>
                    {name.length > 20 ? name.slice(0, 20) + '...' : name}

                    <p>$Price: <span className='orange-color'>{price}</span></p>
                    <p><small>$Shipping: {shipping}</small></p>
                    <p><small>quantity{quantity}</small></p>

                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct(product)} className='inside-delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewIteam;