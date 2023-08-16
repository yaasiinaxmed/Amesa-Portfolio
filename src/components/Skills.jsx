import React from "react";
import skilsImage from "../assets/skills.png";
import { BiLogoReact } from "react-icons/bi";
import { SiNodedotjs, SiTailwindcss } from "react-icons/si";
import { FaWordpressSimple } from "react-icons/fa";
import { PiFigmaLogo } from "react-icons/pi";
import { MdDesignServices } from "react-icons/md";
import Aos from "aos";
import { useEffect } from "react";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh({ duration: 2000 });
  }, []);

  const scrollAnimate = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;
    const boxs = document.querySelectorAll("#progress-bar");

    boxs.forEach((box) => {
      const top = box.getBoundingClientRect().top;

      if (triggerBottom < top) {
        box.classList.remove("show");
      } else {
        box.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", scrollAnimate);

  return (
    <div className="flex flex-col md:flex-row  items-center justify-around  mt-9">
      {/* skill progres */}
      <div className="flex flex-col gap-4  w-full md:w-auto px-8 md:px-0 ">
        <h2 className="text-center md:text-left text-3xl font-bold dark:text-white">
          SKILLS
        </h2>
        <div
          id="progress-bar"
          className="overflow-hidden w-full md:w-[70vmin] h-[6vmin] bg-white rounded  dark:bg-slate-800 flex items-center justify-between p-7 px-4 dark:text-white"
        >
          <div className="flex items-center gap-2 text-lg md:text-xl font-medium">
            <BiLogoReact className="text-2xl text-[#f5c32c] " />
            <h2>React Js</h2>
          </div>
          <span className="text-lg md:text-xl font-medium">100%</span>
        </div>

        <div
          id="progress-bar"
          className="overflow-hidden w-full md:w-[70vmin] h-[6vmin] bg-white rounded  dark:bg-slate-800 flex items-center justify-between p-7 px-4 dark:text-white"
        >
          <div className="flex items-center gap-2 text-lg md:text-xl font-medium">
            <SiTailwindcss className="text-2xl text-[#f5c32c] " />
            <h2>Tailwindcss</h2>
          </div>
          <span className="text-lg md:text-xl font-medium">96%</span>
        </div>

        <div
          id="progress-bar"
          className="overflow-hidden w-full md:w-[70vmin] h-[6vmin] bg-white rounded  dark:bg-slate-800 flex items-center justify-between p-7 px-4 dark:text-white"
        >
          <div className="flex items-center gap-2 text-lg md:text-xl font-medium">
            <SiNodedotjs className="text-2xl text-[#f5c32c] " />
            <h2>Node Js</h2>
          </div>
          <span className="text-lg md:text-xl font-medium">60%</span>
        </div>

        <div
          id="progress-bar"
          className="overflow-hidden w-full md:w-[70vmin] h-[6vmin] bg-white rounded  dark:bg-slate-800 flex items-center justify-between p-7 px-4 dark:text-white"
        >
          <div className="flex items-center gap-2 text-lg md:text-xl font-medium">
            <FaWordpressSimple className="text-2xl text-[#f5c32c] " />
            <h2>WordPress</h2>
          </div>
          <span className="text-lg md:text-xl font-medium">90%</span>
        </div>

        <div
          id="progress-bar"
          className="overflow-hidden w-full md:w-[70vmin] h-[6vmin] bg-white rounded  dark:bg-slate-800 flex items-center justify-between p-7 px-4 dark:text-white"
        >
          <div className="flex items-center gap-2 text-lg md:text-xl font-medium">
            <PiFigmaLogo className="text-2xl text-[#f5c32c] " />
            <h2>Figma UI/UX</h2>
          </div>
          <span className="text-lg md:text-xl font-medium">80%</span>
        </div>
      </div>
      {/* image */}
      <div className="flex items-center justify-center w-auto h-[430px]">
        <img
          src={skilsImage}
          alt="Skills image"
          className="w-full h-full"
          data-aos="fade-left"
        />
      </div>
    </div>
  );
}

export default Skills;
