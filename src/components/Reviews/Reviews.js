import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useData from '../hook/useData';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useData([])
    return (
        <div className='reviews-section'>
            <h1>What our Customer says!</h1>
            <div className="reviews">
            {
                reviews.map(review => <div className="review-items">
                <div className='customer'>
                    <img src={review.img} alt="" />
                    <h4>{review.name}</h4>
                </div>
                <span className='rating-star'>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                </span>
                <p>{review.comment}</p>
            </div>)
            }
            </div>
        </div>
    );
};

export default Reviews;