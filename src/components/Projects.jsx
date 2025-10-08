import { projects } from "../data/Projects.js";
import HoverPopup from "./HoverComponent.jsx";

const container =
  "bg-gradient-to-t from-slate-950 to-slate-900 text-gray-100 py-20 lg:px-10 px-5";
const wrapper = "flex flex-col justify-center items-center gap-6";
const title = "text-3xl lg:text-4xl font-bold text-amber-500";
const subTitle = "lg:text-2xl text-xl text-center text-zinc-300";
const projectContainer = "grid gap-8 sm:grid-cols-2 lg:grid-cols-3";
const projectWrapper =
  "ui-glass-card group flex flex-col gap-5 p-6 rounded-2xl transition duration-300 hover:-translate-y-1";
const imgWrapper = "relative rounded-xl overflow-hidden ring-1 ring-white/10";
const projectImgStyle =
  "w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105";
const nameDateWrapper = "flex flex-col gap-1";
const nameStyle = "text-amber-400 lg:text-2xl text-xl font-semibold";
const dateStyle = "text-gray-400 text-sm";
const skillWrapper = "flex flex-wrap gap-2";
const skillStyle = "ui-skill-pill";
const btnWrapper = "flex justify-between gap-4";
const btnSytle = "ui-primary-btn lg:py-3 lg:px-5 px-4 py-2";

function Projects() {
  return (
    <div name="projects" className={container}>
      <div className={wrapper}>
        <div className={title}>Personal Projects</div>
        <div className={subTitle}>
          Here is My Recent Projects defining Experience{" "}
        </div>
        <div className={projectContainer}>
          {projects.map((item, index) => {
            return (
              <div className={projectWrapper} key={index}>
                <div className={imgWrapper}>
                  <img
                    className={projectImgStyle}
                    src={item.img}
                    alt="Project screenshot"
                    loading="lazy"
                  />
                </div>
                <div className={skillWrapper}>
                  {item.skills.map((skill, index) => (
                    <div className={skillStyle} key={index}>
                      {" "}
                      {skill}{" "}
                    </div>
                  ))}
                </div>
                <div className={nameDateWrapper}>
                  <div className={nameStyle}>{item.title} </div>
                  <div className={dateStyle}>{item.date} </div>
                </div>
                {/* <div className=''>  {item.desc}  </div> */}
                <HoverPopup text={item.desc} />
                <div className={btnWrapper}>
                  <a
                    className={`${btnSytle} inline-flex items-center justify-center`}
                    href={item.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    className={`${btnSytle} inline-flex items-center justify-center`}
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
