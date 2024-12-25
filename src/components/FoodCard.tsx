import { useFoodStore } from "../store/store";

type FoodCardProps = {
  cathegoryName: string;
  foodDescription: string;
  bgImage: string;
};

export const FoodCard = ({
  cathegoryName,
  foodDescription,
  bgImage,
}: FoodCardProps) => {
  const showModalInfo = useFoodStore((state) => state.showModalInfo);

  return (
    <div className="space-y-2 w-72 rounded-lg border-gray-200 border-2 shadow-lg">
      <div className="flex flex-col justify-center h-72 p-2">
        <img src={`${bgImage}`} alt="Food BackGround Image" className="w-full h-full object-fill" />
      </div>

      <div className="p-2 space-y-2">
        <p className="text-center bg-gray-100 font-bold   ">{cathegoryName}</p>

        <button
          className="bg-orange-500 text-white p-2 font-bold w-full"
          onClick={() => showModalInfo(bgImage, foodDescription)}
        >
          See Description
        </button>
      </div>
    </div>
  );
};
