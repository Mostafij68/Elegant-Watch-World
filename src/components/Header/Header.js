import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="header">
            <nav>
                <div onClick={() => setOpen(!open)} className='bars-icon'>
                    {open ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}
                </div>
                <h2>Elegant Watch World</h2>
                <div className={`menu-items ${open ? 'top-0': '-top-200'}`}>
                    <CustomLink to='/'>Home</CustomLink>
                    <CustomLink to='/reviews'>Reviews</CustomLink>
                    <CustomLink to='/dashboard'>Dashboard</CustomLink>
                    <CustomLink to='/blogs'>Blogs</CustomLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;