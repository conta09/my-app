"use client";
import React from 'react'
import Image from 'next/image'


const tools = [
  
]

const ToolStack = () => {
  return (

    <div className='lg:ml-20 ml-5'>
      <p className='text-[2rem] font-medium text-[#fff] my-5 ml-5 '>Tool Stack</p>
   <div className="flex flex-wrap ml-4 gap-3 m-3 my-3">
   <div className="bg-[#222121] rounded-md  ">
      <Image className=" mt-3 mx-5 " alt='tools' src="/images/projects/vscode.png" width={70} height={50} />   
      <p className='mx-3 text-[#605f5f] font-light text-[0.8rem] my-1'>CODE</p>
      <h2 className='mx-3 mb-3 text-white text-[1rem] '>Vs Code</h2>
       </div>

       <div className=" mx-5 bg-[#222121] rounded-md ">
      <Image className="mt-3 mx-3" alt='figma' src="/images/projects/figma.png" width={70} height={50} />   
      <p className='mx-3 text-[#605f5f] font-light text-[0.8rem] my-1'>DESIGN</p>
      <h2 className='mx-3 mb-3 text-white text-[1rem]'>Figma</h2>
       </div>

       <div className="bg-[#222121] rounded-md  ">
      <Image className="mt-3 mx-3 " src="/images/projects/Notion.png" width={70} height={50} alt='notion' />   
      <p className='mx-3 text-[#605f5f] font-light text-[0.8rem] my-1'>DOCUMENTATION</p>
      <h2 className='mx-3 mb-3 text-white text-[1rem]'>Notion</h2>
       </div>

       <div className=" lg:mx-5 bg-[#222121] rounded-md">
      <Image className="mt-3 mx-3" src="/images/projects/figma.png" width={70} height={50} alt='figma'/>   
      <p className='mx-3 text-[#605f5f] font-light text-[0.8rem] my-1'>DESIGN</p>
      <h2 className='mx-3 mb-3 text-white text-[1rem]'>Figma</h2>
       </div>

   </div>
      
    </div>
    
  )
}

export default ToolStack
