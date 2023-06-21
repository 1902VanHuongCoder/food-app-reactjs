import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useGlobalContext } from "../context";
import NetflixLoader from "./Loading";
const List = () => {
  const {
    meals,
    loading,
    favorites,
    addMealToLikeList,
    setShowModal,
    selectMeal,
  } = useGlobalContext();
  if (loading) {
    return (
      <div className="w-full flex justify-center items-center mt-3">
        <NetflixLoader />
      </div>
    );
  }

  if (meals.length < 1) {
    return (
      <div className="h-[200px] w-full bg-[#fff] flex justify-center items-center">
        <h1 className="text-xl">No result match your searching! Try other...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-[32px] font-medium py-3 text-center">MEALS</h1>
      <div className="bg-[#f7f7f7] p-5">
      <div className="flex flex-wrap gap-x-4 gap-y-6 justify-center items-center w-fit bg-white p-5 border border-solid border-[rgba(0,0,0,.1)] rounded-lg">
        {meals.map((meal, i) => {
          const { idMeal, strMealThumb: image, strMeal: title } = meal;
          return (
            <div
              key={i}
              className="w-[250px] h-fit overflow-hidden rounded-lg  shadow-lg hover:shadow-2xl transition-shadow ease-in-out duration-300 border-slate-200 border-solid border"
            >
              <img
                src={image}
                alt={title}
                className="w-full object-fit"
                onClick={() => {
                  setShowModal(true);
                  selectMeal(idMeal, false);
                }}
              />
              <div className="flex justify-between p-2 items-center w-full">
                {" "}
                <h3>{title}</h3>
                <span
                  onClick={() => {
                    addMealToLikeList(idMeal);
                  }}
                >
                  {favorites.find((favorite) => favorite.idMeal === idMeal) ? (
                    <AiFillHeart />
                  ) : (
                    <AiOutlineHeart />
                  )}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default List;
