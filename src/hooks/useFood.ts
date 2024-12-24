import { useState } from "react";
import { z } from "zod";
import { FoodCategories } from "../types/types";

const foodCathegories = z.object({
  categories: z.array(
    z.object({
      idCategory: z.string(),
      strCategory: z.string(),
      strCategoryThumb: z.string(),
      strCategoryDescription: z.string(),
    })
  ),
});

export type foodCathegories = z.infer<typeof foodCathegories>;

const foodCathegoryInitialState: FoodCategories = {
    categories: [
      {
        idCategory: '',
        strCategory: '',
        strCategoryThumb: '',
        strCategoryDescription: '',
      },
    ],
  };
  
export default function useFood() {
  
    const [foodCathegory, setFoodCathegory] = useState<FoodCategories>(foodCathegoryInitialState)
    
  const URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

  const fetchFood = async () => {
    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      const data = await response.json();
      const result = foodCathegories.safeParse(data);
      
      if (result.success) {
        setFoodCathegory(result.data)
      }

      
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return {
    foodCathegory,
    fetchFood,
  };
}
