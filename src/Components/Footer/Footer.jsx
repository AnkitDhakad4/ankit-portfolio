import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  const logos = [
    {
      name: "Instagram",
      image: FaInstagram,
      link: "https://www.instagram.com/ankitdhaker4/",
    },
    { name: "LinkedIn", image: FaLinkedin, link: "www.linkedin.com/in/ankitdhakad4" },
    { name: "Github", image: FaGithub, link: "https://github.com/AnkitDhakad4" },
    { name: "Facebook", image: FaFacebook, link: "https://www.facebook.com/ajay.dhaker.9212" },
    { name: "Twitter", image: FaTwitter, link: "https://x.com/ankit_dhak16082" },
  ];

  return (
    <footer className="w-full   ">
      <div className="">
        {/* for the Desktop view */}
        <div className="md:flex-row  bg-[#205555] text-[#DDF2FD] max-h-fit w-full p-2 pr-1 flex flex-col justify-between">
          <div className="justify-center flex  items-center ">Logo</div>


          <div className="md:ml-83 self-center  flex flex-wrap mt-1">
            {logos.map((logo) => {
              const Icon = logo.image;
              return (
                <a
                  key={logo.name}
                  href={logo.link}
                  className="ml-1.5 md:mr-4 mr-1 w-12 h-12 rounded-full flex justify-center items-center transition-colors duration-500  hover:bg-[#427D9D]"
                >
                  <Icon className="h-8 w-8 pr-0.49 m-0" />
                </a>
              );
            })}
          </div>


          
          <div className="flex flex-col items-center justify-center">
            <p className="mt-0.5 px-4 font-AlanSans">
              &#169; {year}{" "}
              <span>
                <a
                  href="https://drive.google.com/file/d/1QeLXljxDF873qf4nbaAUX_pmIE1Ypg8N/view?usp=drive_link"
                  className="font-JosefinSans hover:text-[#F0BB78] hover:underline hover:align-text-top"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ankit Dhakad
                </a>
              </span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
