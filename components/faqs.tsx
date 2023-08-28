import React from 'react'
import { BiPlus } from "react-icons/bi";

const Faqs:React.FC = () => {
  return (
    <div className="flex flex-col lg:px-20 gap-5 pt-20 lg:pb-10">
      <h1 className="text-white text-4xl">FAQS</h1>
      <p className="text-white text-base w-full lg:w-[55%]">
        Are you looking for a reliable payment processor to help you expand your
        online business? Look no further, Zenithpay is here to help you access a
        larger market with ease!
      </p>
      <div className="flex flex-col gap-5 w-full lg:mt-20">
        <span className="px-2 py-4 border boder-white flex justify-between items-center">
          <p className="font-medium">When do we lunch?</p>
          <span className='text-xl text-white'><BiPlus /></span>
        </span>
        <span className="px-2 py-4 border boder-white flex justify-between items-center">
          <p className="font-medium">
            Do you get a discount when you join the waitlist?
          </p>
          <span className='text-xl text-white'><BiPlus /></span>
        </span>
        <span className="px-2 py-4 border boder-white flex justify-between items-center">
          <p className="font-medium">When do we lunch?</p>
          <span className='text-xl text-white'><BiPlus /></span>
        </span>
      </div>
      <div className="flex gap-5 flex-col text-white w-full lg:w-2/5 mt-16">
        <h1 className="text-4xl">Still have a question?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="px-1 py-2 border border-white w-32 ">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Faqs;