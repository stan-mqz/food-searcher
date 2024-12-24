import { useFoodStore } from "../store/store";

export const SelectFood = () => {
  const foodCathegory = useFoodStore((state) => state.foodCathegory);

  return (
    <select
    name=""
      id="cathegory"
      className="border border-black rounded-md w-28 p-2"
    >
      {foodCathegory.map((cathegory) => {
        return cathegory.categories.map((category) => (
          <option key={category.idCategory} value={category.idCategory}>
            {category.strCategory}
          </option>
        ));
      })}
    </select>
  );
};
