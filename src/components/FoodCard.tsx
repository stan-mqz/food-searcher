import { useFoodStore } from "../store/store";

type FoodCardProps = {
  cathegoryName: string;
  foodDescription: string
  bgImage: string;
};


export const FoodCard = ({cathegoryName, foodDescription, bgImage }: FoodCardProps) => {


  const showModalInfo = useFoodStore(state => state.showModalInfo)

  return (
    <div className="space-y-2 bg-emerald-50 border border-black border-1 p-2">
      <div className="bg-white  border border-black border-1 p-2 cursor-pointer">
        <img 
        src={`${bgImage}`} 
        alt="Food BackGround Image"
        onClick={() => showModalInfo(bgImage, foodDescription)}
        />

      </div>

      <p className="text-center font-bold stroke-black text-stroke-2">
        {cathegoryName}
      </p>

    </div>
  );
};
