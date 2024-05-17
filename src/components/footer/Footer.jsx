import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="md:px-5">
      <div className="grid max-md:grid-cols-2 grid-cols-3">
        <div className="col-span-1 flex justify-start items-center gap-1">
          <p className="">
            <IoIosMail />
          </p>
          <p className="text-xs text-gray-600">
            <a href="">vglowfacecream@gmail.com</a>
          </p>
        </div>
        <div className="col-span-1 flex justify-center max-md:justify-end">
          <p className="text-gray-600 text-xs">Copyright@VGlow</p>
        </div>

        <div className="col-span-1 max-md:col-span-2 flex justify-center max-md:pt-2 md:justify-end">
          <div className="flex items-end  justify-center   h-full gap-5 ">
            <p className="flex justify-center items-center cursor-pointer text-xl hover:scale-110">
              <BsTwitterX />
            </p>
            <p className="flex justify-center items-center cursor-pointer text-xl hover:scale-y-110">
              <FaInstagram />
            </p>
            <p className="flex justify-center items-center cursor-pointer text-xl hover:scale-y-110">
              <FaFacebook />
            </p>
            <p className="flex justify-center items-center cursor-pointer text-xl hover:scale-y-110">
              <FaWhatsapp />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;