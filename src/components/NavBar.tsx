import { useFoodStore } from "../store/store";
import { FoodForm } from "./FoodForm";

export const NavBar = () => {

  const {clearState} = useFoodStore()

  return (
    <nav className="bg-orange-600 p-10 h-28 flex items-center justify-between">
      <h1 className="text-4xl font-bold text-white cursor-pointer"
      onClick={clearState}
      >Food Recipe Plaza</h1>

      <FoodForm />
    </nav>
  );
};
