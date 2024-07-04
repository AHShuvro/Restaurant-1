
const Banner = () => {
    return (
        <div className="relative w-full h-screen">
            <img className="w-full h-full object-cover" src="./public/Banner-img-1.jpg" alt="Banner" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="text-center text-white w-2/6 h-2/6 bg-[#F26149]">
                    <h1 className="text-5xl font-bold">Welcome to our website</h1>
                    <p className="mt-4 text-xl">This is the Home page.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
