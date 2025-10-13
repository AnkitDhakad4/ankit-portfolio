import { color } from "motion";
import React from "react";
import { ReactTyped } from "react-typed";
import "./style.css"
import imageSource from './avatar.png'

function Home() {
  const namecolor = "#d86225";
  
  const rolecolor = "#243ae9";
  
  const background ="linear-gradient(to top, #020B1A, #3E5879, #9BA5AE, #DCB697, #FC7001, #DD723C, #AD4A28, #040308)";
    // "linear-gradient(90deg, rgba(218, 206, 224, 1) 0%, rgba(146, 156, 151, 1) 50%, rgba(230, 197, 209, 1) 100%)";
  return (
    <div
      className="flex flex-col-reverse items-center justify-evenly md:flex-row md:justify-center w-full h-screen md:mt-10 "
      // style={{ background: "#dacee0", background: `${background}` }}
      id="mainContainer"
    >
      <div className=" text-[#f2f3fc] w-[80%] pl-2  md:w-1/3 mr-10 flex flex-col  justify-center-safe items-start md:items-start">
        <h1 className="text-4xl md:text-5xl font-bold">Hi There, </h1>
        <h1 className="text-4xl md:text-5xl font-bold">
          I am{" "}
          <span
            className="font-tagesschrift text-3xl md:text-5xl "
            style={{ color: `${namecolor}` }}
          >
            Ankit Dhakad
          </span>
        </h1>
        <h1 className="text-xl md:text-2xl pl-1.5">
          {" "}
          I am a{" "}
          <ReactTyped
            strings={[
              "Full Stack Developer...",
              "Software Developer...",
            ]}
            typeSpeed={90}
            backSpeed={60}
            backDelay={400}
            
            loop
            className="text-xl md:text-2xl text-typing"
            style={{ color: `${rolecolor}` }}
          />
        </h1>
        <div className="h-1 ml-1.5 w-full mt-1 md:w-4/5 bg-[#351564]"></div>
      </div>

      <div className=" w-1/2 h-1/5  md:w-1/3 flex justify-center  items-center md:pt-2.5  md:justify-end-safe md:items-center">
        <div
          // class="Image"
          className="w-[190px] h-[190px] rounded-full  bg-[#b4b6c8]  md:w-[300px] md:h-[300px] md:rounded-fullmd: mb-2.5 md:ml-2.5 ring-8 ring-[#016868] flex justify-center items-center overflow-hidden"
        >
          <img src={imageSource} alt="image" className="h-full w-full object-cover scale-120 " />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;

//  <div className='h-screen w-screen flex justify-center items-center'>
//        <img src={ankit} className='w-[800px] h-[600px]' />
//     </div>
