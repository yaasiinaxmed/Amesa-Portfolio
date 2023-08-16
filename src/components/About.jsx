import React from "react";
import aboutImg from "../assets/about.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh({ duration: 2000 });
  }, []);

  return (
    <div className="px-6 md:px-[11%] mt-16 w-full h-[100vh] md:h-[70vh] bg-white dark:bg-[#09111f]">
      <div className="flex flex-col md:flex-row  md:gap-16 items-center justify-center  md:justify-between">
        <div className="w-[80%] mt-4 md:mt-0 md:w-[120rem]">
          <img
            src={aboutImg}
            alt="Ameesa Solutions"
            className="w-full"
            data-aos="fade-right"
          />
        </div>
        <div
          className="text-center md:text-left flex flex-col gap-4 items-center md:items-start "
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <h2 className="font-bold text-3xl text-[#242D49] dark:text-white">
            <span className="text-[#f5c32c]">About </span> Us
          </h2>
          <p className="text-center md:text-left  md:text-2xl break-words break-before-left dark:text-white">
            We have been building websites for more than a decade. From small
            businesses to large corporations, and across industries and markets,
            our creative team is determined to unleash innovative and effective
            designs that boost your brand and grow your business to achieve your
            goals.
          </p>
          <button
            id="btn"
            className="w-[9rem] bg-[#242D49] dark:bg-[#f5c32c] hover:bg-[#] text-xl text-white rounded-[4px]  shadow-[0px_4px_0px_0px_#191e2e] hover:shadow-[0px_-4px_0px_0px_#191e2e] dark:shadow-[0px_4px_0px_0px_#8d6b05] dark:hover:shadow-[0px_-4px_0px_0px_#8d6b05]"
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
