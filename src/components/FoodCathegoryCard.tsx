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
    <div
      className="space-y-2 rounded-lg border-gray-200 border-2 shadow-lg transition-transform duration-200 hover:scale-105 cursor-pointer"
      onClick={() => showModalInfo(foodDescription, false, bgImage, undefined, cathegoryName)}
    >
      <div className="flex flex-col bg-orange-300 justify-center h-72">
        <img
          src={`${bgImage}`}
          alt="Food BackGround Image"
          className="w-full h-full object-fill"
        />
      </div>

      <div className="p-2 space-y-2">
        <p className="text-center text-orange-900 bg-gray-100 font-bold">
          {cathegoryName}
        </p>

      </div>
    </div>
  );
};
