import React from "react";
import heroImage from "../assets/hero.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    Aos.refresh({ duration: 2000 });
  }, []);

  return (
    <div className="mt-14 px-6 md:px-[11%]  w-full h-[90vh] md:h-[80vh] bg-white dark:bg-[#09111f] flex flex-col-reverse md:flex-row items-center justify-center  md:justify-between">
          <div
        className="flex md:items-start gap-3 flex-col items-center "
        // data-aos="fade-up"
      >
        <h2
          id="text-3xl"
          className="text-4xl md:text-5xl  text-center  md:text-left font-bold text-[#f5c32c]"
        >
          Do you need a website?
        </h2>
        <h3
          id="text-3xl"
          className="text-5xl md:text-6xl  font-bold text-[#242D49] text-center md:text-left  dark:text-white"
        >
          Start Your Dream <br /> Website!
        </h3>
        <p className=" md:text-left text-center text-1xl text-[#929292]">
          We have been building website for more than a decade.
        </p>
        <button
          id="btn"
          className="md:mt-4  w-[12rem] bg-[#242D49] dark:bg-[#f5c32c] hover:bg-[#] text-xl text-white rounded-[4px]  shadow-[0px_4px_0px_0px_#191e2e] hover:shadow-[0px_-4px_0px_0px_#191e2e] dark:shadow-[0px_4px_0px_0px_#8d6b05] dark:hover:shadow-[0px_-4px_0px_0px_#8d6b05]"
        >
          Contact us
        </button>
      </div>
      <div id="w-18rem" className="md:w-[36rem] w-[20rem]">
        <img
          src={heroImage}
          alt="Ameesa Solutions"
          className="w-full"
          // data-aos="fade-up"
        />
      </div>
    </div>
  );
}

export default Hero;
