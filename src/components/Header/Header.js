import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="about">About</CustomLink>
           </nav>
        </div>
    );
};

export default Header;