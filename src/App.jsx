import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import leaf2 from "/leaf2.svg";
import leaf3 from "/leaf3.svg";
import leaf4 from "/leaf4.svg";
import leaf5 from "/leaf5.svg";
import leafSmall from "/leafSmall.svg";
import leafMedium from "/leafMedium.svg";
import leafBlue6 from "/leafBlue6.svg";
import bvue from "/bvue.png";
import aboutMe from "/aboutMe.png";
import projects from "/projects.png";
import screenVariant from "/screenVariant.svg";
import "./App.css";
import "@radix-ui/themes/styles.css";
import Footer from "./components/Footer";



 // Cards data
 const cards = [
  { 
    to: "/education", 
    title: "Education", 
    img: bvue,
    description: "View my educational background"
  },
  { 
    to: "/about", 
    title: "About Me", 
    img: aboutMe,
    description: "Learn more about who I am"
  },
  { 
    to: "/projects", 
    title: "Projects", 
    img: projects,
    description: "Explore my portfolio of projects"
  },
  { 
    to: "/experience", 
    title: "Experience", 
    img: screenVariant,
    description: "Check out my professional experience"
  },
  { 
    to: "/contactPage", 
    title: "Contact", 
    img: aboutMe,
    description: "Get in touch with me"
  }
];


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
      {/* Decorative Leaves Layout */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Top Section Leaves */}
        <img src={leaf2} alt="Decorative leaf" className="absolute top-10 left-10 w-24 md:w-32 opacity-60 rotate-[-15deg]" />
        <img src={leaf5} alt="Decorative leaf" className="absolute top-5 right-10 w-20 md:w-28 opacity-50 rotate-[15deg]" />
        <img src={leafBlue6} alt="Decorative leaf" className="absolute top-20 right-32 w-16 md:w-24 opacity-40" />

        {/* Middle Section Leaves */}
        <img src={leaf3} alt="Decorative leaf" className="absolute top-1/3 right-20 w-32 md:w-40 opacity-50 rotate-[45deg]" />
        <img src={leaf4} alt="Decorative leaf" className="absolute top-1/2 left-16 w-28 md:w-36 opacity-60 -rotate-[30deg]" />

        {/* Bottom Section Leaves */}
        <img src={leafMedium} alt="Decorative leaf" className="absolute bottom-20 right-10 w-40 md:w-48 opacity-50" />
        <img src={leafSmall} alt="Decorative leaf" className="absolute bottom-10 left-20 w-24 md:w-32 opacity-40 rotate-[15deg]" />
        <img src={leaf5} alt="Decorative leaf" className="absolute bottom-16 left-1/2 w-28 md:w-36 opacity-30 -translate-x-1/2" />
      </div>

      {/* Main Content */}
      <div className={`min-h-screen bg-cover bg-center bg-fixed bg-no-repeat transition-colors duration-300 relative z-10 ${
        isDarkMode ? 'bg-black text-white' : ''
      }`}>
        {/* Theme Toggle */}
        <div className="end-0 top-0 absolute z-50 p-6">
          <label className="swap swap-rotate" aria-label="Theme Toggle">
            <input
              type="checkbox"
              className="theme-controller"
              value="dark"
              checked={isDarkMode}
              onChange={toggleTheme}
            />
            {/* Sun icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            {/* Moon icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,1,0,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>

        {/* Hero Section */}
        <div className="hero bg-transparent h-[500px]">
          <div className="hero-content text-center text-black">
            <div className="max-w-xlg">
              <span className="text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,#6439FF,#00CCDD)] bg-clip-text text-transparent font-cabin md:leading-[110px] text-[30px] sm:text-[50px] lg:text-[80px] xl:text-[116px] font-[800] tracking-tight z-10">
                Hello, my name is Robert.{" "}
              </span>
              <p className="text-4xl font-bold text-center">
                and I&apos;m a software developer.
              </p>
            </div>
          </div>
        </div>
     
        
 {/* Cards Grid Section */}
 <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cards.map((card) => (
            <Link to={card.to} key={card.to}>
              <div className={`card card-compact ${
                isDarkMode ? 'bg-base-300' : 'bg-base-100'
              } shadow-xl hover:shadow-2xl transition-all duration-300 h-full`}>
                <figure className="px-6 pt-6">
                  <img
                    src={card.img}
                    alt={card.title.toLowerCase()}
                    className="w-24 h-24 object-contain rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-2xl font-bold">{card.title}</h2>
                  <p className="text-sm opacity-80">{card.description}</p>
                  <div className="card-actions">
           
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      </div>
    
      <Footer />
    </>
  );
}

export default App;