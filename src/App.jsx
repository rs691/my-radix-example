import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import leaf2 from "../public/leaf2.svg";
import leaf3 from "../public/leaf3.svg";
import leaf4 from "../public/leaf4.svg";
import leaf5 from "../public/leaf5.svg";
import leafSmall from "../public/leafSmall.svg";
import leafMedium from "../public/leafMedium.svg";
import bvue from "../public/bvue.png";
import aboutMe from "../public/aboutMe.png";
import "./App.css";
import "@radix-ui/themes/styles.css";
import Footer from "./components/Footer";

import screenVariant from "../public/screenVariant.svg";
import leafBlue6 from "../public/leafBlue6.svg";
import projects from "../public/projects.svg";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on user's system preference
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
    <img src={leaf5} alt="leaf3" className="absolute bottom-0 left-10 top-80 w-1/8" />
    {/* Add linkedInIcon as an svg  */}
    <div 
      className={`min-h-screen bg-cover bg-center bg-fixed bg-no-repeat transition-colors duration-300 ${
        isDarkMode ? 'bg-black text-white' : ''
      }`}
      style={{ backgroundImage: isDarkMode ? 'light' : 'transparent', backgroundColor: isDarkMode ? 'black' : 'transparent' }}
    >
      <div className="end-0 top-0 absolute z-50 p-6">
        <label className="swap swap-rotate" aria-label="Theme Toggle">
          <input
            type="checkbox"
            className="theme-controller"
            value="dark"
            checked={isDarkMode}
            onChange={toggleTheme}
          />
         <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,1,0,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
      <img src={leaf4} alt="leaf4" className="absolute left-40 bottom-50 w-1/8" />
      <div className="hero bg-transparent h-[500px]">
        <div className="hero-content text-center text-black">
          <div className="max-w-xlg">
            <p className="font-cabin md:leading-[110px] text-[30px] sm:text-[50px] lg:text-[80px] xl:text-[116px] font-[800] tracking-tight z-20 relative">
              Hello, my name is Robert.{" "}
            </p>
            <p className="text-4xl font-bold text-center">
              and I&apos;m a software developer.
            </p>
          </div>
        </div>
      </div>
      <img src={leaf2} alt="leaf3" className="absolute top-20 w-1/12" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {[
            { to: "/education", title: "Education", img: bvue },
            { to: "/about", title: "About Me", img: aboutMe },
            { to: "/projects", title: "Projects", img: projects },
            { to: "/experience", title: "Experience", img: screenVariant },
            { to: "/contactPage", title: "Contact", img: aboutMe }
          ].map((item) => (
            <Link to={item.to} key={item.to}>
              <div className={`card transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'
              } backdrop-blur-sm hover:shadow-2xl h-full`}>
                <div className="card-body items-center text-center bg-transparent">
                  <h2 className="card-title text-4xl mb-4">{item.title}</h2>
                  <img
                    src={item.img}
                    alt={item.title.toLowerCase()}
                    className="w-48 h-48 object-contain"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    <img src={leaf3} alt="leaf3" className="absolute bottom-0 right-40 top-80 w-1/8" />
   
    <img src={leafMedium} alt="leaf4" className="absolute bottom-0 right-0 w-1/6" />
   
    <img src={leaf5} alt="leaf" className="test absolute  top-5 bottom-3 right-0 w-1/12"  />
    <img src={leafBlue6} alt="leaf" className="test absolute  top-5 bottom-0 right-0 w-1/12"  />
   

    <img src={leaf4} alt="leaf" className="absolute bottom-0  w-1/8" />
    <img src={leafSmall} alt="leaf3" className="absolute bottom-0 right-50 w-1/8" />
    <img src={leaf2} alt="leaf" className="absolute bottom-0 right-0 left-50 w-1/8" />
   
  
   
    <Footer />
    </>
  );
}

export default App;