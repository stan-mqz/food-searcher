import { useState } from "react";
import useFood from "../hooks/useFood";
import { ToastContainer, toast } from "react-toastify";

export const FoodForm = () => {

  
  const { fetchSingleFoodCathegory } = useFood();

  const [searchMeal, setSearchMeal] = useState("");
  const alert = "You must fill search field"

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchMeal === "") {
      toast.error(alert)
      return;
    }



    fetchSingleFoodCathegory(searchMeal);
    setSearchMeal("");
    

  };

  return (
    <form className="flex flex-col w-[100%] items-center justify-center gap-2 sm:flex-row sm:w-96" onSubmit={handleSubmit}>
      <input
        className="rounded-md w-[90%]  p-2"
        type="text"
        placeholder="Search Food"
        onChange={(e) => setSearchMeal(e.target.value)}
        value={searchMeal}
      />
      <input
        className="border-white w-[90%] sm:w-24 border text-white p-2 rounded-md cursor-pointer"
        type="submit"
        value="Search"
      />

    <ToastContainer />
    </form>
  );
};
