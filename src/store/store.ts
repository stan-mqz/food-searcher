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
  showModalInfo: (
    text: string | null,
    singleFoodCall: boolean, 
    img?: string , 
    url?: string | null,
    cathegory?: string

  ) => void;
  hideModal: () => void;
  clearState: () => void;
};

export const useFoodStore = create<FoodState>()(
  devtools((set) => ({
    foodCathegory: {},
    singleFoodCathegory: {},
    modal: false,
    modalInfo : {
      text: '',
      singleFoodCall: false,
      img: '',
      url: '',
      cathegory: ''

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

    showModalInfo: (text = null, singleFoodCall , img = undefined, url = undefined, cathegory = undefined) => {
      set(() => ({
        modal: true,
        modalInfo: {
          text,
          singleFoodCall,
          img,
          url,
          cathegory
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
