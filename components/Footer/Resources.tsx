import React, { FC } from 'react'

const Resources:FC = () => {
  const details: string[] = [
    "Pricing",
    "Security",
    "Guiding",
    "Research",
  ];

  return (
    <div className="w-[20%] mx-auto flex flex-col gap-5">
      <p className="text-2xl">Resource</p>
      <div className="flex flex-col items-center w-full gap-3">
        {details.map((item) => (
          <p className="w-full text-md" key={item}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Resources