import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav className='flex bg-green-900 text-green-300 justify-evenly py-3'>
                <CustomLink  to="/">Home</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/posts">Posts</CustomLink>
                <CustomLink to="/countries">Countries</CustomLink>
                <CustomLink to="about">About</CustomLink>
           </nav>
        </div>
    );
};

export default Header;