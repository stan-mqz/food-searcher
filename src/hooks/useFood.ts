import { z } from "zod";
import { useFoodStore } from "../store/store";

const allFoodCathegories = z.object({
  categories: z.array(
    z.object({
      idCategory: z.string(),
      strCategory: z.string(),
      strCategoryThumb: z.string(),
      strCategoryDescription: z.string(),
    })
  ),
});

const singleFoodCathegory = z.object({
  meals: z.array(
    z.object({
      idMeal: z.string(),
      strMeal: z.string(),
      strMealThumb: z.string(),
      strInstructions: z.string(),
      strIngredient1: z.string().nullable(),
      strIngredient2: z.string().nullable(),
      strIngredient3: z.string().nullable(),
      strIngredient4: z.string().nullable(),
      strIngredient5: z.string().nullable(),
      strIngredient6: z.string().nullable(),
      strIngredient7: z.string().nullable(),
      strIngredient8: z.string().nullable(),
      strIngredient9: z.string().nullable(),
      strIngredient10: z.string().nullable(),
      strIngredient11: z.string().nullable(),
      strIngredient12: z.string().nullable(),
      strIngredient13: z.string().nullable(),
      strIngredient14: z.string().nullable(),
      strIngredient15: z.string().nullable(),
      strIngredient16: z.string().nullable(),
      strIngredient17: z.string().nullable(),
      strIngredient18: z.string().nullable(),
      strIngredient19: z.string().nullable(),
      strIngredient20: z.string().nullable(),
      strCategory: z.string(),
      strArea: z.string(),
      strYoutube: z.string().nullable(),
    })
  ),
});

export type allFoodCathegories = z.infer<typeof allFoodCathegories>;
export type singleFoodCathegory = z.infer<typeof singleFoodCathegory>;

export default function useFood() {
  const addFoodCathegory = useFoodStore((state) => state.addFoodCathegory);
  const addSingleFoodCathegory = useFoodStore(
    (state) => state.addSingleFoodCathegory
  );

  const fetchFoodCathegories = async () => {
    const URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      const data = await response.json();
      const result = allFoodCathegories.safeParse(data);

      if (result.success) {
        addFoodCathegory(result.data);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const fetchSingleCathegoryCard = async (meal: string | undefined) => {

    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;

    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error(`El error es: ${response.status}`);
      }

      const data = await response.json();
      const result = singleFoodCathegory.safeParse(data);

      if (result.success) {
        console.log(result)
        console.log(result.data)
        addSingleFoodCathegory(result.data);
      } else {
        console.log(result)
        console.log('Not Found')
      }

    } catch (error) {
      console.log(error)
    }
  };

  return {
    fetchFoodCathegories,
    fetchSingleCathegoryCard,
  };
}
