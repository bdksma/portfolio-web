import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
    <div className="budi grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div className="animate__animated animate__fadeInUp animate__delay-3s">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.BudiImage} alt="Budi Image" className ="w-10 rounded-md" />
          <q>Success isn’t defined by speed, but by the willingness to keep learning. I am shaped by the process, and guided by purpose🤗</q>
        </div>
        <h1 className = "text-5xl/tight font-bold mb-6">Hello and Welcome!</h1>
        <p className = "text-base/loose mb-6 oppacity-50">
          I’m Yusuf Budi Kusuma, an Electrical Engineering graduate with a passion for building solutions at the intersection of data, technology, and real-world impact.  My portfolio showcases a diverse set of projects ranging from web based systems, data analytics pipelines, to AI-driven mobile applications designed with purpose and a problem solving mindset. I thrive on challenges that push me to learn continuously, collaborate across disciplines, and create products that are both functional and meaningful. Let’s explore what we can build one idea, one line of code, one insight at a time.
        </p>
        <div className = "flex items-center sm:gap-4 gap-2">
          <a
              href="https://drive.google.com/file/d/1k_MYR5COUlqp88uEYwwOTCKL477IlpMm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
            Download CV <i className="ri-download-2-line ri-lg"></i>
          </a>
          <a href="#project" className = "bg-zinc-700 p-4 rounded-2xl hover:bg-zink-600">
            See My Project <i className="ri-arrow-down-long-line ri-lg"></i>
          </a>
        </div>
      </div>
      <img src={DataImage.BudiImage} alt="Budi Image" className ="w-[300px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy" />
    </div>

    {/*About Section*/}
    <div className="about mt-32 py-10" id="about">
      <div className ="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <img src={DataImage.BudiImage} alt="Image" className ="w-12 rounded-md mb-10 sm:hidden" loading="lazy"/>
        <p className = "text-base/loose mb-10">
          Hi! I’m Yusuf Budi Kusuma, an enthusiastic and adaptive Electrical Engineering graduate with a strong focus in computer and telecommunication systems. My journey blends technical knowledge, analytical thinking, and a passion for building impactful digital solutions. Throughout my academic and internship experiences, I’ve developed web-based systems using Laravel, MySQL, and REST APIs, conducted data analysis using SQL and Python, and built ETL pipelines and dashboards to support business decision-making. I’ve also been part of Bangkit Academy’s Machine Learning program, where I led a team to develop an AI-powered mobile application that was selected as one of the Top 50 national capstone products. Beyond coding and data, I’m passionate about working in collaborative environments, solving real-world problems, and continuously learning new tools and technologies. Whether it’s improving internal systems, analyzing business performance, or creating scalable backend architectures, I bring both curiosity and commitment to every project I work on. I'm currently seeking opportunities where I can contribute, grow, and explore the intersection of technology, data, and business — especially in roles such as Data Analyst, Backend Developer, Software Engineer, or Technology Consultant. Let’s connect and build something meaningful together!
        </p>
        <div className = "flex items-center justify-between">
          <img src={DataImage.BudiImage} alt="Image" className = "w-12 rounded-md sm:block hidden" loading="lazy"/>
          <div className = "flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">
                10<span className="text-violet-500">+</span>
                </h1>
              <p>Finished Proyek</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1">
                1<span className="text-violet-500">+</span>
              </h1>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    {/*About Section*/}

    {/*Tools Section*/}
      <div className = "tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools and Technologies</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Here are some of the tools and technologies I use in my professional field and the work I do.</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

          {listTools.map(tool =>(
             <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
            <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"/>
            <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
    {/*Tools Section*/}

    {/*Project Section*/}
    <div className="proyek mt-32 py-10" id="project">
      <h1 className="text-center test-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
      <p className="text-base/loose text-center opacity-20" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Here is some project by me.</p>
      <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {listProyek.map(proyek => (
          <div className="p-4 bg-zinc-800 rounded-md" key={proyek.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
            <img src={proyek.gambar} alt="Project Image" loading="lazy" />
            <div>
              <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
              <p className="text-base/loose mb-4">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index)=> (
                  <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a className="bg-violet p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600" href="">See detail project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/*Project Section*/}

    {/*Contact Section*/}
    <div className="kontak mt-32 sm:p-10 p-0" id="contact">
      <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Contact</h1>
      <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Let's connect with me.</p>
      <form action="https://formsubmit.co/yusufbudikusuma7@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true" autoComplete="off">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Full Name</label>
            <input type="text" name = "nama" placeholder="Input your full name" className="border border-zinc-500 p-2 rounded-md" required/>
          </div>
          <div className="flex flex-col gap-2"> 
            <label className="font-semibold">Email</label>
            <input type="email" name = "email" placeholder="Input your email" className="border border-zinc-500 p-2 rounded-md" required/>
          </div>
          <div className="flex flex-col gap-2"> 
            <label htmlFor="pesan" className="font-semibold">Message</label>
            <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Input your message" className="border border-zinc-500 p-2 rounded-md" required></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-violet p-3 rounded-lg block border w-full cursor-pointer border-zinc-600 hover:bg-violet-600" >Send</button>
          </div>
        </div>
      </form>
    </div>
    {/*Contact Section*/}
    </>
  );
}

export default App;
