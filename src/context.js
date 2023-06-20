import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
export const AppContext = createContext();

const allMealsURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealURL = "https://www.themealdb.com/api/json/v1/1/random.php";

function AppProvider({ children }) {
  const [meals, setMeals] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState();
  const [favorites, setFavorites] = useState([]);
  const [showFavorite, setShowFavorite] = useState(false);
  const fetchData = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      if (data.meals) {
        setMeals(data.meals);
        setLoading(false);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(allMealsURL);
  }, []);

  function fetchRandomMeal() {
    fetchData(randomMealURL);
  }

  useEffect(() => {
    fetchData(`${allMealsURL}${searchTerm}`);
  }, [searchTerm]);

  function selectMeal(idMeal, favoriteMeal) {
    if (favoriteMeal) {
      let meal = favorites.find((favorite) => favorite.idMeal === idMeal);
      setSelectedMeal(meal);
    } else {
      let meal = meals.find((meal) => meal.idMeal === idMeal);
      setSelectedMeal(meal);
    }
  }

  function closeModal() {
    setShowModal(false);
  }

  function addMealToLikeList(idMeal) {
    let likeMeal = favorites.find((favorite) => favorite.idMeal === idMeal);
    if (likeMeal) {
      //remove this meal out of like list
      console.log("1");
    } else {
      let meal = meals.find((meal) => meal.idMeal === idMeal);
      setFavorites([...favorites, meal]);
    }
  }

  function removeMealFromLikeList(idMeal) {
    let meal = favorites.find((favorite) => favorite.idMeal !== idMeal);
    setFavorites([...favorites, meal]);
  }
  return <AppContext.Provider value={{meals,loading, favorites}}>{children}</AppContext.Provider>;
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
export default AppProvider;
