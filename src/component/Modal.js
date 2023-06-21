import React from "react";
import { useGlobalContext } from "../context";
import { AiFillYoutube } from "react-icons/ai";
const Modal = () => {
  const { selectedMeal,setShowModal } = useGlobalContext();
  const {
    strMeal: title,
    strMealThumb: image,
    strInstructions: instruction,
    strYoutube: youtube,
  } = selectedMeal;
  return (
    <div className="flex justify-center items-center fixed bg-[rgba(0,0,0,.4)] h-screen w-full z-10">
      <div className="w-[700px] h-[400px] bg-white overflow-y-scroll p-3">
        <div className=" m-auto h-[300px] w-[400px] overflow-hidden">
          <img src={image} alt={title} className="w-full h-full" />
        </div>
        <h1 className="text-2xl font-bold py-2">{title}</h1>
        <p className="py-2">Instruction: {instruction}</p>
        <a href={youtube} className="flex justify-start items-center">
          <AiFillYoutube className="text-[red]" />
          <span className="ml-1 font-bold cursor-pointer">Youtube</span>
        </a>
        <button onClick={() => {setShowModal(false)}}className="my-2 bg-[#ee4d2d] py-1 px-3 rounded-lg text-white ">
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
