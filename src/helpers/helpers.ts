import { singleFoodCathegory } from "../hooks/useFood";

export const getIngredients = (meal: singleFoodCathegory['meals'][0]): string[] => {
   
    const ingredients: string[] = [];
    

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}` as keyof typeof meal]; 
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }
    
    return ingredients
  };