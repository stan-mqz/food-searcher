import { FoodForm } from "./FoodForm";
import { SelectFood } from "./SelectFood";


export const NavBar = () => {
  return (
    <nav className="bg-blue-950 p-10 h-28 flex items-center justify-between">
      <h1 className="text-4xl font-bold text-white">Food Recipe Plaza</h1>

      <div className="flex justify-center gap-2">
        <FoodForm />
        <SelectFood />
      </div>

    </nav>
  );
};