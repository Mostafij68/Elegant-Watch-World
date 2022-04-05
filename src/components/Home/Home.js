import Img from '../../image/Garmin Venu Sq, GPS Smartwatch.jpg';
import './Home.css'
import { useNavigate } from 'react-router-dom';
import useData from '../hook/useData';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';

const Home = () => {
    // fetch data
    const [reviews, setReviews] = useData([])

    const navigate = useNavigate();

    // watch infomation button
    const handleSeeDetails = () => {
        navigate('watchinfo')
    };

    // Reviews all button
    const handleSeeAllReviews = () =>{
        navigate('reviews');
    };

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
                        newReviews.map(review => <CustomerFeedback key={review.id} review={review}/>)
                    }
                </div>
                <div id='btn'><button onClick={handleSeeAllReviews} className='btn-reviews'>See All Reviews</button></div>
            </div>
        </div>
    );
};

export default Home;