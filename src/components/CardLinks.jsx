

import Buttons from "./Buttons";
import { Link } from "react-router-dom";
import Screen from "./Screen.svg";



function CardLinks() {
    return (
     
 <div className="relative h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="card-bordered bg-base-200 p-10 rounded-box shadow-2xl">
            <Buttons route="/contactPage" buttonText="Contact" />
          </div>
          <div className="card-bordered bg-base-200 p-10 rounded-box shadow-2xl">
            <Buttons route="/education" buttonText="Education" />
          </div>
          <div className="card-bordered bg-base-200 p-10 rounded-box shadow-2xl">
            <Buttons route="/about" buttonText="About" />
          </div>
          <div className="card-bordered bg-base-200 p-10 rounded-box shadow-2xl">
            <Buttons route="/projects" buttonText="Projects" />
          </div>
          <div className="card-bordered bg-base-200 p-10 rounded-box shadow-2xl">
            <Buttons route="/projects" />
            <img src="../public/Screen.svg" alt="Screen" />
          </div>
          <Link
        to="/about"
        className="bg-local bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: `url(${Screen})` }}
      >
        <div
          className=" card-bordered bg-local bg-center bg-no-repeat h-screen"
          style={{ backgroundImage: `url(${Screen})` }}
        ></div>
      </Link>
        </div>
        </div>
      
    );
}
export default CardLinks;