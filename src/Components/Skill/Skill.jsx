import React from "react";
// import { DiJavascript, DiReact,DiCss3,DiHtml5 } from "react-icons/di";
import { SiJavascript, SiReact, SiCss3, SiHtml5,SiCplusplus,SiMysql,SiC } from "react-icons/si";
// import {cpluscplus} from 'devicon'
function Skill() {
  const BigSkills = [
    { name: "C++", icon: SiC},
    { name: "C", icon: SiCplusplus},
    { name: "Java Script", icon: SiJavascript },
    { name: "React", icon: SiReact },
    { name: "Css", icon: SiCss3 },
    { name: "Html", icon: SiHtml5 },
    { name: "SQL", icon: SiMysql },
  ];

  const skills = [
    { name: "C++", level: 60 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 40 },
    { name: "Node.js", level: 75 },
    { name: "CSS", level: 80 },
  ];
  return (
    <div className="w-full h-fit  flex flex-col items-center py-30 pt-13 md:pt-7 bg-[#080809]">
      <h2 className="text-3xl text-[#f2f3fc] font-Merriweather font-bold mb-6 pt-2">Skills🔥</h2>
      <div className=" w-4/5 h-2/5 md:w-2/3 md:h-fit flex flex-wrap justify-center  overflow-auto md:flex-row md:justify-around  py-4 px-8">
        {BigSkills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              className="group shadow-md bg-white flex m-3 flex-col justify-around w-fit py-1.5 px-1 shadow-gray-400  rounded-2xl"
              key={skill.name}
            >
              <p className="bg-gray-800 text-white text-center opacity-0 group-hover:opacity-100 transition-all ease-in duration-500 delay-300  rounded-full mb-1  ">
                {skill.name}
              </p>
              <Icon
                className="group-hover:scale-115 mt-1 transition duration-600 "
                size={80}
              />
            </div>
          );
        })}
      </div>

      {/* <div className="w-2/3  mt-8">
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium font-JosefinSans text-[#f2f3fc]">{skill.name}</span>
                <span className="text-sm font-NotoSerif text-[#f2f3fc]">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-blue-500 h-4 rounded-full transition-all duration-700 ease-in-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Skill;
