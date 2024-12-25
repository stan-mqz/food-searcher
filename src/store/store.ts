import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { FoodCategories } from "../types/types";

type FoodState = {
  foodCathegory: FoodCategories[];
  modal: boolean;
  showModal: () => void;
  hideModal : () => void;
  addFoodCathegory: (data: FoodCategories) => void;
};

export const useFoodStore = create<FoodState>()(
  devtools((set) => ({

    foodCathegory: [],
    addFoodCathegory: (data) => {
      set(() => ({
        foodCathegory: [data],
      }));
    },

    modal: false,

    showModal: () => {
      set(() => ({
        modal: true,
      }));
    },

    hideModal : () => {
      set(() => ({
        modal: false
      }));
    }

    
  }))
);
