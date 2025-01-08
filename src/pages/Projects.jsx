import AnimatedLayout from '../components/AnimatedLayout';

function Projects() {
  return (
    <div>
      <AnimatedLayout>
      <div className="text-center text-5xl text-blue">Projects</div>
     {/* Open the modal using document.getElementById('ID').showModal() method */}
     <div className="flex justify-center">
<button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>Project 1</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Project 1</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    
    <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Project 2</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
</div>

<div className="flex justify-center">
<div className="text: 5xl text-green">Project 3</div>

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
</AnimatedLayout>
    </div>
  );
}
export default Projects;