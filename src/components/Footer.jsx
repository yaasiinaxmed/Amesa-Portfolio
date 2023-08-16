import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);
  return (
    <footer className="flex items-center justify-center flex-col gap-4 w-full p-6 bg-gray-200 dark:bg-slate-900 mt-7 ">
      <span
        id="text-sm"
        className=" text-xl text-[#222] dark:text-gray-300 mt-3"
      >
        © {year} Amesa Solutions . All rigths reserved
      </span>
      <ul className=" flex items-center justify-center gap-4 text-gray-400">
        <Link
          to="https://www.facebook.com/AmesaSolutions"
          className="hover:text-[#f5c32c] "
        >
          <FaFacebook />
        </Link>
        <Link to="https://wa.link/27nf32" className="hover:text-[#f5c32c] ">
          <FaWhatsapp />
        </Link>
        <Link
          to="https://twitter.com/AmesaSolutions"
          className="hover:text-[#f5c32c] "
        >
          <FaTwitter />
        </Link>
      </ul>
    </footer>
  );
}

export default Footer;
