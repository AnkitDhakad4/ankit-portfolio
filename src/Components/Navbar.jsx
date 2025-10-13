import React, { useState } from "react";
import { Link } from "react-scroll";
// import './Navbar.css'
function Navbar() {
  const [isMobileview, setisMobileview] = useState(false);
  function goToMobile() {
    setisMobileview(!isMobileview);
  }
  const NavElements = ["Home", "Intro", "Projects", "Skills", "Contact"];
  return (
    <>
      <nav className="flex fixed top-0  rounded-b-xl w-full h-16  text-[#d3dbda] justify-between  p-1.5 bg-[#016868] ">
        <div className="flex text-[#e3e8e8] justify-between items-center w-full p-1.5 bg-[#016868]">
          <div className="ml-3.5 w-1/2">Logo</div>
          <div className=" md:w-2/5 mr-4.5 ">
            <ul className=" hidden md:flex flex-row justify-around">
              {NavElements.map((NavElement) => {
                return (
                  <li>
                    <Link
                      key={NavElement}
                      to={NavElement}
                      smooth={true}
                      duration={600}
                      spy={true}
                      offset={-48}
                      activeClass="text-[#321b12]   "
                      className="tracking-tight font-mono  hover:underline hover:text-[#321b12] hover:cursor-pointer"
                    >
                      {NavElement}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div
          className={`${
            isMobileview ? "justify-center" : "justify-end"
          } md:hidden  mr-1.5  w-full flex `}
        >
          <button
            onClick={goToMobile}
            className={`${isMobileview ? "hidden" : "block"} `}
          >
            &#9776;
          </button>
          {isMobileview && (
            <div className="text-center">
              <ul className="space-y-1 text-sm">
                {NavElements.map((NavElement) => {
                  return (
                    <li
                    key={NavElement}
                    >
                      <Link
                        to={NavElement}
                        smooth={true}
                        // spy={true}
                        duration={600}
                        onClick={goToMobile}
                      >
                        {NavElement}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
