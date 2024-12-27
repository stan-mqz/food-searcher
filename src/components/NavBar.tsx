import { useFoodStore } from "../store/store";
import { FoodForm } from "./FoodForm";

export const NavBar = () => {

  const {clearState} = useFoodStore()

  return (
    <nav className="flex flex-col md:flex-row items-center justify-center md:justify-between bg-orange-600 h-60 sm:h-36 lg:h-28 md:p-10 gap-6">
      
      <h1 className="text-center text-4xl font-bold text-white cursor-pointer"
      onClick={clearState}
      >Food Recipe Plaza</h1>

      <FoodForm />
    </nav>
  );
};
