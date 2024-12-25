import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { FoodCategories } from "../types/types";

type FoodState = {
  foodCathegory: FoodCategories[];
  modal: boolean;
  imgUrl : string
  showModal: (url: string) => void;
  hideModal : () => void;
  addFoodCathegory: (data: FoodCategories) => void;
};

export const useFoodStore = create<FoodState>()(
  devtools((set) => ({

    foodCathegory: [],
    modal: false,
    imgUrl: '',

    addFoodCathegory: (data) => {
      set(() => ({
        foodCathegory: [data],
      }));
    },
    showModal: (url) => {
      set(() => ({
        modal: true,
        imgUrl: url
      }));
    },

    hideModal : () => {
      set(() => ({
        modal: false,
        imgUrl: ''
      }));
    },

  }))
);
