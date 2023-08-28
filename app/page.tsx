"use client"
import { useState } from 'react';
import Image from 'next/image'
import easeImg from "../assets/easepayimag2.png"
import Faqs from '@/components/faqs';
import Footer from '@/components/Footer/Footer';
import { styled } from 'styled-components';



const Home:React.FC = () => {

  const [email, setEmail] = useState<string>("");
  return (
    <>
      <div className='flex mx-auto w-full lGw-2/4 flex-col gap-5 lg:pt-20  text-center justify-center'>
        <h1 className='lg:text-7xl text-3xl text-white'>One Payment at the speed of light</h1>
        <p>Unlock Groundbreaking New Payment Experiences</p>
        <div className='flex items-center gap-5 w-full justify-center'>
          <input 
          className='px-1 py-3  w-2/5 text-black'
          type="email" 
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          />
          <button className='p-2 bg-[#310393] text-white py-3'>Join Our Waitlist</button>
        </div>
      </div>
      <div className='mt-20 w-full mx-auto '>
        <Image className='mx-auto'
        src={easeImg} 
        width={1000}
        height={1000}
        alt='code image'  
        priority={true}/>
      </div>
      <Faqs />
      <Footer />
    </>
  );
}

export default Home
