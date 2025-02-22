import React, { useState } from "react";
import { experiences } from "../data/Experiences.js";

const container =
  "bg-gradient-to-b from-slate-950 to-slate-900 text-gray-100 py-20 px-10";
const wrapper = "flex flex-col justify-center items-center gap-6";
const title = "text-4xl font-bold text-amber-500";
const subTitle = "text-2xl text-center";
const expContainer = "flex flex-col gap-7 md:w-2/3";
const expWrapper =
  "relative overflow-hidden bg-gray-950 flex flex-col gap-4 py-10 px-7 rounded-lg border border-lime-800 hover:border-lime-600 duration-500";
const animation = "transition-all duration-300 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100";

const companyWrapper = "flex gap-3";
const companyImgStyle = "rounded-xl";
const roleNameDateWrapper = "flex flex-col gap-1";
const roleStyle = "text-amber-600 text-2xl font-semibold";
const companyName = "text-gray-300 text-lg";
const dateStyle = "text-gray-400 text-sm";
const skillContainer = "flex gap-5";
const skillTitle = "text-amber-600 text-lg";
const skillWrapper = "flex flex-1 flex-wrap gap-1 list-none";
const skillStyle = "mx-3 text-gray-400";

function Experience() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div name="experience" className={container}>
      <div className={wrapper}>
        <div className={title}>Experience</div>
        <div className={subTitle}>
          My Work Experience as a Software Developer
        </div>
        <div className={expContainer}>
          {experiences
            .slice()
            .reverse()
            .map((item, index) => {
              return (
                <div key={index} className={expWrapper}>
                  <div className={companyWrapper}>
                    <div className={roleNameDateWrapper}>
                      <div className={roleStyle}>{item.jobrole}</div>
                      <div className={companyName}> {item.company} </div>
                      <div className={dateStyle}> {item.date} </div>
                    </div>
                  </div>
                 {/* Hover Text with Popup */}
<div className="relative cursor-pointer text-cyan-400">
  <span
    onMouseEnter={() => setHoverIndex(index)}
    onMouseLeave={() => setHoverIndex(null)}
  >
    {item.desc.length > 50 ? item.desc.substring(0, 50) + "..." : item.desc}
  </span>

  {/* Popup Box (Centered & Scrollable) */}
  {hoverIndex === index && (
    <div
      className="absolute bg-gray-800 text-gray-200 p-3 rounded shadow-lg border border-cyan-500 w-4/5 max-h-40 overflow-y-auto left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(null)}
    >
      {item.desc}
    </div>
  )}
</div>


                  <div className={skillContainer}>
                    <div className={skillTitle}>Skills :- </div>
                    <div className={skillWrapper}>
                      {item.skills.map((skill, index) => {
                        return (
                          <li key={index} className={skillStyle}>
                            {" "}
                            {skill}{" "}
                          </li>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
