import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { FoodCategories } from "../types/types";
import { singleFoodCathegory } from "../hooks/useFood";

type FoodState = {
  foodCathegory: FoodCategories;
  singleFoodCathegory: singleFoodCathegory;
  modal: boolean;
  imgUrl: string;
  foodDescription: string;
  addFoodCathegory: (data: FoodCategories) => void;
  addSingleFoodCathegory: (cathegory: singleFoodCathegory) => void;
  showModalInfo: (url: string, description: string) => void;
  hideModal: () => void;
  clearState: () => void;
};

export const useFoodStore = create<FoodState>()(
  devtools((set) => ({
    foodCathegory: {},
    singleFoodCathegory: {},
    modal: false,
    foodDescription: "",
    imgUrl: "",

    addFoodCathegory: (data) => {
      set(() => ({
        foodCathegory: data,
      }));
    },

    addSingleFoodCathegory: (cathegory) => {
      set(() => ({
        singleFoodCathegory: cathegory
      }));
    },

    showModalInfo: (url, description) => {
      set(() => ({
        modal: true,
        foodDescription: description,
        imgUrl: url,
      }));
    },

    hideModal: () => {
      set(() => ({
        modal: false,
      }));
    },

    clearState: () => {
      set(() => ({
        foodDescription: "",
        imgUrl: "",
        singleFoodCathegory: {
          meals: []
        },
      }));
    },
  }))
);
