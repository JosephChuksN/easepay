"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../assets/logo.svg'
import { styled } from 'styled-components'
import { BiMenu } from 'react-icons/bi'
import {MdClose} from 'react-icons/md'
import { NavButton } from './Button.Style'

const NavMobile = styled.nav`
display: flex;
flex-direction: row;
gap: 20px;
`

const Navbar:React.FC = () => {
const [showNav, setShowNav] = useState<boolean>(false)

  return (
    <div className="lg:px-20 lg:static fixed lg:w-auto w-full  flex lg:flex-row flex-col items-center backdrop-blur-md bg-transparent  justify-between py-1 lg:py-5 z-50">
      <div className="lg:hidden flex justify-between w-full px-3">
        <Image src={logo} width={50} height={50} alt="logo" />
        <span
          className="text-5xl text-white"
          onClick={() => setShowNav(!showNav)}
        >
          {!showNav ? <BiMenu /> : <MdClose />}
        </span>
      </div>
      <div className="lg:static relative w-full lg:w-2/5 ">
        <div
          className={`flex lg:flex-row flex-col px-3 lg:px-0 items-center bg-[#04010E] z-10 py-2 lg:py-0 text-md lg:text-base gap-5 lg:static  absolute lg:bg-transparent ${
            showNav ? "translate-y-1" : "-translate-y-96 "
          } lg:translate-y-0 transition-all duration-700 delay-75 ease-in-out w-full `}
        >
          <Image
            className="hidden lg:block"
            src={logo}
            width={50}
            height={50}
            alt="logo"
          />
          <p className="w-full lg:w-auto">Products</p>
          <p className="w-full lg:w-auto">Solutions</p>
          <p className="w-full lg:w-auto">Resource</p>
          <p className="w-full lg:w-auto">Company</p>
          <div className="lg:hidden block w-full lg:w-auto">
            <NavButton className="px-1 py-2">Contact Us</NavButton>
          </div>
        </div>
      </div>

      <div className="lg:block hidden">
        <NavButton className="px-1 py-2  ">Contact Us</NavButton>
      </div>
    </div>
  );
}

export default Navbar