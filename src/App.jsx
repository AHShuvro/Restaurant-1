import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import { useState } from 'react';
import Banner from './Components/Banner';
import RasturantAbout from './Components/RasturantAbout';
import ResturantManu from './Components/ResturantManu';
import FoodGallery from './Components/FoodGallery';
import { Shefs } from './Components/Shefs';
import BookATable from './Components/BookATable';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md fixed w-full z-10 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">My Landing Page</div>
              <div className="hidden md:flex items-baseline space-x-4 ml-10">
                <button onClick={() => scrollToSection('home')} className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</button>
                <button onClick={() => scrollToSection('services')} className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Services</button>
                <button onClick={() => scrollToSection('menu')} className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Menu</button>
                <button onClick={() => scrollToSection('services')} className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Services</button>
                <button onClick={() => scrollToSection('gallery')} className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">GALLERY</button>
                <button onClick={() => scrollToSection('chefs')} className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Chefs</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</button>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-blue-600 focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('home')} className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600">Services</button>
              <button onClick={() => scrollToSection('menu')} className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600">Menu</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600">GALLERY</button>
              <button onClick={() => scrollToSection('chefs')} className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600">Chefs</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600">Contact</button>
            </div>
          </div>
        )}
      </nav>
      <main className="mt-16">
        <section id="home" className=" h-screen flex items-center justify-center bg-white">
          <Banner />
        </section>
        <section id="about" className="py-28 flex items-center justify-center bg-white">
          <About />
        </section>
        <hr />
        <section id="services" className="p-28 flex items-center justify-center bg-gray-100">
          <Services />
        </section>
        <section id="resturantabout" className="flex items-center justify-center bg-white">
          <RasturantAbout />
        </section>
        <section id="menu" className=" h-screen flex items-center justify-center bg-white">
          <ResturantManu />
        </section>
        <section id="gallery" className=" flex items-center justify-center bg-white">
          <FoodGallery />
        </section>
        <section id="chefs" className="h-screen flex items-center justify-center bg-white">
          <Shefs />
        </section>
        <section id="" className="h-[60vh] flex items-center justify-center bg-white">
          <BookATable />
        </section>
        <section id="contact" className="p-8 h-screen flex items-center justify-center bg-white">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
