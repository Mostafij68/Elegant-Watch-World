import React from 'react';
import './WatchInfo.css';
import Img from '../../image/Garmin Venu Sq, GPS Smartwatch.jpg'

const WatchInfo = () => {
    return (
        <div className='watch-info'>
            <img src={Img} alt="" />
            <h1>Garmin Venu Sq, GPS Smartwatch</h1>
            <p> Metallic Orchid Aluminum Bezel with Orchid Case and Silicone Band. with Bright Touchscreen Display, Up to 6 Days of Battery Life, Light Gold and White.</p>
            <ul className='info-list'>
                <li><h5><span>Price:</span> $199.99</h5></li>
                <li><p><span>Brand:</span> Garmin</p></li>
                <li><p><span>Color:</span> Light Gold and White</p></li>
                <li><p><span>Special:</span> Time Display, Sleep Monitor, Text Messaging, GPS,</p></li>
                <li><p><span>Feature:</span> Notifications, Heart Rate Monitor</p></li>
                <li><p><span>Screen Size:</span> 1.3 Inches</p></li>
                <li><p><span>Shape:</span> Square</p></li>
                <li><p><span>Connectivity:</span> GPS</p></li>
                <li><p><span>Style:</span> Venu Sq</p></li>
            </ul>
            <button className='btn-buy'>Buy Now</button>
        </div>
    );
};

export default WatchInfo;