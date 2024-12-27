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
  const { foodCathegory, singleFoodCathegory } = useFoodStore();

  useEffect(() => {
    fetchFoodCathegories();
  }, []);

  return (
    <>
      <NavBar />

      {singleFoodCathegory?.meals?.length > 0 ? (
        <div className="grid grid-cols-3 gap-2 p-7 mt-10">
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
        <>
          <h2 className="text-orange-900 text-3xl font-bold text-center mt-5">
            Food Cathegories
          </h2>

          <div className="grid w-[90%] mx-auto mt-10 gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {foodCathegory?.categories?.map((category) => (
              <FoodCard
                key={category.idCategory}
                cathegoryName={category.strCategory}
                foodDescription={category.strCategoryDescription}
                bgImage={category.strCategoryThumb}
              />
            ))}
          </div>
        </>
      )}

      <FoodModal />
    </>
  );
}

export default App;
