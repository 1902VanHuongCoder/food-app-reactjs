import React from "react";
import { useGlobalContext } from "../context";
const Likelist = () => {
  const { favorites, removeMealFromLikeList, setShowModal, selectMeal} = useGlobalContext();
  if (favorites.length < 1) {
    return (
      <div className="bg-slate-800 w-full p-5">
        <h1 className="text-white">
          You haven't selected any dishes yet! Try to choose 1 dish
        </h1>
      </div>
    );
  }
  return (
    <div className="bg-slate-800 w-full p-5 ">
      <h1 className="text-xl text-white mb-3">Your Meals</h1>
      <div className="flex flex-wrap gap-3">
        {favorites.map((favorite, i) => {
          const { idMeal, strMealThumb: image, strMeal: title } = favorite;
          return (
            <div className="bg-white p-2 rounded-lg" key={i}>
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                {" "}
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full"
                  onClick={() => {
                    setShowModal(true);
                    selectMeal(idMeal, true);
                  }}
                />
              </div>
              <button
                onClick={() => {
                  removeMealFromLikeList(idMeal);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Likelist;
