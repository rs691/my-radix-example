import PDFResume from "../components/PDFResume";

const about = {
  title: "About Me",
  description:
    "I am a web developer with a passion for learning and sharing to others what I know. I have experience in JavaScript, React, and Node.js. I am always looking for new opportunities to grow and improve my skills.",
};


function About() {
  return (
    <div>
      <div className="bg-gray-dark text-yellow">
        <div className={`hero min-h-screen text-center`}>
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
      </div>
    
    </div>
  );
}

export default About;
