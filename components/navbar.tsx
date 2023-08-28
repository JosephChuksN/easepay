import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.svg'

const Navbar:React.FC = () => {
  return (
    <div className='px-20 flex items-center justify-between py-5'>
      <div className='flex items-center gap-5'>
        <Image src={logo} width={50} height={50} alt="logo" />
        <p>Products</p>
        <p>Solutions</p>
        <p>Resource</p>
        <p>Company</p>
      </div>

      <div>
        <button className='px-1 py-2 border border-white '>Contact Us</button>
      </div>
    </div>
  );
}

export default Navbar