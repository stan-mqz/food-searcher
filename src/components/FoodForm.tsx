export const FoodForm = () => {
  return (
    <form className="flex gap-2">
      <input
        className="rounded-md w-72 p-2"
        type="text"
        placeholder="Search Food"
      />
      <input
        className="border-white border text-white p-2 rounded-md cursor-pointer w-24"
        type="submit"
        value="Search"
      />
    </form>
  );
};
