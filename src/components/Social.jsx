import React from "react";
import { FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";
import Aos from "aos";
import { useEffect } from "react";

function Social() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh({ duration: 2000 });
  }, []);

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center mb-14">
      {/* WhatsApp */}
      <div
        data-aos="fade-right"
        className="border dark:border-slate-950 w-[190px] flex flex-col gap-1 items-center justify-center dark:bg-slate-800 bg-white shadow-xl rounded-lg p-6"
      >
        <a
          href="https://wa.link/27nf32"
          target="__blank"
          className="text-3xl text-[#f5c32c] "
        >
          <FaWhatsapp />
        </a>
        <span className="text-sm font-medium text-[#f5c32c]">WhatsApp</span>
        <span className="dark:text-white text-slate-800">+254 743 537705</span>
      </div>
      {/* Facebook */}
      <div
        data-aos="fade-up"
        className="border dark:border-slate-950 w-[190px] flex flex-col gap-1 items-center justify-center dark:bg-slate-800 bg-white shadow-xl rounded-lg p-6"
      >
        <a
          href="https://www.facebook.com/AmesaSolutions"
          target="__blank"
          className="text-3xl text-[#f5c32c] "
        >
          <FaFacebook />
        </a>
        <span className="text-sm font-medium text-[#f5c32c]">Facebook</span>
        <span className="dark:text-white text-slate-800">Amesa Solutions</span>
      </div>
      {/* Twitter */}
      <div
        data-aos="fade-left"
        className="border dark:border-slate-950 w-[190px] flex flex-col gap-1 items-center justify-center dark:bg-slate-800 bg-white shadow-xl rounded-lg p-6"
      >
        <a
          href="https://twitter.com/AmesaSolutions"
          target="__blank"
          className="text-3xl text-[#f5c32c] "
        >
          <FaTwitter />
        </a>
        <span className="text-sm font-medium text-[#f5c32c]">Twitter</span>
        <span className="dark:text-white text-slate-800">Amesa Solutions</span>
      </div>
    </div>
  );
}

export default Social;
