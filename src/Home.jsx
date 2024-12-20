import React from "react";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        data-aos="zoom-out"
        data-aos-delay="100"
        data-aos-duration="2700"
        className=" h-[80%] lg:flex lg:flex-row w-full justify-between  items-center pl-[20px] sm:flex sm:flex-col sm:overflow-hidden sm:w-full sm:gap-7 xxl:pl-14 "
      >
        <div className="flex flex-col  justify-between lg:gap-8 lg:pl-[120px] sm:gap-8 sm:pt-7 sm:w-[100%] sm:p-[px] ">
          <h3 className="text-[#fff] text-[1.5rem] md:text-[2rem]">Hello,</h3>

          <h1 className="text-[#fff] sm:text-[35px] md:text-[45px] ">
            I'M Afaq
          </h1>

          <div className="lg:text-[1rem] sm:text-[11px] font-bold text-[aqua] sm:w-[100%] md:text-[1.5rem]">
            <TypeAnimation
              sequence={[
                "Full Stack Web Developer", // Type the text
                1000, // Wait for 1 second
                "", // Clear the text (this triggers the reverse animation effect)
                1000, // Wait for 1 second
              ]}
              wrapper="span"
              speed={50} // Typing and deleting speed
              deletionSpeed={50} // Speed of the reverse effect
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity} // Keep repeating the sequence
            />
          </div>

          {/* <div className="sm:">
            <button class="button">
              <a href="./Afaq Resume.pdf" download="My Resume.pdf">
                My Resume
              </a>
            </button>
          </div> */}
        </div>
        <div className="sm:w-[100%] sm:h-[full] md:pl-[100px]   ">
          <img
            src="./Images/AFAQ.jpg"
            alt=""
            className="lg:pl-11 xxl:pl-[210px]"
          />
        </div>
      </section>
    </>
  );
}

export default Home;
