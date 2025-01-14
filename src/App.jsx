import { Link } from "react-router-dom";
import AnimatedLayout from "./components/AnimatedLayout";

import aboutMe from "/aboutMe.png";
import projects from "/projects.svg";
import eduIcon3 from "/eduIcon3.svg";
import envelope from "/envelope.svg";

import "./App.css";
import back5 from "/back5.svg";





// Cards data
const cards = [
  {
    to: "/education",
    title: "Education",
    img: eduIcon3,
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
    to: "/contactPage",
    title: "Contact",
    img: envelope,
    description: "Get in touch with me"
  }
];

function App() {
  return (
   <div className="min-h-screen bg-cover  " style={{backgroundImage: `url(${back5})` }}> 
    
    <AnimatedLayout>
      
      {/* Hero Section */}
      <div className="hero bg-transparent h-[500px]">
        <div className="hero-content text-center">
          <div className="max-w-xlg">
            <span className="text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,#222222,#000000)] bg-clip-text text-transparent font-cabin md:leading-[110px] text-[30px] sm:text-[50px] lg:text-[80px] xl:text-[116px] font-[800] tracking-tight z-10">
              Hello, my name is Robert.{" "}
            </span>
            <p className="text-4xl font-bold text-center">
              and I&apos;m a software developer.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Grid Section */}
     
      <div className="container mx-auto px-4 py-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cards.map((card) => (
            <Link to={card.to} key={card.to}>
              <div className=" card card-compact bg-base-300 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <figure className="px-10 pt-8">
                  <div className="w-[34px] h-[34px] flex items-center justify-center">
                    <img 
                      src={card.img} 
                      alt={card.title.toLowerCase()} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                </figure>
               
                <div className="card-body items-center text-center  " >
                  <h2 className="card-title text-3xl font-bold">{card.title}</h2>
                  <p className="text-sm opacity-80">{card.description}</p>
                </div>
                
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AnimatedLayout>
   
   </div>
  );
}

export default App;