import React from 'react';
import bgImg from './../../public/hero-bg9.jpg'

const BookATable = () => {
    const backgroundImg = {
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
    }
    return (
        <>
            <div style={backgroundImg}>
                <div className='absolute w-full h-[60vh] bg-gray-700 opacity-50'></div>
            </div>
        </>
    );
};

export default BookATable;