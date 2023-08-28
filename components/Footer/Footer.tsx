import React from 'react'
import Image from 'next/image'
import Zenith from './Zenith'
import Resources from './Resources'
import Company from './Company'
import Subcribe from './Subcribe'
import Logo from '../../assets/logo.svg'
import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa'

const Footer:React.FC = () => {
  return (
    <div className="bg-[#04010E]">
      <div className="flex lg:flex-row flex-col px-20 w-full items-start justify-between lg:mt-20 lg:pb-28">
        <Image className="mr-5" src={Logo} width={70} height={70} alt="logo" />
        <Zenith />
        <Company />
        <Resources />
        <Subcribe />
      </div>

      <div className="flex justify-between mx-20 border-t-4 border-white py-5">
        <div className="flex gap-5 items-center">
          <p>&copy; 2023 Relume. All rights reserved.</p>
          <p>Privacy Policy</p>
          <p>Cookies Settings</p>
        </div>
        <div className="flex gap-5 text-xl text-white">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
}

export default Footer