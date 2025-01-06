import Link from "next/link";
import React from "react";
import { MdArrowForward } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="grid max-sm:grid-cols-1 grid-cols-2  lg:grid-cols-4 gap-5 mt-5 cursor-pointer">
        <Link href="/departmentreport">
          <div className="shadow-special dark:shadow-special2 rounded-xl p-4 grid grid-cols-5 items-center text-center">
            <div className="col-span-4  max-md:col-span-3 max-md:col-start-2  mx-auto">
              <p className="text-[#F7A500]">Sales Man Report</p>
            </div>
            <div className="grid justify-self-end items-center col-start-5 col-span-1">
              <p className="text-[#F7A500]">
                <MdArrowForward />
              </p>
            </div>
          </div>
        </Link>

        <Link href="/departmentreport">
          <div className="shadow-special dark:shadow-special2 rounded-xl p-4 grid grid-cols-5 items-center">
            <div className="col-span-4 max-md:col-span-3 max-md:col-start-2 mx-auto">
              <p className="text-[#F77300]">Sales Man Report</p>
            </div>
            <div className="grid justify-self-end items-center col-start-5 col-span-1">
              <p className="text-[#F77300]">
                <MdArrowForward />
              </p>
            </div>
          </div>
        </Link>

        <Link href="/counter">
          <div className="shadow-special dark:shadow-special2 rounded-xl p-4 grid grid-cols-5 items-center">
            <div className="col-span-4 max-md:col-span-3 max-md:col-start-2 mx-auto">
              <p className="text-[#F70031]">Counter Report</p>
            </div>
            <div className="grid justify-self-end items-center col-start-5 col-span-1">
              <p className="text-[#F70031]">
                <MdArrowForward />
              </p>
            </div>
          </div>
        </Link>

        <Link href="/departmentreport">
          <div className="shadow-special dark:shadow-special2 rounded-xl p-4 grid grid-cols-5 items-center ">
            <div className="col-span-4 max-md:col-span-3 max-md:col-start-2 mx-auto">
              <p className="text-[#9410A5]">Department Report</p>
            </div>
            <div className="grid justify-self-end items-center col-start-5 col-span-1">
              <p className="text-[#9410A5]">
                <MdArrowForward />
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Footer;
