


const about ={
  title: "About Me",
  description: "I am a web developer with a passion for learning and sharing to others what I know. I have experience in JavaScript, React, and Node.js. I am always looking for new opportunities to grow and improve my skills.",
 
 
}
function About() {
return (
    <div>
    <div className="bg-black text-white">
      <div className={`hero min-h-screen text-center`}>
      <div className="hero-content">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">{about.title}</h1>
          <p className="py-6">{about.description}</p>
        
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}



export default About;