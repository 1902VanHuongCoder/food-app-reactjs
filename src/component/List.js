import React from "react";
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import { useGlobalContext } from "../context";
const List = () => {
  const { meals, loading, favorites, addMealToLikeList, setShowModal, selectMeal} = useGlobalContext();
  console.log(meals);
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (meals.length < 1) {
    return (
      <div>
        <h1>No result match your searching! Try other...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-[32px] font-medium pl-5 mb-5">List of meals</h1>
      <div className="flex flex-wrap gap-x-4 gap-y-6 justify-center items-center w-full">
        {meals.map((meal, i) => {
          const {idMeal, strMealThumb: image, strMeal: title} = meal;
          return <div key={i} className="w-[200px] h-fit overflow-hidden rounded-lg hover:shadow-xl transition-shadow ease-in-out duration-300 border-slate-200 border-solid border">
            <img src={image} alt={title} className="w-full object-fit" onClick={() => {
              setShowModal(true);
              selectMeal(idMeal, false);
            }}/>
            <div className="flex justify-between p-2 items-center"> <h3 >{title}</h3> 
            <span onClick={
              () => {addMealToLikeList(idMeal)}
            }>{ favorites.find((favorite) => favorite.idMeal === idMeal) ? <AiFillHeart /> : <AiOutlineHeart />}</span>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default List;
