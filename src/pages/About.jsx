import BackButton from "../components/BackButton";
import PDFResume from "../components/PDFResume";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const about = {
  title: "About Me",
  description:
    "I am a web developer with a passion for learning and sharing to others what I know. I have experience in JavaScript, React, and Node.js. I am always looking for new opportunities to grow and improve my skills.",
};


function About() {
  return (
    <>
    <Layout>
    <div>
     
      <BackButton />
     
     
        <div className={`hero min-h-screen text-center py-0`}>
          <div className="hero-content">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold">{about.title}</h1>
              <p className="py-6">{about.description}</p>
            </div>
          </div>
          
        </div>
        <div className="text-center py-12">
        <h2 className="text-4xl mb-4">View Resume</h2>
        <PDFResume pdfUrl="./public/resume.pdf" />
      </div>
      <Link
                to="/" // Add the path where your resume is located
                className="text-blue-500  hover:text-blue-700"
              >
                View Resume
              </Link>
      </div>


     
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
    <div className={`hero min-h-screen text-center py-0`}>
          <div className="hero-content">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold">{about.title}</h1>
              <p className="py-6">{about.description}</p>
              <div className="text-center py-12">
        <h2 className="text-4xl mb-4">View Resume</h2>
        <PDFResume pdfUrl="./public/resume.pdf" />
      </div>
            </div>
          </div>
          </div>
    <div className="text-center py-12">
        <h2 className="text-4xl mb-4">View Resume</h2>
        <PDFResume pdfUrl="./public/resume.pdf" />
      </div>
    
    </Layout>
    <Footer />
    </>
  );
}

export default About;
