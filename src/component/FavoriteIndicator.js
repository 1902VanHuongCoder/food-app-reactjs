import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const FavoriteIndicator = () => {
  return (
    <div className="w-full h-fit bg-[slate-200] flex justify-between items-center px-5 py-4">
      <h1 className="text-black">
        <span className="text-xl font-bold text-[#ee4d2d]">Food.</span> Store
      </h1>
      <div>
        <AiOutlineShoppingCart />
      </div>
    </div>
  );
};

export default FavoriteIndicator;
