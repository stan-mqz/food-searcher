import { useState } from "react";
import useFood from "../hooks/useFood";
import { ToastContainer, toast } from "react-toastify";

export const FoodForm = () => {

  const { fetchSingleCathegory } = useFood();
  const [searchMeal, setSearchMeal] = useState("");
  const alert = "You must fill search field"

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchMeal === "") {
      toast.error(alert)
      return;
    }

    fetchSingleCathegory(searchMeal);
    setSearchMeal("");
    

  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        className="rounded-md w-72 p-2"
        type="text"
        placeholder="Search Food"
        onChange={(e) => setSearchMeal(e.target.value)}
        value={searchMeal}
      />
      <input
        className="border-white border text-white p-2 rounded-md cursor-pointer w-24"
        type="submit"
        value="Search"
      />

    <ToastContainer />
    </form>
  );
};
