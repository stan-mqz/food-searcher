import { useEffect } from "react";
import useFood from "./hooks/useFood";
import { FoodModal } from "./components/FoodCathegoryModal";
import { NavBar } from "./components/NavBar";
import { useFoodStore } from "./store/store";
import { FoodCard } from "./components/FoodCathegoryCard";
import { SingleCathegoryCard } from "./components/SingleCathegoryCard";
import { getIngredients } from "./helpers/helpers";

function App() {
  const { fetchFoodCathegories } = useFood();
  const { foodCathegory, singleFoodCathegory, clearState } = useFoodStore();

  useEffect(() => {
    fetchFoodCathegories();
  }, []);

  return (
    <>
      <NavBar />

      <div className="flex justify-end w-full">
        {" "}
        <button
          className="bg-blue-950 text-white font-bold rounded-md m-2 border-white border p-2 w-28 disabled:opacity-25"
          disabled={singleFoodCathegory?.meals?.length === 0}
          onClick={clearState}
        >
          Clear Search
        </button>
      </div>

      {singleFoodCathegory?.meals?.length > 0 ? (
        <div className="grid grid-cols-3 gap-2 mx-auto mt-10 p-2">
          {singleFoodCathegory?.meals?.map((meal) => (
            <SingleCathegoryCard
              key={meal.idMeal}
              mealName={meal.strMeal}
              mealImage={meal.strMealThumb}
              mealInstructions={meal.strInstructions}
              mealIngredients={getIngredients(meal)}
              mealCategory={meal.strCategory}
              mealArea={meal.strArea}
              mealYtVideo={meal.strYoutube}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-4 max-w-[90%] place-content-between gap-2 mx-auto mt-10 p-2">
          {foodCathegory?.categories?.map((category) => (
            <FoodCard
              key={category.idCategory}
              cathegoryName={category.strCategory}
              foodDescription={category.strCategoryDescription}
              bgImage={category.strCategoryThumb}
            />
          ))}
        </div>
      )}

      <FoodModal />
    </>
  );
}

export default App;
