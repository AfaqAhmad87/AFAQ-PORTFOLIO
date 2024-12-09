import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Aboutme() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <main className="lg:flex lg:flex-col ">
        <section className="lg:w-[100vw] lg:h-[100%]  lg:flex lg:flex-row  lg:justify-around  lg:items-center sm:flex sm:flex-col-reverse sm:gap-10 ">
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="2700"
            className=""
          >
            <img src="./Images/AFAQ.jpg" alt="" className="" />
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="2700"
            className="lg:w-[40%] lg:font-bold text-[#fff] lg:flex lg:flex-col lg:gap-5 lg:justify-between lg:h-[100%]  lg:pt-9  sm:pl-3 "
          >
            <div className="lg:flex sm:flex sm:flex-row gap-1 ">
              <h1>About</h1>
              <h1 className="lg:ml-[10px] text-[#39bda7] "> Me</h1>
            </div>

            <div>
              <p className="lg:w-[100%] text-[#fff] lg:text-justify sm:text-justify sm:text[16px] sm:pr-3 lg:text-[15px] md:text-[24px]">
              Experienced with all stages of the software development lifecycle for dynamic and robust web applications. Proficient in both front-end and back-end development, leveraging technologies such as HTML5, CSS, JavaScript, Tailwind CSS, ReactJS, and Laravel. Skilled in database management with MySQL and adept at integrating modern UI/UX principles with secure, scalable backend solutions. Possess a strong background in project management and customer relations, ensuring delivery of high-quality software aligned with client needs.
              </p>
            </div>

            <div className="">
              <button class="button"><a href="https://zarqsolution.com/our-team/">Learn about me</a></button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Aboutme;
