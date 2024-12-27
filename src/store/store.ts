import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { FoodCategories, ModalInfo, SingleFoodCategory } from "../types/types";



type FoodState = {
  foodCathegory: FoodCategories;
  singleFoodCathegory: SingleFoodCategory;
  modal: boolean;
  modalInfo: ModalInfo;
  notFound: boolean
  addFoodCathegory: (data: FoodCategories) => void;
  addSingleFoodCathegory: (cathegory: SingleFoodCategory) => void;
  showModalInfo: (
    text: string,
    img?: string , 
    url?: string | null,
    cathegory?: string

  ) => void;
  hideModal: () => void;
  clearState: () => void;
  setNotFound: (res: boolean) => void
};

export const useFoodStore = create<FoodState>()(
  devtools((set) => ({
    foodCathegory: {},
    singleFoodCathegory: {},
    modal: false,
    modalInfo : {
      text: '',
      img: '',
      url: '',
      cathegory: ''

    },

    notFound: false,

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

    showModalInfo: (text, img = undefined, url = undefined, cathegory = undefined) => {
      set(() => ({
        modal: true,
        modalInfo: {
          text,
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

    setNotFound: (res: boolean) => {
      set(() => ({
        notFound: res
      }));
    }
    
  }))
);
