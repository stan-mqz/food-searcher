import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { FoodCategories } from "../types/types";

type FoodState = {
  foodCathegory: FoodCategories[];
  modal: boolean;
  imgUrl : string;
  foodDescription : string;
  showModalInfo: (url: string, description: string) => void;
  hideModal : () => void;
  clearState : () => void;
  addFoodCathegory: (data: FoodCategories) => void;
};

export const useFoodStore = create<FoodState>()(
  devtools((set) => ({

    foodCathegory: [],
    modal: false,
    foodDescription : '',
    imgUrl: '',

    addFoodCathegory: (data) => {
      set(() => ({
        foodCathegory: [data],
      }));
    },


    showModalInfo: (url, description) => {
      set(() => ({
        modal: true,
        foodDescription: description,
        imgUrl: url
      }));
    },

    hideModal : () => { 
      set(() => ({
        modal: false,
      }));
    },

    clearState : () => {
      set(() => ({
        foodDescription : '',
        imgUrl: '',
      }));
    }

  }))
);
