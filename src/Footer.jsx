import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { FaTiktok } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <footer className=" bg-slate-950 lg:flex lg:flex-row  lg:justify-between  lg:font-[1rem]  w-[100%] items-center sm:flex sm:flex-col sm:justify-between">
        <span className="lg:text-slate-600 lg:pl-10 sm:pt-3 md:text-[2rem] lg:text-[1rem] xxl:text-[1.5rem] xxl:pl-16">
          Copyright@ 2024 afaqahmad alright recieved
        </span>
        <div className="text-[#fff] bg-slate-950 lg:flex lg:flex-row  lg:pr-10 lg:gap-2 sm:flex sm:flex-row sm:gap-1 md:gap-14 xxl:gap-[50px] xxl:pr-14 ">
          <a href="https://www.linkedin.com/in/afaq-ahmad-953409296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            {" "}
            <FaLinkedin
              className="w-8 xxl:w-10
          text-[aqua]"
            />
          </a>

          <a href="https://github.com/AfaqAhmad87">
            {" "}
            <FaGithubSquare
              className="w-8 xxl:w-10
          text-[aqua]"
            />
          </a>
          <a href="https://wa.me/03330782025">
            {" "}
            <FaWhatsappSquare
              className="w-8 xxl:w-10
          text-[aqua]"
            />
          </a>
          {/* 
          <FaWhatsappSquare
            className="w-8
          text-[aqua]"
          /> */}
          <FaFacebook
            className="w-8 xxl:w-10
          text-[aqua]"
          />

          <FaTiktok
            className="w-8 xxl:w-10
         text-[aqua]"
          />
        </div>
      </footer>
    </>
  );
}

export default Footer;
