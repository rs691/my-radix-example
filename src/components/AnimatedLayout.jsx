import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import BackButton from './BackButton.jsx';
import Footer from './Footer';

import leaf2 from "/leaf2.svg";
import leaf3 from "/leaf3.svg";
import leaf4 from "/leaf4.svg";
import leaf5 from "/leaf5.svg";
import leafSmall from "/leafSmall.svg";
import leafMedium from "/leafMedium.svg";
import leafBlue6 from "/leafBlue6.svg";
import leafWhite from "/leafWhite.svg";
import '../css/AnimatedLayout.css';


import back5 from '/back5.svg';


const AnimatedLayout = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
 
     <div className="min-h-screen bg-cover  " style={{backgroundImage: `url(${back5})` }}>  
  

      {/* Back Button */} 
      <BackButton />  

      {/* Decorative Leaves Layout */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Top Row */}
        <img 
          src={leaf2} 
          alt="Decorative leaf" 
          style={{ transform: `translateY(${scrollPosition * 0.1}px)` }} 
          className="absolute top-8 left-8 w-24 md:w-32 opacity-50 rotate-[-20deg]" 
        />
        <img 
          src={leafBlue6} 
          alt="Decorative leaf" 
          style={{ transform: `translateY(${scrollPosition * 0.15}px)` }} 
          className="absolute top-12 left-1/4 w-20 md:w-28 opacity-40 rotate-[15deg]" 
        />
        <img 
          src={leafWhite} 
          alt="Decorative leaf" 
          style={{ transform: `translateY(${scrollPosition * 0.2}px)` }} 
          className="absolute top-16 left-1/2 w-24 md:w-32 opacity-45 -translate-x-1/2 rotate-[-10deg]" 
        />
        <img 
          src={leaf5} 
          alt="Decorative leaf" 
          style={{ transform: `translateY(${scrollPosition * 0.1}px)` }} 
          className="absolute top-8 right-8 w-24 md:w-32 opacity-50 rotate-[20deg]" 
        />

        {/* Middle Row */}
        <img 
          src={leaf3} 
          alt="Decorative leaf" 
          style={{ transform: `translateY(${scrollPosition * 0.2}px)` }} 
          className="absolute top-1/3 right-12 w-28 md:w-36 opacity-45 rotate-[30deg]" 
        />
        <img 
          src={leaf4} 
          alt="Decorative leaf" 
          style={{ transform: `translateY(${scrollPosition * 0.25}px)` }} 
          className="absolute top-1/2 left-16 w-28 md:w-36 opacity-50 rotate-[-25deg]" 
        />

        {/* Bottom Row */}
        <img 
          src={leafMedium} 
          alt="Decorative leaf" 
          style={{ transform: `translateY(${scrollPosition * 0.1}px)` }} 
          className="absolute bottom-16 right-12 w-32 md:w-40 opacity-45 rotate-[15deg]" 
        />
        <img 
          src={leafSmall} 
          alt="Decorative leaf" 
          style={{ transform: `translateY(${scrollPosition * 0.2}px)` }} 
          className="absolute bottom-12 left-16 w-24 md:w-32 opacity-40 rotate-[10deg]" 
        />
        <img 
          src={leaf5} 
          alt="Decorative leaf" 
          style={{ transform: `translateY(${scrollPosition * 0.15}px)` }} 
          className="absolute bottom-20 left-1/2 w-28 md:w-36 opacity-35 -translate-x-1/2" 
        />
      </div>

      {/* Main Content */}
      <div className="flex-grow relative z-10 pb-16">
        {children}
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 w-full z-20 ">
        <Footer />
      </div>
    </div>
    
  );
};

AnimatedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AnimatedLayout;