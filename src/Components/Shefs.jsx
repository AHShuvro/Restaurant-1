import { useState, useRef } from "react";
import customCursor from './../../public/icon-move-black.png'

export const Shefs = () => {

    const hoverStyle = {
        cursor: `url(${customCursor}) 16 16, auto`,
        backgroundColor: '#FFFFFF'
    };

    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [
        { img: "/public/restaurant-chef-01.jpg", name: "Bryan Jhonson", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sequi molestiae nesciunt facilis omnis, fuga magni dolore iusto quisquam illo?" },
        { img: "/public/restaurant-chef-02.jpg", name: "Jeremy Dupont", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { img: "/public/restaurant-chef-03.jpg", name: "Gustav Fring", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sequi molestiae nesciunt facilis omnis, fuga magni dolore iusto quisquam illo?  Accusamus sequi molestiae nesciunt facilis omnis, fuga magni dolore iusto quisquam illo" },
    ];

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const sliderRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const moveX = e.clientX - startX;
        if (moveX > 50) {
            setCurrentSlider(currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
            setIsDragging(false);
        } else if (moveX < -50) {
            setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);
            setIsDragging(false);
        }
    };

    return (
        <>

            <div className=" mx-80 flex items-center text-sm">
                <div className='flex flex-col items-center justify-center gap-16'>
                    <div className='text-center'>
                        <h3 className='text-4xl mb-4'>MEET OUR CHEFS</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br />when an unknown printer took a galley.</p>
                    </div>
                    <div className="w-full h-60 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-[#F7F5E7] before:inset-0 transform duration-1000 ease-linear"
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        ref={sliderRef}
                        style={hoverStyle}
                    >
                        <div className="drop-shadow-lg text-[#3B3228] flex items-center h-full select-none ">
                            <div className="w-1/2 px-24 h-full flex flex-col justify-center">
                                <h1 className="text-2xl font-bold">{sliders[currentSlider].name}</h1>
                                <p className="text-sm mb-5 mt-1">Executive Chef</p>
                                <p className="text-base font-light mb-4">{sliders[currentSlider].des}</p>
                                <p className="text-base font-light">{sliders[currentSlider].des}</p>
                            </div>
                            <div className="w-1/2">
                                <img draggable="false" className="select-none w-full h-60 sm:h-96 md:h-[540px]" src={sliders[currentSlider].img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
