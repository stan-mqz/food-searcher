import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { FoodCategories, ModalInfo, SingleFoodCategory } from "../types/types";



type FoodState = {
  foodCathegory: FoodCategories;
  singleFoodCathegory: SingleFoodCategory;
  modal: boolean;
  modalInfo: ModalInfo;
  addFoodCathegory: (data: FoodCategories) => void;
  addSingleFoodCathegory: (cathegory: SingleFoodCategory) => void;
  showModalInfo: (text: string | null, img?: string , url?: string | null) => void;
  hideModal: () => void;
  clearState: () => void;
};

export const useFoodStore = create<FoodState>()(
  devtools((set) => ({
    foodCathegory: {},
    singleFoodCathegory: {},
    modal: false,
    modalInfo : {
      img: '',
      text: '',
      url: '',

    },

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

    showModalInfo: (text = null, img = undefined, url = undefined) => {
      set(() => ({
        modal: true,
        modalInfo: {
          img,
          text,
          url,
        },
      }));
    },

    hideModal: () => {
      set(() => ({
        modal: false,
      }));
    },

    clearState: () => {
      set(() => ({
        singleFoodCathegory: {
          meals: []
        },
      }));

    },
  }))
);
