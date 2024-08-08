'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const Navbar = () => {
  const routing = useRouter();
  return (
    <div className="flex justify-between items-center px-5 pt-5 max-lg:pb-5 ">
        <div className="bebas-neue-regular cursor-pointer text-black" onClick={()=>routing.push("/")}>V Glow</div>
        <div className="flex items-center justify-start gap-4 text-gray-600 font-normal text-sm cursor-pointer">
          {/* <div>Usage</div> */}
          <div className="text-black active:scale-90 Line" onClick={()=> routing.push("/products")}>Products</div>
          <div className="text-black active:scale-90 Line" onClick={()=> routing.push("/about")}>About</div>
          <div className="text-black active:scale-90 Line">Testimonials</div>
          <div className="text-black active:scale-90 Line"><Link href="login">Login</Link> </div>
        </div>
      </div>
  )
}

export default Navbar
