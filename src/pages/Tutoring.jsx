import BackButton from "../components/BackButton";
import bvue from "/bvue.png";
import Layout from "../components/Layout";
import Footer from "../components/Footer";



const education = {
  title: "Education",
  description:
    "I started my journey in software development in 2021. I am currently pursuing a Bachelor of Science in Software Development at Bellevue University.",
};

function Tutoring() {
  return (
    <>
    <Layout>
    <div>
    <BackButton />
  
    <div>
    <div className={`hero min-h-screen text-center py-0`}>
          <div className="hero-content">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold">{education.title}</h1>
              <p className="py-6">{education.description}</p>
            </div>
          </div>
          
        </div>
      </div>
    
      <div className="flex flex-col items-center">
        <img src={bvue} alt="Bellevue University" className="w-1/8" />
        <p className="text-center">Bachelor of Science in Software Development</p>
        <p className="text-center">Bellevue University</p>
        <p className="text-center">2021 - 2025</p>
    </div>
    
    </div>
    </Layout>
    <Footer/>
    </>
  );
}

export default Tutoring;