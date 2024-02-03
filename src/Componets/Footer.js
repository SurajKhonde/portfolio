import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiHackerrank } from "react-icons/si";
import Img from "../image/newPICS.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-lime-400 mt-auto p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
          <img
            src={Img}
            alt="Profile"
            className="w-12 h-12 rounded-full mb-2 md:mb-0 md:mr-4"
          />
          <div className="flex flex-col md:flex-row items-center gap-2">
            <p className="font-bold text-2xl md:mr-2">Khonde.S.R</p>
            <p className="font-bold text-sm md:text-base">
              Mern Stack Full Stack Developer
              <span className="md:ml-2 text-pink-500">(JavaScript Developer)</span>
            </p>
          </div>
        </div>
        <div className="flex space-x-4 text-[22px] md:text-[29px] justify-center md:justify-end gap-6">
          <a
            href="https://github.com/SurajKhonde"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/surajrkhonde/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.hackerrank.com/profile/surajrkhonde"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <SiHackerrank />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
