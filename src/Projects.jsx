import React from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="lg:w-[80%] m-auto lg:grid lg:grid-cols-3 lg: gap-4 lg: pr-5 sm:grid sm:grid-cols-1 sm:w-[90%] sm:pl-2 sm:m-auto"
      data-aos="zoom-out"
      data-aos-delay="100"
      data-aos-duration="2700"
    >
      <div data-aos="flip-left" data-aos-delay="100" data-aos-duration="2700">
        {" "}
        <a href="https://fatehtour.com/">
          <div
            id="border"
            className="xl:w-[75%] xl:h-[90%] sm:w-[100%] flex flex-col justify-center items-center"
          >
            <img
              src="./Images/sss.png"
              alt=""
              class="image"
              className="xl:pt-2"
            />
            <h1 className="text-[white] font-semibold text-xl flex justify-center xl:pt-3 xl:pb-3 ">
              {" "}
              Fateh-Al-Mustaqbil
            </h1>
          </div>
        </a>
      </div>

      <div data-aos="flip-left" data-aos-delay="100" data-aos-duration="2700">
        {" "}
        <a href="https://alsn.app/">
          <div
            id="border"
            className="lg:w-[65%] lg:h-[87%] flex flex-col justify-center items-center"
          >
            <img
              src="./Images/alsn.png"
              alt=""
              class="image"
              className="lg:h-[120px] xll:h-[160px]"
            />
            <h1 className="text-[white] font-semibold text-xl flex justify-center lg:pt-1 xxl:">
              {" "}
              Alsn
            </h1>
          </div>
        </a>
      </div>

      <div data-aos="flip-left" data-aos-delay="100" data-aos-duration="2700">
        {" "}
        <a href="https://jmmtech.sa/">
          <div
            id="border"
            className="xl:w-[75%] xl:h-[88%] xxl:w-[75%] xxl:h-[95%] "
          >
            <img src="./Images/jmm.png" alt="" class="image" />
            <h1 className="text-[white] font-semibold text-xl flex justify-center xl:pt-3">
              {" "}
              JMM Technologies
            </h1>
          </div>
        </a>
      </div>
      <div data-aos="flip-left" data-aos-delay="100" data-aos-duration="2700">
        {" "}
        <a href="https://shopingcart-redux.vercel.app/">
          <div id="border" className="xl:w-[75%] xl:h-[80%] xxl:h-[90%] ">
            <img src="./Images/ecomerce.png" alt="" class="image" />
            <h1 className="text-[white] font-semibold text-xl flex justify-center  ">
              {" "}
              E-commerce Store
            </h1>
          </div>
        </a>
      </div>
      <div data-aos="flip-left" data-aos-delay="100" data-aos-duration="2700">
        {" "}
        <a href="https://weather-gamma-khaki.vercel.app/">
          <div id="border" className="xl:w-[65%] xl:h-[80%] xxl:h-[90%] ">
            <img
              src="./Images/weather.png"
              alt=""
              class="image"
              className="xl:h-[110px] xl:w-[200px] xxl:w-[290px] xxl:h-[160px]"
            />
            <h1 className="text-[white] font-semibold text-xl flex justify-center pt-1">
              {" "}
              Weather App
            </h1>
          </div>
        </a>
      </div>
      <div data-aos="flip-left" data-aos-delay="100" data-aos-duration="2700">
        {" "}
        <a href="country-project-wheat.vercel.app">
          <div id="border" className="xl:w-[75%] xl:h-[80%] xxl:h-[86%] ">
            <img
              src="./Images/country.png"
              alt=""
              class="image"
              className="xl:h-[120px] xl:w-[330px] xxl:h-[160px] xxl:w-[370px]"
            />
            <h1 className="text-[white] font-semibold text-xl   xl:pb-7 xxl:flex xxl:justify-center xxl:items-center xl:flex xl:justify-center xl:items-center sm: flex sm: justify-center ">
              {" "}
              Country Detail
            </h1>
          </div>
        </a>
      </div>
      <div>
        {" "}
        <a href="https://contact-manager-chi-six.vercel.app/">
          <div id="border" className="xl:w-[75%] xl:h-[95%] sm:w-[100%] ">
            <img
              src="./Images/contact.png"
              alt=""
              class="image"
              className="lg:w-[330px] xl:h-[130px] xll:w-[320px]"
            />
            <h1 className="text-[white] font-semibold text-xl flex justify-center pt-2 pb-1">
              {" "}
              contact Manager
            </h1>
          </div>
        </a>
      </div>
      <div>
        {" "}
        <a href="https://dicegame-fqxd4wfez-afaq-ahmads-projects-01992365.vercel.app/">
          <div id="border" className="xl:w-[65%] xl:h-[90%] sm:w-[100%]">
            <img
              src="./Images/dice.png"
              alt=""
              class="image"
              className="h-[130px] xxl:w-[350px] sm:w-[100%]"
            />
            <h1 className="text-[white] font-semibold text-xl flex justify-center pt-1 pb-3">
              {" "}
              Dice Game
            </h1>
          </div>
        </a>
      </div>

      <div>
        {" "}
        <a href="https://news-web-pwze4kghp-afaq-ahmads-projects-01992365.vercel.app/">
          <div id="border" className="xl:w-[75%] xl:h-[90%] sm:w-[100%] ">
            <img
              src="./Images/news.png"
              alt=""
              class="image"
              className="xl:h-[130px] xxl:w-[335px] sm:w-[100%]"
            />
            <h1 className="text-[white] font-semibold text-xl flex justify-center pt-1">
              {" "}
              News App
            </h1>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
