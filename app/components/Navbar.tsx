"use client"
import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <nav className="  top-0 left-0 right-0 z-10 mx-auto lg:w-[95%] ">
        <div className="flex container lg:py-4 flex-wrap  justify-between mx-auto px-8 py-4">
            <Link href={"/"} className="w-[5%] text-[1rem] leading-4 md:text-[1rem] text-white font-semibold ">
                
            </Link>
         <div className=" mx-3 ">   
            <Link href="#projects" className='text-[#727171] font-semibold mr-2  '>Work</Link>
            <a className='text-[#ED9911] mx-2'  href="/myresume.pdf">Resume</a>
        </div>
        </div>

    </nav>
  )
}

export default Navbar;
