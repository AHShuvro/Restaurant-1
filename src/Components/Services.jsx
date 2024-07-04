// components/Services.js
import React from 'react';

const Services = () => {
    return (
        <div className="p-8 px-80">
            <div className='flex items-center justify-center gap-8'>
                <div className='flex flex-col justify-center items-center'>
                    <img src="/public/service-1.png" alt="" />
                    <h4>BREAKFAST</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src="/public/service-2.png" alt="" />
                    <h4>LUNCH</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src="/public/service-3.png" alt="" />
                    <h4>DINNER</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src="/public/service-4.png" alt="" />
                    <h4>DRINKS</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
