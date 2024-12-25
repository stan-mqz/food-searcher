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
      strDrinkAlternate: z.string().nullable(),
      strCategory: z.string(),
      strArea: z.string(),
      strInstructions: z.string().nullable(),
      strMealThumb: z.string().nullable(),
      strTags: z.string().nullable(),
      strYoutube: z.string().nullable(),
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
      strMeasure1: z.string().nullable(),
      strMeasure2: z.string().nullable(),
      strMeasure3: z.string().nullable(),
      strMeasure4: z.string().nullable(),
      strMeasure5: z.string().nullable(),
      strMeasure6: z.string().nullable(),
      strMeasure7: z.string().nullable(),
      strMeasure8: z.string().nullable(),
      strMeasure9: z.string().nullable(),
      strMeasure10: z.string().nullable(),
      strMeasure11: z.string().nullable(),
      strMeasure12: z.string().nullable(),
      strMeasure13: z.string().nullable(),
      strMeasure14: z.string().nullable(),
      strMeasure15: z.string().nullable(),
      strMeasure16: z.string().nullable(),
      strMeasure17: z.string().nullable(),
      strMeasure18: z.string().nullable(),
      strMeasure19: z.string().nullable(),
      strMeasure20: z.string().nullable(),
      strSource: z.string().nullable(),
      strImageSource: z.string().nullable(),
      strCreativeCommonsConfirmed: z.string().nullable(),
      dateModified: z.string().nullable(),
    })
  )
})

export type allFoodCathegories = z.infer<typeof allFoodCathegories>;
export type singleFoodCathegory = z.infer<typeof singleFoodCathegory>;




export default function useFood() {

  const addFoodCathegory = useFoodStore(state =>state.addFoodCathegory)
  const addSingleFoodCathegory = useFoodStore(state => state.addSingleFoodCathegory)

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

  const fetchSingleCathegory = async (meal: string) => {

    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    const response = await fetch(URL)

    if (!response.ok) {
      throw new Error(`El error es: ${response.status}`);
    }

    const data = await response.json()
    const result = singleFoodCathegory.safeParse(data)
    
    if (result.success) {
      addSingleFoodCathegory(result.data)
    }

  }

  return {
    fetchFoodCathegories,
    fetchSingleCathegory
  };
}
