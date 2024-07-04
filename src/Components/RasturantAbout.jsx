import React from 'react';

const RasturantAbout = () => {
    return (
        <div className="  bg-[#F7F5E7] flex items-center justify-between">
            <div className='w-1/3 px-36 text-center flex flex-col items-center gap-5'>
                <img src="/public/restaurant-about-icon.png" alt="" />
                <p className='text-xl'>Specialty of the Restaurant</p>
                <h4 className='text-4xl font-medium'>DISCOVER OUR
                    <br />TASTY MEALS</h4>
                <p>Lorem Ipsum is simply dummy text of the typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                <button>BOOK A TABLE</button>
            </div>
            <div className='flex-1'>
                <img className='w-full' src="/public/restaurant-about-bg (1).jpg" alt="" />
            </div>
        </div>
    );
};

export default RasturantAbout;