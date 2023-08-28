"use client"


import React, {FC, useState} from 'react'

const Subcribe:FC = () => {

    const [email, setEmail] = useState<string>("")

  return (
    <div className="flex flex-col gap-5 w-[40%]">
      <p className="text-2xl font-medium">Subcribe</p>
      <div className="flex flex-col gap-2">
        <p className='text-sm'>Join our newsletter to stay up to date on features and releases.</p>
        <div className='flex gap-3 py-5'>
          <input
            className="px-1 py-4 w-[65%] text-black"
            type="email"
            value={email}
            name="email"
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button className=' transition-all duration-100 ease-in-out hover:bg-white/20 px-1 py-3 border border-white w-36'>Subcribe</button>
        </div>
        <p className='text-xs'>
          By subscribing you agree to with our Privacy Policy and provide
          consent to receive updates from our company.
        </p>
      </div>
    </div>
  );
}

export default Subcribe