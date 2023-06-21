import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center items-center w-full px-5 bg-hero-pattern h-[150px] bg-center bg-no-repeat bg-cover">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white font-bold text-lg ">
          This page can teach you everything about meals!
        </h1>
        <button className="mt-2 w-fit font-bold text-[#ee4d2d] bg-white px-5 py-2 rounded-lg">
            Details
        </button>
      </div>
    </div>
  );
};

export default Hero;
