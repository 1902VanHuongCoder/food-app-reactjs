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
      const { data } = await axios(url, {signal: AbortSignal.timeout(5000)});
      if (data.meals) {
        setMeals(data.meals);
        setLoading(false);
      } else {
        setMeals([]);
        setLoading(false);
      }
    } catch (error) {
      console.log("error");
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
  function addMealToLikeList(idMeal) {
    let likeMeal = favorites.find((favorite) => favorite.idMeal === idMeal);
    if (likeMeal) {
      removeMealFromLikeList(idMeal);
    } else {
      let meal = meals.find((meal) => meal.idMeal === idMeal);
      setFavorites([...favorites, meal]);
    }
  }

  function removeMealFromLikeList(idMeal) {
    let meal = favorites.filter((favorite) => favorite.idMeal !== idMeal);
    setFavorites(meal);
  }

  return (
    <AppContext.Provider
      value={{
        meals,
        loading,
        favorites,
        setShowFavorite,
        showFavorite,
        addMealToLikeList,
        removeMealFromLikeList,
        selectMeal,
        showModal,
        setShowModal,
        selectedMeal,
        setSearchTerm,
        fetchRandomMeal
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
