import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="xl:px-5">
      <div className="grid grid-cols-3">
        <div className="col-span-1 flex justify-start items-center gap-1">
          <p className="">
            <IoIosMail />
          </p>
          <p className="text-xs text-gray-600">
            <a href="">vglowfacecream@gmail.com</a>
          </p>
        </div>
        <div className="max-sm:text-white col-span-1 flex justify-center items-center max-md:justify-end">
          <p className="text-gray-600 text-xs">Copyright@VGlow</p>
        </div>

        <div className=" col-span-1  flex justify-end">
          <div className="flex items-end  justify-center   h-full gap-5 ">
            <p className="flex justify-center items-center cursor-pointer max-md:text-xs text-xl hover:scale-110">
              <Link href="https://x.com/v_glow50130">
                <BsTwitterX />
              </Link>
            </p>
            <p className="flex justify-center items-center cursor-pointer max-md:text-xs text-xl hover:scale-y-110">
              <Link href="https://www.instagram.com/v.glow.in/?next=%2F">
                <FaInstagram />
              </Link>
            </p>
            <p className="flex justify-center items-center cursor-pointer max-md:text-xs text-xl hover:scale-y-110">
              <Link href="https://www.facebook.com/profile.php?id=61559868243751">
                <FaFacebook />
              </Link>
            </p>
            <p className="flex justify-center items-center cursor-pointer max-md:text-xs text-xl hover:scale-y-110">
              {/* <a href="https//wa.me/917306131184">
                <FaWhatsapp />
              </a> */}
              <a
                rel="nofollow"
                class="share-whatsapp"
                href="https://wa.me/917306131184?text=Hello%20I%20would%20like%20to%20know%20more%20about%20VGlow"
                data-action="share/whatsapp/share"
                title="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
