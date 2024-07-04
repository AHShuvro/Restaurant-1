import React from 'react';

const RestaurantMenu = () => {
    const divStyle = {
        backgroundImage: 'url(/public/restaurant-menu-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '110vh',
        width: '100%'
    };
    return (
        <>
            <div style={divStyle} className=" flex items-center text-sm">
                <div className=' px-80 flex flex-col items-center justify-center gap-16'>
                    <div className='text-center'>
                        <h3  className='text-4xl mb-4'>MAIN MENU</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br />when an unknown printer took a galley.</p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-24'>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <img className='w-14 opacity-50 hover:opacity-100 cursor-pointer' src="/public/restaurant-menu-iteam01.png" alt="" />
                            <p>STARTERS</p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <img className='w-14 opacity-50 hover:opacity-100 cursor-pointer' src="/public/restaurant-menu-iteam02.png" alt="" />
                            <p>MEAT</p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <img className='w-14 opacity-50 hover:opacity-100 cursor-pointer' src="/public/restaurant-menu-iteam03.png" alt="" />
                            <p>FISH</p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <img className='w-14 opacity-50 hover:opacity-100 cursor-pointer' src="/public/restaurant-menu-iteam04.png" alt="" />
                            <p>VEGETARIAN</p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <img className='w-14 opacity-50 hover:opacity-100 cursor-pointer' src="/public/restaurant-menu-iteam05.png" alt="" />
                            <p>DESSERT</p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <img className='w-14 opacity-50 hover:opacity-100 cursor-pointer' src="/public/restaurant-menu-iteam06.png" alt="" />
                            <p>DRINKS</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <div className='flex items-center justify-between mb-3'>
                                <p className='text-lg font-medium'>Green Salad</p>
                                <p className='text-lg font-medium'>$12.00</p>
                            </div>
                            <p className='text-[#777777]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
                        </div>
                        <div>
                            <div className='flex items-center justify-between mb-3'>
                                <p className='text-lg font-medium'>Green Salad</p>
                                <p className='text-lg font-medium'>$12.00</p>
                            </div>
                            <p className='text-[#777777]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
                        </div>
                        <div>
                            <div className='flex items-center justify-between mb-3'>
                                <p className='text-lg font-medium'>Green Salad</p>
                                <p className='text-lg font-medium'>$12.00</p>
                            </div>
                            <p className='text-[#777777]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
                        </div>
                        <div>
                            <div className='flex items-center justify-between mb-3'>
                                <p className='text-lg font-medium'>Green Salad</p>
                                <p className='text-lg font-medium'>$12.00</p>
                            </div>
                            <p className='text-[#777777]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
                        </div>
                        <div>
                            <div className='flex items-center justify-between mb-3'>
                                <p className='text-lg font-medium'>Green Salad</p>
                                <p className='text-lg font-medium'>$12.00</p>
                            </div>
                            <p className='text-[#777777]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
                        </div>
                        <div>
                            <div className='flex items-center justify-between mb-3'>
                                <p className='text-lg font-medium'>Green Salad</p>
                                <p className='text-lg font-medium'>$12.00</p>
                            </div>
                            <p className='text-[#777777]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default RestaurantMenu;
