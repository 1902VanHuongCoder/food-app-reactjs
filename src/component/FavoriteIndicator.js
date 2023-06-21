import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useGlobalContext } from "../context";

const FavoriteIndicator = () => {
  const { favorites, setShowFavorite, showFavorite} = useGlobalContext();
  return (
    <div className="w-full h-fit bg-[slate-200] flex justify-between items-center px-5 py-4">
      <h1 className="text-black">
        <span className="text-xl font-bold text-[#ee4d2d]">Food.</span> Store
      </h1>
      <div className="relative" onClick={() => {setShowFavorite(!showFavorite)}}>
        <span className="absolute top-[-10px] left-[-10px] bg-[#ee4d2d] w-5 h-5 rounded-full flex justify-center items-center text-white">{favorites.length}</span>
        <span className="text-xl"><AiOutlineShoppingCart /></span>
      </div>
    </div>
  );
};

export default FavoriteIndicator;
