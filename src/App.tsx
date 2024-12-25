import { useEffect } from "react";
import { FoodForm } from "./components/FoodForm";
import { SelectFood } from "./components/SelectFood";
import useFood from "./hooks/useFood";
import { useFoodStore } from "./store/store";
import { FoodCard } from "./components/FoodCard";
import { FoodModal } from "./components/FoodModal";

function App() {

  const {fetchFood} = useFood();
  const foodCathegory = useFoodStore(state => state.foodCathegory)
  const foodCathegories = foodCathegory.map(cathegory => {
    return cathegory.categories.map(cat => cat.strCategory)
  })

  console.log(foodCathegory)
  console.log(foodCathegories)

  



  useEffect(() => {
    fetchFood()
  }, [])

  return (
    <>
      <h1 className="text-center text-4xl font-bold mt-6">
        Food Recipe Plaza 🍔
      </h1>

      <div className="flex justify-center gap-5 mt-8">
        <FoodForm />
        <SelectFood />
      </div>

      <div className="grid grid-cols-4 max-w-[90%] place-content-between gap-2 mx-auto mt-10 p-2 ">
      {foodCathegory.map((cathegory) => {
        return cathegory.categories.map((category) => (
          <FoodCard
          key={category.idCategory}
          cathegoryName={category.strCategory}
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
