"use client"

import React, {useState} from 'react'
import Image from 'next/image'
import logo from '../assets/logo.svg'
import { BiMenu }from 'react-icons/bi'
import { MdClose } from "react-icons/md";

const Navbar:React.FC = () => {
  const [showNav, setShowNav] = useState<boolean>(true)

const hanldleShowNav = ():void=> {
   setShowNav(!showNav)
}

  return (
    <div
      className={`px-20 flex items-center justify-between py-5 w-full fixed lg:block hidden`}
    >
      <div className="flex justify-between lg:hidden">
        <Image src={logo} width={50} height={50} alt="logo" />
        <span
          className="absolute top-0 right-2 text-white text-4xl"
          onClick={hanldleShowNav}
        >
          <BiMenu />
        </span>
      </div>
      <div
        className={`${showNav? "-translate-y-20": "translate-y-0"}flex items-center gap-5 lg:static absolute lg:flex-row flex-col bg-[#04010E] py-2 top-10 left-0  w-full z-40 lg:w-auto`}
      >
        <Image
          className="hidden lg:block "
          src={logo}
          width={50}
          height={50}
          alt="logo"
        />
        <span
          className={`lg:invisible text-white absolute right-3 top-2 text-xl`}
        >
          <MdClose />
        </span>
        <p>Products</p>
        <p>Solutions</p>
        <p>Resource</p>
        <p>Company</p>
        <div>
          <button className="px-1 py-2 border border-white lg:hidden">
            Contact Us
          </button>
        </div>
      </div>

      <div>
        <button className="px-1 py-2 border border-white lg:block hidden">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Navbar