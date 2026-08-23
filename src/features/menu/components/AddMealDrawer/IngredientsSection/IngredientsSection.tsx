import PlusIcon from '@/components/icons/PlusIcon';
import type { Ingredient } from '@/features/menu/types';


interface IngredientsSectionProps {
  ingredients: Ingredient[];
  onAddClick: () => void;
  error?:string
}

function IngredientsSection({ ingredients, onAddClick, error }: IngredientsSectionProps) {

  return (
    <section className="flex flex-col gap-y-2">

      <h2 className="font-bold text-xl">Ingredients</h2>

      <div className={`flex flex-col border rounded-2xl p-3 gap-y-3 ${error ? "border-red-500" : "border-brand-grey"}`}>

        {ingredients.length === 0
          ? <div className="flex flex-col items-center">
              <button
                type="button"
                className="flex items-center border-3 text-text-grey border-brand-grey p-3 my-4 rounded-full cursor-pointer"
                onClick={onAddClick}
              >
                <PlusIcon />
              </button>
              <h3 className="text-lg font-semibold text-brand-black">No Ingredients added yet</h3>
              <p className="text-sm font-medium text-text-grey">
                Click the add button to add ingredients to this meal
              </p>
            </div>
          : <div className="flex flex-col gap-y-2">
              {ingredients.map((i) => <SelectedIngredient key={i.id} ingredient={i}/>)}

              <button
                type='button'
                className="w-full hover:brightness-105 duration-300 text-md py-1.5 rounded-lg bg-accent text-whitebg font-bold cursor-pointer mt-2"
                onClick={onAddClick}
              >
                Edit
              </button>
            </div>
        }

      </div>

      <span className="text-xs text-red-500 font-medium">{error}</span>
    </section>
  );
}

export default IngredientsSection;



function SelectedIngredient({ ingredient } :{ingredient:Ingredient}) {

  return (
    <div className="flex border-1 border-brand-grey p-2 rounded-xl gap-3">
      <img
        className="w-14 h-14 object-cover rounded-xl border border-brand-grey"
        src={(ingredient.image.length === 0 ? "./images/placeholder.jpg" : ingredient.image)}
        alt={ingredient.name}
      />

      <div className='flex flex-col flex-1 min-w-0'>
        <p className="font-medium truncate">{ingredient.name}</p>
        <h2 className="text-text-grey text-xs truncate">
          100g: {ingredient.nutritionPer100g.calories}kcal | Fats: {ingredient.nutritionPer100g.fat}g | Protein: {ingredient.nutritionPer100g.protein}g | Carbs: {ingredient.nutritionPer100g.carbs}g
        </h2>
      </div>

    </div>
  )
}