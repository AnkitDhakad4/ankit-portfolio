
import React from "react";
import photo from './Ankit.png';

function Intro() {
    const avatar=null;
    const background =
    "#080809" ;
        // "linear-gradient(135deg, rgba(199,240,240,1) 0%, rgba(199,183,183,1) 40%, rgba(167,211,235,1) 100%)";

    const resume='https://drive.google.com/file/d/1QeLXljxDF873qf4nbaAUX_pmIE1Ypg8N/view?usp=drive_link'
    let content="I’m a B.Tech student at NIT Delhi specializing in MERN stack development and DSA in C/C++. I enjoy building responsive web apps, solving problems, and exploring Machine Learning. I focus on writing clean, maintainable code and creating smooth, functional user experiences. Along with developing full-stack projects, I’m always curious to learn new technologies, improve my development workflow, and take on challenges that help me grow as a software engineer. My goal is to build scalable products that combine performance, usability, and modern design."
    return (
        <div
            className="text-white h-screen w-full flex-col  pt-13  md:pt-7"
            style={{ background: `${background}` }}
        >
            <p className="text-2xl   md:text-4xl font-bold font-Merriweather text-[#f2f3fc]  text-center">Intro</p>
            <div className="h-full flex flex-col items-center  md:flex-row  md:items-center md:justify-around md:w-11/12">
                {/* Image Frame */}
                
                <div className="w-2/3 h-1/3 mt-[0px] md:w-1/2 md:h-3/5 md:mb-10 flex justify-center items-center">
                    <div className=" md:h-[320px] md:w-[320px]  rounded-3xl overflow-hidden shadow-2xl border-4 border-[#016868]  hover:scale-105 transition-transform duration-300">
                        
                        <img
                            src={avatar}
                            alt="Ankit"
                            className="h-full w-full object-cover rounded-3xl"
                        />
                        
                    </div>
                </div>

                {/* Text Frame */}
                <div className="mx-5 md:ml-2 w-full h-9/10 md:w-1/2 md:h-fit mb-10 flex flex-col justify-center p-5 rounded-2xl shadow-2xl bg-[#000000]  border border-white/60 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition">
                    <h1 className="text-3xl md:text-4xl text-[#d86225] font-bold font-tagesschrift md:mb-2  ">
                        I&apos;m Ankit
                    </h1>
                    <p className=" md:text-xl font-Oswald text-[#b4b6c8] mb-1.5 md:mb-4">
                        Developer
                    </p>
                    <p className=" leading-5 my-3   font-NotoSerif   text-[#f2f3fc] md:leading-normal md:text-justify">
                        {content}
                    </p>
                    <p className="mt-2 md:mt-5 font-AlanSans text-[#edeff5]">
                        <span className="text-[#475ea3] font-JosefinSans ">Email:</span>{" "}
                        dhakerankit44@gmail.com
                    </p>
                    <p className="md:mt-1.5 font-AlanSans text-[#edeff5]">
                        <span className="text-[#475ea3] font-JosefinSans">Location:</span>{" "}
                        Chittorgarh,India - 312606
                    </p>
                    <a
                        href={resume}
                        download="My_Resume.pdf"
                        className="mt-5"
                    >
                        <button
                            className="cursor-pointer gap-2 px-4 py-2 mb-1 font-mono rounded-xl bg-[#124687] text-white 
                                shadow-lg hover:bg-[#0e3563] active:scale-95 
                                focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        >
                            Resume
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Intro;






// {//{ import React from "react";
// import photo from './Ankit.png'

// function Intro(){
//     const background="linear-gradient(44deg,rgba(199, 240, 240, 1) 0%, rgba(199, 183, 183, 1) 0%, rgba(167, 211, 235, 1) 100%)";
//     return(
//         <div className=" text-white h-screen w-full "
//             style={{backgroundImage:`${background}` }}
//         >
//             {/* <h1 className="text-center text-4xl font-Oswald text-[#742689]">About Me</h1> */}
//             <div className="h-full flex items-center-safe justify-around pt-1  ">
//                 <div className="m-2 w-1/2 h-3/5 mb-10  flex justify-center   ">
//                     <img 
//                     src={photo}
//                     alt="image"
//                     className="h-[300px] w-[300px]   rounded-3xl shadow-2xl "
//                      />
//                 </div>
//                 <div className="ring-1 m-2 w-1/2 h-3/5 mb-10 flex justify-center flex-col">
//                     <h1 className="text-3xl text-[#0b4894] font-bold font-tagesschrift">I`m Ankit</h1>
//                     <p className="text-xl font-Oswald text-[#5a788d]">Software Developer</p>
//                     <p className="mt-3.5 font-Oswald font-semibold text-[#121b38]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum doloribus dolore fugit blanditiis inventore corporis accusamus porro animi cumque tempore omnis quibusdam magni voluptatem praesentium labore neque, harum odio, in impedit autem tempora similique! Est, dolorum totam. Perspiciatis sunt modi similique accusantium. Incidunt repellat est adipisci! Repudiandae nesciunt deserunt soluta. </p>
//                     <p className="mt-5 font-mono text-[#080606]"><span className="text-[#2804ab] ">Email:</span>dhakerankit44@gmail.com</p>
//                     <p className="mt-1.5 font-mono text-[#080606]"><span className="text-[#2804ab]">Locaton:</span>Chittorgargh,India-312606</p>
//                     <a href="https://example.com/your-resume.pdf" download="My_Resume.pdf">
//                         <button
//                             class="cursor-pointer gap-2 mt-1.5 px-1 py-1 
//                                 rounded-xl bg-[#124687] text-white  shadow-lg 
//                                 focus:outline-none focus:ring-2 
//                                 focus:ring-indigo-500 transition"
//                         >
//                             Resume
//                         </button>
//                         </a>
//                 </div>


//             </div>
//         </div>
//     )
// }

// export default Intro;}

// }
