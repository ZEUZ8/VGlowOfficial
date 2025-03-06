"use client";
import React from "react";
import Cards from "@/components/admin/dashboard/card/Card";
import DoughnutChart from "@/components/admin/dashboard/doughnutChart/DoughnutChart";
import Footer from "@/components/admin/dashboard/footer/Footer";
import ApexArea from "@/components/admin/dashboard/apexArea/ApexArea";

const Page = () => {
  return (
    <div className="p-2 px-4 w-full">
      <div className="py-2 t-4 border rounded-lg texgr0">sinan</div>
      <div className="grid ">
        <div className="grid  xl:grid-cols-2 gap-4 ">
          <div className="grid max-lg:grid-rows-1 grid-rows-2 gap-4  py-[.3rem]">
            <div className="row-span-1 grid grid-cols-12   gap-4">
              <div className="col-span-12 grid sm:grid-cols-2 lg:col-span-8 max-sm:text-center gap-4 max-w-[100%]  ">
                <div className="max-w-[100%] ">
                  <Cards
                    title={"Today Sale"}
                    amount={30000.0}
                    percentage={8}
                    color={"#148EFF"}
                  />
                </div>
                <div className="max-w-[100%] ">
                  <Cards
                    title={"Purchase"}
                    amount={30000.0}
                    percentage={8}
                    color={"#9410A5"}
                  />
                </div>
                <div className="max-w-[100%] ">
                  <Cards
                    title={"Cash In Hand"}
                    amount={30000.0}
                    i={2}
                    color={"#FF005A"}
                  />
                </div>
                <div className="max-w-[100%] ">
                  <Cards
                    title={"Net Profit"}
                    amount={30000.0}
                    color={"#F76271"}
                  />
                </div>
              </div>

              <div className="col-span-12 lg:col-span-4  ">
                <div className="grid sm:max-lg:grid-cols-6  gap-5">
                  <div className="sm:max-lg:col-span-2  grid max-sm:grid-cols-2 lg:grid-cols-2  gap-5  text-start ">
                    <div className="rounded-md shadow-special dark:shadow-special2 grid gap-3 p-3 font-medium text-black dark:text-white">
                      <p>FOC</p>
                      <p>09</p>
                    </div>
                    <div className="rounded-md shadow-special dark:shadow-special2 grid gap-3 p-3 font-medium text-black dark:text-white">
                      <p>Bills</p>
                      <p>08</p>
                    </div>
                  </div>

                  <div className=" sm:max-lg:col-span-4  grid shadow-special dark:shadow-special2 rounded-lg  pt-1">
                    <div className="p-5 grid gap-2">
                      <div className="text-sm font-medium ">Sales Return</div>
                      <p className="text-lg text-[#F7A500] font-normal ">
                        {" "}
                        30000.000{" "}
                        <span className="text-sm font-medium text-black dark:text-white dark:shadow-darkTheme">
                          AED
                        </span>
                      </p>
                    </div>
                    <div className="p-5 grid gap-2">
                      <div className="text-sm font-medium">Purchase Return</div>
                      <p className="text-lg font-normal text-[#FF4D00]">
                        {" "}
                        30000.000{" "}
                        <span className="text-sm font-medium text-black dark:text-white">
                          AED
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-1 ">
              <DoughnutChart />
            </div>
          </div>

          <div className="grid lg:grid-rows-7 gap-2 pt-0  items-center ">
            <div className="shadow-special  dark:shadow-special2 row-span-4 rounded-lg ">
              <div className="p-5 ">
                <ApexArea />
              </div>
            </div>

            <div className="row-span-3 font-medium max-lg:py-3 max-sm:text-center">
              <div className=" grid grid-cols-5 gap-4 items-center">
                <div className=" max-sm:col-span-5  max-md:col-span-2 md:col-span-5 lg:col-span-2 ">
                  <Cards
                    title={"Net Profit"}
                    amount={30000.0}
                    color={"#656B93"}
                  />
                </div>

                <div className="max-sm:col-span-5 max-md:col-span-3 md:col-span-4 lg:col-span-2 ">
                  <Cards
                    title={"Net Profit"}
                    amount={30000.0}
                    color={"#877695"}
                  />
                </div>

                <div className="max-sm:row-start-5 max-md:row-start-3 max-md:col-span-3 max-md:justify-center max-md:text-center  lg:col-span-1  rounded-lg shadow-special dark:shadow-special2 h-[100%] grid p-4 ">
                  {/* <div className="grid gap-4 "> */}
                  <h1 className="text-black dark:text-white">Purchase</h1>
                  <p className="text-2xl text-[#E85A72] grid items-center">
                    08
                  </p>
                  {/* </div> */}
                </div>

                <div className="max-sm:col-span-5 max-md:col-span-3 md:col-span-5  lg:col-span-2 ">
                  <Cards
                    title={"Net Profit"}
                    amount={30000.0}
                    color={"#8946FF"}
                  />
                </div>

                <div className="max-sm:col-span-5 max-md:col-span-2 md:col-span-4 lg:col-span-2  ">
                  <Cards
                    title={"Net Profit"}
                    amount={30000.0}
                    color={"#803CFF"}
                  />
                </div>

                <div className="max-sm:row-start-5  max-md:row-start-3 max-md:col-span-2  max-md:justify-center max-md:text-center  col-span-1  rounded-lg shadow-special dark:shadow-special2 h-[100%] grid p-4 ">
                  <h1 className="text-black dark:text-white">Shift</h1>
                  <p className="text-2xl text-[#D820FF] grid items-center">
                    09
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Page;
