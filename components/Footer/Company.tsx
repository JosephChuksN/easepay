import React, { FC } from 'react'

const Company = () => {
  const details: string[] = [
    "About",
    "Team",
    "Partners",
    "Investors",
    "Privacy and Terms",
  ];

  return (
    <div className="w-full lg:w-[20%] mx-auto flex flex-col gap-5">
      <p className="text-2xl">Company</p>
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

export default Company