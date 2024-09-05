"use client";
import { IoIosStar } from "react-icons/io";
import { LiaStarHalfAltSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import Products from "@/components/products/Products";

export default function Home() {
  useEffect(() => {
    AOS.init({
      // Global settings
    });
  }, []);
  return (
    <main
      className="scrollbar-hide  bg-transparent  "
      style={{ scrollbarWidth: 0, scrollbarColor: "white" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 xl:gap-5  h-[85dvh]">
        <div
          data-aos="fade-up-right"
          className=" grid max-lg:gap-5 max-md:py-[2rem] "
        >
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center   gap-2">
              <p className=" text-6xl font-bold">Glow Your</p>
              <p className=" text-6xl font-bold ">Face With</p>
              <p className=" text-6xl font-bold text-gray-700 bebas-neue-regular2">
                V Glow
              </p>
            </div>
          </div>

          <div>
            <div className="flex flex-col justify-center items-center px-2">
              <p className="truncate-2 inline-block">
                &quot;Within just 10 days of using this great product, my face
                began to glow and brighten. Now, I am able to maintain that
                radiant look effortlessly.&quot;
              </p>
            </div>
            <div className=" flex justify-center items-center gap-2 mt-2">
              <div className="flex gap-1  justify-center items-center ">
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
                <p>
                  <LiaStarHalfAltSolid />
                </p>
              </div>
              <div className="">
                <p className="text-sm">206 reviews</p>
              </div>
            </div>
          </div>

          <div className="flex  justify-center items-start ">
            <div className="border border-gray-800 p-3 rounded-md cursor-pointer active:scale-95">
              <p className="">
                <Link href="/products">Shop Now</Link>
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-out-up"
          className=" flex justify-center items-center "
        >
          <img
            src="/wood&orange.png"
            className=" flex justify-center items-center p-2   rounded-xl"
            alt=""
          />
        </div>

        <div
          data-aos="fade-down-right"
          className="max-xl:pb-[5rem] flex justify-center lg:col-span-2 xl:col-span-1 max-lg:mt-5"
        >
          {/* <div className="h-[100%] w-[70%] flex justify-center items-center ">
            <img
              className="opacity-30 rotate-12 "
              src="/vglow.png"
              alt="product image"
            />
          </div> */}
          <div className=" flex flex-col justify-between items-center  ">
            <div className=" flex flex-col justify-center   h-1/2 gap-2">
              <p className=" text-4xl font-bold">{`Let's Fix your skin`}</p>
            </div>
            <div className="flex flex-col justify-center  h-full gap-2">
              <p>best for</p>
              <p className=" text-6xl font-bold">Brightening</p>
              <p className=" text-6xl font-bold ">Acne Marks</p>
              <p className=" text-6xl font-bold  ">Dark Spotes</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="p-5 bg-pink-400">
        <Products />
      </div> */}
      <div className="p-3 bg-white fixed bottom-0  w-full">
        <Footer />
      </div>
    </main>
  );
}
