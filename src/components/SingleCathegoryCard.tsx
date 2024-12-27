import { useFoodStore } from "../store/store";

type SingleCathegoryCardProps = {
  mealName: string;
  mealImage: string;
  mealInstructions: string;
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


  const showModalInfo = useFoodStore(state => state.showModalInfo)

  return (
    <>
      <div className="space-y-2 rounded-lg border-gray-200 border-4 shadow-lg p-2 transition-transform duration-200 hover:scale-105 cursor-pointer"
      onClick={() => showModalInfo(mealInstructions, true, undefined, mealYtVideo)}
      >
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">{`${mealName}`}</h3>
          <h3 className="font-bold text-lg text-orange-900">{`${mealCategory}`}</h3>
        </div>

        <div className="w-full h-60">
          <img
            src={`${mealImage}`}
            alt="Meal image"
            className="w-full h-full object-center"
          />
        </div>

        <div>
          <p className="font-bold border-y-2 border-gray-100 py-1 mb-1">{`${mealArea }`}</p>
          <p className="font-bold">Ingredients</p>

          <ul className="flex flex-wrap gap-2 mt-2">
            {mealIngredients.map((ingredient, index) => (
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
