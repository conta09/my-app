import React from 'react';
import { FaCircle } from "react-icons/fa";
import { MdOutlineBookmarks } from "react-icons/md";
import { IoCopyOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className='flex h-[50vh]'>
      <div className="w-[60%] ml-20 pt-4 my-auto">
        <h1 className='font-normal text-[2.5rem] text-white'>Let&apos;s Chat</h1>
        <p className='my-5 w-2/3 font-medium text-[#878686]'>
          I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
      </div>
      <div className="flex flex-col gap-2 my-auto">
        <span className='flex items-start'>
          <FaCircle size={10} className='text-[#83ef93] mt-2 mx-2 hover:text-[#93f9a3]' />
          <p className='text-[#717171]'>Available for work</p>
        </span>

        <button className="text-[#fff] font-medium bg-[#222121] rounded-md mt-2">
          <span className='flex mx-4 my-2'>
            <p className="">Book call</p>
            <MdOutlineBookmarks className='mt-1 mx-1 text-[#717171]' />
          </span>
        </button>
        <button className="text-[#fff] font-medium bg-[#222121] rounded-md mt-2">
          <span className='flex mx-4 my-2'>
            <p className="">Email me</p>
            <IoCopyOutline className='mt-1 mx-1 text-[#717171]' />
          </span>
        </button>
        <button className="text-[#fff] font-medium bg-[#222121] rounded-md mt-2">
          <span className='flex mx-4 my-2'>
            <p className="">Dm me</p>
            <FaInstagram className='mt-1 mx-1 text-[#717171]' />
          </span>
        </button>
      </div>
    </div>
  );
}

export default ContactSection;
