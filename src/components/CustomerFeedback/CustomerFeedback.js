import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CustomerFeedback.css'

const CustomerFeedback = (props) => {
    const { name, img, comment } = props.review
    return (
        <div>
            <div className="review-items">
                <div className='customer'>
                    <img src={img} alt="" />
                    <h4>{name}</h4>
                </div>
                <span className='rating-star'>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </span>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default CustomerFeedback;