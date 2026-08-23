import { TrashIcon } from "@/components/icons/TrashIcon";
import { ChevronIcon } from "@/components/icons/ChevronIcon";
import type { Ingredient } from "@/features/menu/types";

interface SelectedIngredientsProps {
  selectedIngredients: Ingredient[];
  onViewNutritionDetails: (ingredient: Ingredient) => void;
  onDelete: (id: string) => void;
}

function SelectedIngredients({selectedIngredients, onViewNutritionDetails, onDelete}:SelectedIngredientsProps) {

  return (
    <div className="overflow-y-auto w-[200%] max-h-92 self-start flex flex-col gap-y-2">
      {
        selectedIngredients.map(ingredient => {

          return(
            <div key={ingredient.id} className="flex gap-x-3 w-1/2 items-center p-1 rounded-full border-1 border-brand-grey">

              <div className="w-14 aspect-square shrink-0 rounded-full overflow-hidden border-1 border-brand-grey">
                <img
                  src={ingredient.image || "./images/placeholder.jpg"}
                  alt={ingredient.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex grow-1 flex-col justify-around leading-none">

                <h1 className="text-brand-black text-lg font-semibold line-clamp-1">{ingredient.name}</h1>

                <h2 className="text-text-grey font-medium text-xs">
                  Per 100g - Calories: {ingredient.nutritionPer100g.calories}Kcal | Fat: {ingredient.nutritionPer100g.fat}g | Protein: {ingredient.nutritionPer100g.protein}g | Carbs: {ingredient.nutritionPer100g.carbs}
                </h2>

              </div>

              <div className="flex gap-x-3 mx-3">

                <button
                  className="cursor-pointer hover:scale-105 hover:text-red-500 duration-200 flex h-full items-center border-1 border-brand-grey p-1.5 rounded-full"
                  onClick={() => onDelete(ingredient.id)}
                >
                  <TrashIcon/>
                </button>

                <button
                  className=" cursor-pointer hover:scale-105 hover:text-accent duration-200 flex h-full items-center border-1 border-brand-grey p-1.5 rounded-full"
                  onClick={() => onViewNutritionDetails(ingredient)}
                >
                  <ChevronIcon/>
                </button>

              </div>

            </div>

          )
        })
      }

    </div>
  )
}
export default SelectedIngredients