import React, { FC } from 'react'




const Zenith:FC = () => {
  
    const details:string[] = ["For Businesses", "For Schools", "For Enterprenuers", "For Governments", "For Individuals"]

  return (
    <div className="w-full lg:w-[20%] mx-auto flex flex-col gap-2 lg:gap-5">
      <p className="text-2xl font-medium">Use Zenith</p>
      <div className="flex flex-col items-center justify-start w-full gap-3">
        {details.map((item) => (
          <p className="w-full text-sm lg:text-md" key={item}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Zenith