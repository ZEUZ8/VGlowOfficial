export default function Home() {
  return (
    <main className="">
      <div className="flex justify-between items-center m-5 px-5">
        <div className="bebas-neue-regular ">V Glow</div>
        <div className="flex items-center justify-start gap-4 text-gray-600 font-normal text-sm cursor-pointer">
          {/* <div>Usage</div> */}
          <div className="active:scale-90">About</div>
          <div className="active:scale-90">Testimonials</div>
          <div className="active:scale-90">Whole Sale</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 h-full pl-2">
        <div className=" grid h-[80dvh]">
          <div className="">
            <div className="flex flex-col justify-center h-full gap-2">
              <p className=" text-6xl font-bold">Glow Your</p>
              <p className=" text-6xl font-bold ">Face With</p>
              <p className=" text-6xl font-bold  ">V Glow</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start">
            <p>"ajsdflajsdlfalsd tehla dsflajsdf the aldjfaldhtel a"</p>
            <p>sub sura </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="border border-red-400 p-3 rounded-md">
              <p>Order Now</p>
            </div>
          </div>
        </div>
        <div className="">
          <img src="/product.png" alt="" />
        </div>
        <div className=" border ">sin</div>
      </div>
    </main>
  );
}
