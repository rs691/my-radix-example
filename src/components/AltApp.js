import { Link } from "react-router-dom";
import pi3 from "../public/pi3.svg";
import bvue from "../public/bvue.png";
import aboutMe from "../public/aboutMe.png";
import "./App.css";
import "@radix-ui/themes/styles.css";

// import Gri2 from "../public/Gri2.svg";
import blackPurple from "../public/blackPurple.svg";

function AltApp() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat" 
         style={{ backgroundImage: `url(${blackPurple})` }}>
      

      <div className="hero bg-transparent h-[500px]">
        <div className="hero-content text-center">
          <div className="max-w-xlg">
            <p className=" text-base-100 font-cabin md:leading-[110px] text-[30px] sm:text-[50px] lg:text-[80px] xl:text-[116px] font-[800] tracking-tight z-20 relative">
              Hello, my name is Robert.{" "}
            </p>
            <p className="text-4xl font-bold text-center text-white">
              and I&apos;m a software developer.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {[
            { to: "/education", title: "Education", img: bvue },
            { to: "/about", title: "About Me", img: aboutMe },
            { to: "/projects", title: "Projects", img: pi3 },
            { to: "/experience", title: "Experience", img: bvue },
            { to: "/contactPage", title: "Contact", img: aboutMe }
          ].map((item) => (
            <Link to={item.to} key={item.to}>
              <div className="card bg-white/80 h-full">
                <div className="card-body items-center text-center">
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
  );
}

export default AltApp;