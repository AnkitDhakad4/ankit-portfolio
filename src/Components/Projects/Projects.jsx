import React from "react";
import "./style.css";
import { useInView } from "react-intersection-observer";
import BlogPage from "./Blog Page.png";
import Calculator from "./Calculator.png";
import CurrencyConverter from "./Currency Converter.png";

function Projects() {
  const background = "#080809";
  const cardBackground = "#dadde6";
  const { ref, inView } = useInView({
    threshold: 0.2,
    
  });

  const cards = [
    {
      name: "Blog Page",
      photo: BlogPage,
      link: "https://github.com/AnkitDhakad4/Blog-Page",
    },
    
    {
      name: "Calculator",
      photo: Calculator,
      link: "https://github.com/AnkitDhakad4/Calculator",
    },
    {
      name: "Currency Converter",
      photo: CurrencyConverter,
      link: "https://github.com/AnkitDhakad4/Currency-Converter",
    },
   
    
    
  ];
  return (
    <div
      className="w-full  h-fit pb-3  overflow-x-hidden  flex flex-col items-center pt-13 md:pt-7"
      style={{ background: `${background}` }}
    >
      <p className="text-3xl font-Merriweather font-bold  text-[#f2f3fc] pb-1">
        My work !!
      </p>
      <div
        className="w-fit h-full flex flex-wrap px-3  justify-center    pt-6 "
        ref={ref}
      >
        {/* Cards  */}
        {cards.map((card) => {
          return (
            <div
              key={card.name}
              className={`w-[350px] h-[350px] font-JosefinSans rounded-3xl mx-2 my-4 md:mx-6 md:my-6 ring-1 ring-white  mt-2 hover:scale-105 overflow-hidden transition-transform duration-300   flex flex-col  
                ${inView ? "card" : "opacity-0"}`}
              style={{ background: `${cardBackground}` }}
              // id='card'
            >
              <img
                src={card.photo}
                alt="MyBlog page"
                className="h-4/5 w-full  "
              />
              <div className="flex flex-row mt-5  justify-between px-2.5 ">
                <p className="py-1.5 text-xl font-Oswald text-[#000B58]">
                  {card.name}
                </p>
                <a
                  target="_blank"
                  href={card.link}
                  className="cursor-pointer  px-3 py-2 rounded-xl bg-[#11488a] text-white  
                                shadow-lg hover:bg-[#0e3563] active:scale-95 
                                focus:outline-none   transition"
                >
                  View More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
