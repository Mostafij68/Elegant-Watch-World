import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h2>Frequently Asked Questions</h2>
            <div className="faq">
                <h4><span>Que:</span>1. What is Context API?</h4>
                <p><span>Ans:</span> The Context API is a React structure. It is primarily used for passing data to a specific component that helps us solve the problem of prop-drilling.</p>
            </div>
            <div className="faq">
                <h4><span>Que:</span>2. What is Semantic Tag?</h4>
                <p><span>Ans:</span> The Semantic Tag is human and machine readable because they represent their meaning. Such as: &#60;form&#62; , &#60;table&#62; , and &#60;article&#62; - Clearly defines it purpose. The Semantic tag makes the code easier to write and understand for a developer.</p>
            </div>
        </div>
    );
};

export default Blogs;