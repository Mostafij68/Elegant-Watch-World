import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <h2>Elegant Watch World</h2>
                <div className='menu-items'>
                    <CustomLink to='/home'>Home</CustomLink>
                    <CustomLink to='/reviews'>Reviews</CustomLink>
                    <CustomLink to='/dashboard'>Dashboard</CustomLink>
                    <CustomLink to='/blogs'>Blogs</CustomLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;