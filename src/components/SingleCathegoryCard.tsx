type SingleCathegoryCardProps = {
  mealName: string;
  mealImage: string;
  mealInstructions: string | null;
  mealIngredients: (string | null)[];
  mealCategory: string;
  mealArea: string;
  mealYtVideo: string | null;
};

export const SingleCathegoryCard = ({
  mealName,
  mealImage,
  mealInstructions,
  mealIngredients,
  mealCategory,
  mealArea,
  mealYtVideo,
}: SingleCathegoryCardProps) => {
  const filteredIngredients = mealIngredients.filter(
    (ingredient) => ingredient !== "" && ingredient !== null
  );

  return (
    <>
      <div className="space-y-2 mt-4 w-[95%] rounded-lg border-gray-200 border-4 shadow-lg p-2">
        <div className="flex justify-between">
        <h3 className="font-bold text-lg">{`${mealName}`}</h3>
        <h3 className="font-bold text-lg text-blue-950">{`${mealCategory}`}</h3>

        </div>

        <div className="w-full h-60">
          <img
            src={`${mealImage}`}
            alt="Meal image"
            className="w-full h-full object-center"
          />
        </div>

        <div>

          <p className="font-bold">Ingredients</p>

          <ul className="flex flex-wrap gap-2 mt-2">
            {filteredIngredients.map((ingredient, index) => (
              <li key={index} className="bg-gray-100 p-1 rounded-lg">
                {ingredient}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </>
  );
};
