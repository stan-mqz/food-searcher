import { useEffect } from "react";
import useFood from "./hooks/useFood";
import { useFoodStore } from "./store/store";
import { FoodCard } from "./components/FoodCathegoryCard";
import { FoodModal } from "./components/FoodCathegoryModal";
import { NavBar } from "./components/NavBar";
import { SingleCathegoryCard } from "./components/SingleCathegoryCard";

function App() {
  const { fetchFoodCathegories } = useFood();
  const foodCathegory = useFoodStore((state) => state.foodCathegory);
  const clearState = useFoodStore((state) => state.clearState);
  const singleFoodCathegory = useFoodStore(
    (state) => state.singleFoodCathegory
  );

  useEffect(() => {
    fetchFoodCathegories();
  }, []);

  return (
    <>
      <NavBar />

      <button onClick={clearState}>Reset State</button>

      {singleFoodCathegory.length !== 0 ? (
        <div className="grid grid-cols-3 gap-2 mx-auto mt-10 p-2">
          {singleFoodCathegory.map((item) =>
            item.meals.map((meal) => (
              <SingleCathegoryCard
                key={meal.idMeal}
                mealName={meal.strMeal}
                mealImage={meal.strMealThumb}
                mealInstructions={meal.strInstructions}
                mealIngredients={[
                  meal.strIngredient1,
                  meal.strIngredient2,
                  meal.strIngredient3,
                  meal.strIngredient4,
                  meal.strIngredient5,
                  meal.strIngredient6,
                  meal.strIngredient7,
                  meal.strIngredient8,
                  meal.strIngredient9,
                  meal.strIngredient10,
                  meal.strIngredient11,
                  meal.strIngredient12,
                  meal.strIngredient13,
                  meal.strIngredient14,
                  meal.strIngredient15,
                  meal.strIngredient16,
                  meal.strIngredient17,
                  meal.strIngredient18,
                  meal.strIngredient19,
                  meal.strIngredient20,
                ]}
                mealCategory={meal.strCategory}
                mealArea={meal.strArea}
                mealYtVideo={meal.strYoutube}
              />
            ))
          )}
        </div>
      ) : (
        <div className="grid grid-cols-4 max-w-[90%] place-content-between gap-2 mx-auto mt-10 p-2">
          {foodCathegory.map((cathegory) =>
            cathegory.categories.map((category) => (
              <FoodCard
                key={category.idCategory}
                cathegoryName={category.strCategory}
                foodDescription={category.strCategoryDescription}
                bgImage={category.strCategoryThumb}
              />
            ))
          )}
        </div>
      )}

      <FoodModal />
    </>
  );
}

export default App;
