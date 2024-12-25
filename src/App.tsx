import { useEffect } from "react";
import useFood from "./hooks/useFood";
import { useFoodStore } from "./store/store";
import { FoodCard } from "./components/FoodCathegoryCard";
import { FoodModal } from "./components/FoodModal";
import { NavBar } from "./components/NavBar";

function App() {

  const {fetchFoodCathegories} = useFood();
  const foodCathegory = useFoodStore(state => state.foodCathegory)


  useEffect(() => {
    fetchFoodCathegories()
  }, [])

  return (
    <>

    <NavBar />



      <div className="grid grid-cols-4 max-w-[90%] place-content-between gap-2 mx-auto mt-10 p-2  ">
      {foodCathegory.map((cathegory) => {
        return cathegory.categories.map((category) => (
          <FoodCard
          key={category.idCategory}
          cathegoryName={category.strCategory}
          foodDescription={category.strCategoryDescription}
          bgImage={category.strCategoryThumb}
          />
        ));
      })}
      </div>

      <FoodModal />

      </>
  );
}

export default App;
