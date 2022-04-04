import React, { useEffect, useState } from 'react';
import Img from '../../image/Garmin Venu Sq, GPS Smartwatch.jpg';
import './Home.css'
import { useNavigate } from 'react-router-dom';
import {faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    const navigate = useNavigate();

    // watch infomation button
    const handleSeeDetails = () => {
        navigate('watchinfo')
    };

    // Reviews all button
    const handleSeeAllReviews = () =>{
        navigate('reviews')
    };

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('cutomers.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const newReviews = reviews.slice(0, 3);

    return (
        <div className='home-section'>
            <div className='header-section'>
                <div className='watch-info'>
                    <h1><span className='w-name'>Garmin Venu Sq</span>, GPS Smartwatch</h1>
                    <p>Metallic Orchid Aluminum Bezel with Orchid Case and Silicone Band. with Bright Touchscreen Display, Up to 6 Days of Battery Life, Light Gold and White...</p>
                    <button onClick={handleSeeDetails} className='btn-details'>See Details</button>
                </div>
                <div className='watch-img'>
                    <img src={Img} alt="" />
                </div>
            </div>
            <div className="reviews-section">
                <h1>Customer Feedback</h1>
                <div className='reviews'>
                    {
                        newReviews.map(review => <div className="review-items">
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
                <div onClick={handleSeeAllReviews} id='btn'><button className='btn-reviews'>See All Reviews</button></div>
            </div>
        </div>
    );
};

export default Home;