// components/About.js
import React from 'react';

const About = () => {
    return (
        <div className="p-8 flex items-center justify-center gap-20">
            <div className=''>
                <img src="/public/about.jpg" alt="" />
            </div>
            <div className='w-1/2'>
                <h3 className='text-4xl'>The best food in town at <br />one of the best locations!!!</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type scrambled.</p>
            </div>
        </div>
    );
};

export default About;
