import React from 'react';
import Img from '../../image/Garmin Venu Sq, GPS Smartwatch.jpg';
import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handleSeeDetails = () => {
        navigate('watchinfo')
    };
    return (
        <div className='home-section'>
            <div className='watch-info'>
                <h1><span className='w-name'>Garmin Venu Sq</span>, GPS Smartwatch</h1>
                <p>Metallic Orchid Aluminum Bezel with Orchid Case and Silicone Band. with Bright Touchscreen Display, Up to 6 Days of Battery Life, Light Gold and White...</p>
                <button onClick={handleSeeDetails} className='btn-details'>See Details</button>
            </div>
            <div className='watch-img'>
                <img src={Img} alt="" />
            </div>
        </div>
    );
};

export default Home;