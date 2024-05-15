"use client";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { motion } from "framer-motion"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      // Global settings
    });
  }, []);
  return (
    <main className="scrollbar-hide overflow-x-hidden" style={{scrollbarWidth:0, scrollbarColor:"white"}}>
      <div className="flex justify-between items-center p-5 px-5  ">
        <div className="bebas-neue-regular cursor-pointer">V Glow</div>
        <div className="flex items-center justify-start gap-4 text-gray-600 font-normal text-sm cursor-pointer">
          {/* <div>Usage</div> */}
          <div className="active:scale-90 Line">About</div>
          <div className="active:scale-90 Line">Testimonials</div>
          <div className="active:scale-90 Line">Whole Sale</div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 xl:gap-5 ">
        <div data-aos="fade-up-right" className=" grid max-lg:gap-5 max-md:py-[2rem] ">
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center   gap-2">
              <p className=" text-6xl font-bold">Glow Your</p>
              <p className=" text-6xl font-bold ">Face With</p>
              <p className=" text-6xl font-bold text-gray-600 bebas-neue-regular2">V Glow</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col justify-center items-center px-2">
              <p className="truncate-2 inline-block">
                &quot;The best moisturizer that I have used so far. This is a
                great moisturizer. It Moisturizes the skin very well.&quot;
              </p>
            </div>
            <div className=" flex justify-center items-end">
              <div className="flex gap-1  justify-center items-center mt-2">
                <p>
                  <IoIosStar />
                </p>
                <p>
                  <IoIosStar />
                </p>
                <p>
                  <IoIosStar />
                </p>
                <p>
                  <IoIosStar />
                </p>
                <p className="text-sm pl-2">206 reviews</p>
              </div>
            </div>
          </div>

          <div className="flex  justify-center items-start ">
            <div className="border border-gray-800 p-3 rounded-md cursor-pointer active:scale-95">
              <p className="">Order Now</p>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-out-up"
          className="max-xl:hidden flex justify-center items-center"
        >
          <img
            src="/product.png"
            className="h-[90%] flex justify-center items-center"
            alt=""
          />
        </div>

        <div data-aos="fade-down-left" className="h-[80svh]">
          <div className="h-[100%] flex justify-center items-center">
            <img
              className="opacity-40  h-[80%]"
              src="/cream2.png"
              alt="product image"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-between items-center">
            <div className="flex flex-col justify-center   h-full gap-2">
              <p className=" text-4xl font-bold">{`Let's Fix your skin`}</p>
            </div>
            <div className="flex flex-col justify-center   gap-2">
              <p>best for</p>
              <p className=" text-6xl font-bold">Whitening</p>
              <p className=" text-6xl font-bold ">Anne marks</p>
              <p className=" text-6xl font-bold  ">Dark Spotes</p>
            </div>
            <div className="flex items-end pb-5 justify-center   h-full gap-5 ">
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
    </main>
  );
}
