'use client'
import React from 'react'
import { useRouter } from 'next/navigation';


const Navbar = () => {
  const routing = useRouter();
  return (
    <div className="flex justify-between items-center px-5 pt-5 max-lg:pb-5 ">
        <div className="bebas-neue-regular cursor-pointer text-black" onClick={()=>routing.push("/")}>V Glow</div>
        <div className="flex items-center justify-start gap-4 text-gray-600 font-normal text-sm cursor-pointer">
          {/* <div>Usage</div> */}
          <div className="active:scale-90 Line" onClick={()=> routing.push("/about")}>About</div>
          <div className="active:scale-90 Line">Testimonials</div>
          <div className="active:scale-90 Line" onClick={()=> routing.push("/wholesale")}>Whole Sale</div>
        </div>
      </div>
  )
}

export default Navbar
