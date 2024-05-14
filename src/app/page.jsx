'use client'
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
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
    <main className="">
      <div className="flex justify-between items-center m-5 px-5">
        <div className="bebas-neue-regular cursor-pointer">V Glow</div>
        <div className="flex items-center justify-start gap-4 text-gray-600 font-normal text-sm cursor-pointer">
          {/* <div>Usage</div> */}
          <div className="active:scale-90 Line">About</div>
          <div className="active:scale-90 Line">Testimonials</div>
          <div className="active:scale-90 Line">Whole Sale</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 h-full pl-2">
        <div data-aos="fade-up-right" className=" grid h-[80dvh] ">
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center   h-full gap-2">
              <p className=" text-6xl font-bold">Glow Your</p>
              <p className=" text-6xl font-bold ">Face With</p>
              <p className=" text-6xl font-bold  ">V Glow</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center px-2">
            <p className="truncate-2 inline-block">
              "The best moisturizer that I have used so far This is a great
              moisturizer. It Moisturizes the skin very well. "
            </p>
          </div>

          <div className="flex  justify-center items-center">
            <div className="border border-gray-800 p-3 rounded-md cursor-pointer active:scale-95">
              <p className="">Order Now</p>
            </div>
          </div>
        </div>
        <div data-aos="zoom-out-up" className="">
          <img src="/product.png" alt="" />
        </div>
        <div data-aos="fade-down-left" className="relative">
          <img className="opacity-40 " src="/cream2.png" alt="product image" />

          <div className="absolute inset-0 flex flex-col justify-between items-center">
            <div className="flex flex-col justify-center   h-full gap-2">
              <p className=" text-4xl font-bold">Let's Fix your skin</p>
            </div>
            <div className="flex flex-col justify-center   h-full gap-2">
              <p>best for</p>
              <p className=" text-6xl font-bold">Whitening</p>
              <p className=" text-6xl font-bold ">Anne marks</p>
              <p className=" text-6xl font-bold  ">Dark Spotes</p>
            </div>
            <div className="flex items-end mb-5 justify-center   h-full gap-5 ">
              <p className="flex justify-center items-center cursor-pointer text-xl">
                <BsTwitterX />
              </p>
              <p className="flex justify-center items-center cursor-pointer text-xl">
                <FaInstagram />
              </p>
              <p className="flex justify-center items-center cursor-pointer text-xl">
                <FaFacebook />
              </p>
              <p className="flex justify-center items-center cursor-pointer text-xl">
                <FaWhatsapp />
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
