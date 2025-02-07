import { useCallback, useEffect, useState } from "react";

export const Gallery1 = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const carouselImages = ['/public/agency-work-02.jpg', '/public/agency-work-04.jpg', '/public/agency-work-06.jpg', '/public/agency-work-08.jpg', '/public/agency-work-13.jpg', '/public/agency-work-14.jpg'];
    const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1);
    const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1), [carouselImages.length]);


    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 6000);
        return () => clearInterval(intervalId);
    }, [nextSlider]);

    return (
        <div className="w-full h-[100vh] relative overflow-hidden">
            <button onClick={prevSlider} className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                <svg className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></svg>
            </button>
            <button onClick={nextSlider} className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                <svg className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></svg>
            </button>
            <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
                {carouselImages.map((img, idx) => (
                    <button key={`${img}_${idx}`} onClick={() => setCurrentSlider(idx)} className={`rounded-full duration-500 bg-white ${currentSlider === idx ? "w-8" : "wz-2"} h-2`}></button>
                ))}
            </div>
            <div className="ease-linear duration-500 flex transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)` }}>
                {carouselImages.map((slide, idx) => (
                    <div key={slide} className="min-w-full flex justify-center items-center bg-white h-[100vh] object-cover">
                        <img src={slide} className="h-[70vh]" alt={`Slider - ${idx + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    )
};
