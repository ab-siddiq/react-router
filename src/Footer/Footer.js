import React from 'react';

const Footer = () => {
    return (
        <div className='bg-green-900 text-green-200 text-center py-4 mt-40'>
            <p>&copy;copyright { new Date().getFullYear()}</p>
            <p>All right reserve Abu Bakkar Siddiq</p>
        </div>
    );
};

export default Footer;