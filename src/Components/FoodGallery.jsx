import { useEffect, useState } from "react";
import customCursor from './../../public/icon-zoom.png'
import { IoCloseSharp } from "react-icons/io5";
import { Gallery1 } from "./Gallery1";

const FoodGallery = () => {

    const [modal, setModal] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setModal(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);


    const toggleModal = () => {
        setModal(!modal)
    }



    const hoverStyle = {
        cursor: `url(${customCursor}) 16 16, auto`,
        backgroundColor: '#FFFFFF'
    };
    return (
        <>
            <div className=" mt-28 flex items-center text-sm">
                <div className='flex flex-col items-center justify-center gap-16'>
                    <div className='text-center'>
                        <h3 className='text-4xl mb-4'>MAIN MENU</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br />when an unknown printer took a galley.</p>
                    </div>
                    <div className="grid grid-cols-4">
                        <div className="row-span-2 bg-black overflow-hidden">
                            <img onClick={toggleModal} style={hoverStyle} className='h-full hover:opacity-20 duration-200 transform hover:scale-105' src="/public/agency-work-14.jpg" alt="" />
                        </div>
                        <div className="bg-black overflow-hidden">
                            <img onClick={toggleModal} style={hoverStyle} className='h-full hover:opacity-20 duration-200 transform hover:scale-105' src="/public/agency-work-08.jpg" alt="" />
                        </div>
                        <div className="row-span-2 bg-black overflow-hidden">
                            <img onClick={toggleModal} style={hoverStyle} className='h-full hover:opacity-20 duration-200 transform hover:scale-105' src="/public/agency-work-13.jpg" alt="" />
                        </div>
                        <div className="bg-black overflow-hidden">
                            <img onClick={toggleModal} style={hoverStyle} className='h-full hover:opacity-20 duration-200 transform hover:scale-105' src="/public/agency-work-06.jpg" alt="" />
                        </div>
                        <div className="bg-black overflow-hidden">
                            <img onClick={toggleModal} style={hoverStyle} className='h-full hover:opacity-20 duration-200 transform hover:scale-105' src="/public/agency-work-04.jpg" alt="" />
                        </div>
                        <div className="bg-black overflow-hidden">
                            <img onClick={toggleModal} style={hoverStyle} className='h-full hover:opacity-20 duration-200 transform hover:scale-105' src="/public/agency-work-02.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {
                modal && <div className="w-screen h-screen top-0 right-0 bottom-0 left-0 fixed bg-[#0007] z-20 flex flex-col items-center justify-center ">
                    <div className=" w-screen flex justify-end px-5 bg-white">
                        <IoCloseSharp onClick={toggleModal} className="w-8 h-8 text-white bg-black" />
                    </div>
                    <Gallery1 />
                </div>
            }

        </>
    );
};

export default FoodGallery;
