import React from "react";
import ContactImg from "../assets/Contact us.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh({ duration: 2000 });
  }, []);

  return (
    <div className="px-6 md:px-[11%]  mt-1 md:mt-16 w-full h-[70vh] md:h-[80vh] bg-white dark:bg-[#09111f]">
      {/* title */}
      <div className="mx-auto lg:mb-8">
        <h1 className="font-bold text-3xl text-[#f5c32c] text-center">
          Contact <span className="text-slate-800 dark:text-white">us</span>
        </h1>
      </div>
      {/* content */}
      <div
        className="mt-4 md:mt-0  w-full md:w-auto flex flex-col md:flex-row  md:gap-16 items-center justify-center"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <div className="hidden md:flex mt-4 md:mt-0 md:w-[24rem]">
          <img
            src={ContactImg}
            alt="Ameesa Solutions"
            className="w-full"
            data-aos="fade-right"
          />
        </div>
        <div className="w-[100%] md:w-1/2 flex flex-col gap-4">
          <h2 className="text-xl font-medium text-slate-800 dark:text-gray-100">
            Get In Touch Us
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Name"
                id="input"
                className="bg-gray-200 dark:bg-slate-800 transition-all dark:text-white"
              />
              <label id="line-hover" htmlFor=""></label>
            </div>

            <div className="flex flex-col">
              <input
                type="email"
                placeholder="E-mail"
                id="input"
                className="bg-gray-200 dark:bg-slate-800 transition-all dark:text-white"
              />
              <label id="line-hover" htmlFor=""></label>
            </div>

            <div className="flex flex-col">
              <textarea
                placeholder="Message"
                id="input"
                className="h-[120px] bg-gray-200 dark:bg-slate-800 transition-all  dark:text-white"
              ></textarea>
              <label id="line-hover" htmlFor=""></label>
            </div>

            <button
              type="submit"
              id="btn"
              className="w-[9rem] bg-[#242D49] dark:bg-[#f5c32c] hover:bg-[#] text-xl text-white rounded-[4px]  shadow-[0px_4px_0px_0px_#191e2e] hover:shadow-[0px_-4px_0px_0px_#191e2e] dark:shadow-[0px_4px_0px_0px_#8d6b05] dark:hover:shadow-[0px_-4px_0px_0px_#8d6b05]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
