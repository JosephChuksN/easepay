"use client"
import { useState } from 'react';
import Image from 'next/image'
import easeImg from "../assets/easepayimag2.png"
import Faqs from '@/components/faqs';
import Footer from '@/components/Footer/Footer';
import { Button } from '@/components/Button.Style';
import { HomeLabel } from '@/components/Home.styled';
import { Container } from '@/components/Home.styled';




const Home:React.FC = () => {

  const [email, setEmail] = useState<string>("");
  return (
    <>
      <Container className='flex mx-auto w-full px-3 lg:px-0 lg:w-2/4 flex-col gap-5 pt-28 lg:pt-20   justify-center'>
        <HomeLabel className='lg:text-7xl text-4xl text-white'>One Payment at the speed of light</HomeLabel>
        <p>Unlock Groundbreaking New Payment Experiences</p>
        <div className='flex lg:flex-row flex-col items-center gap-5 w-full justify-center'>
          <input 
          className='px-1 py-1 lg:py-3 w-4/5 lg:w-2/5 text-black'
          type="email" 
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          />
          <Button className='py-3 px-1'>Join Our Waitlist</Button>
        </div>
      </Container>
      <div className='mt-20 w-full mx-auto lg:px-0 px-3'>
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
