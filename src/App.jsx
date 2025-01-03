
import './App.css'
import "@radix-ui/themes/styles.css";


import Buttons from "./components/Buttons";


import { Link } from "react-router-dom";
import pi3 from "../public/pi3.svg";
import screen from "../public/screen.svg";
import aboutMe from "../public/aboutMe.png";
import PDFResumeModal from './components/PDFResumeModal';




function App() {
  return (
    <>
      {/* Theme switcher */}
      <div className="end-0 top-0 absolute z-50 p-6">
        <label className="swap swap-rotate">
          {/* daisyUI uses hidden checkbox to control the state */}
          <input
            type="checkbox"
            className="theme-controller border-white"
            value="dark"
          />

          {/* sun icon */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    

 {/* Hero section */}
 <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-xlg">
            <h1 className="text-6xl font-bold">Hello, my name is Robert </h1>
            {/* align text start */}
            <p className="text-4xl font-bold text-center">and I&apos;m a software developer.</p>
            
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
       
      </div>



      
      <div className="relative h-screen flex-col items-center justify-center p-8 overflow-hidden">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"> 
          
    

<Link to="/education">
        <div className="card-bordered bg-local bg-center bg-no-repeat h-screen p-6">
          <p className='text-2xl align-items'>Education</p>
           
           <img src={screen} alt="education" className='w-48'/>
         
          </div>
      </Link>
        
     


      <Link to="/about">
        <div
          className=" card-bordered bg-local bg-center bg-no-repeat h-screen p-6">
             <p className='text-2xl align-items'>About Me</p>
          <img src={aboutMe} alt="about me" className='w-48 pt-8' />
         
      </div>
      </Link>

      <Link to="/projects">
        <div className="card-bordered bg-local bg-center bg-no-repeat h-screen p-6">
        <p className='text-2xl align-items'>Projects</p>
          <img src={pi3} alt="projects" className='w-48' />
          </div>
      </Link>


      <Link to="/contactPage">
        <div
          className=" card-bordered bg-local bg-center bg-no-repeat h-screen p-6">
             <p className='text-2xl align-items'>Contact</p>
          <img src={aboutMe} alt="about me" className='w-48 pt-8' />
         
      </div>
      </Link>
      </div>
      </div>
    
       
<div className="text-center text-4xl ">View Resume
      <div>
      <PDFResumeModal pdfUrl="./public/resume.pdf" />
    </div>
    </div>





      {/* Hero section */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-xlg">
            <h1 className="text-6xl font-bold">Hello, my name is Robert </h1>
            {/* align text start */}
            <p className="text-4xl font-bold text-center">and I&apos;m a software developer.</p>
            
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
       
      </div>
      <div className="card-bordered bg-base-200 p-10 rounded-box shadow-2xl">
                    <Buttons route="/contactPage" buttonText="Contact" />
                  </div>


                  
      {/* Project image linked to projects page */}
      <Link
        to="/projects"
        className="bg-local bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: `url(${pi3})` }}
      >
      </Link>
      <Link
        to="/education"
        className="bg-local bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: `url(${Screen})` }}
      >
      </Link>


 

      
        
    </>
  )
}

export default App
