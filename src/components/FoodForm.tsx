export const FoodForm = () => {
  return (
    <form className="flex gap-2">
      <input
        className="border border-black rounded-md w-72 p-1"
        type="text"
        placeholder="Search Food"
      />
      <input
        className="bg-orange-500 text-white p-2 rounded-md cursor-pointer w-24"
        type="submit"
        value="Search"
      />
    </form>
  );
};
