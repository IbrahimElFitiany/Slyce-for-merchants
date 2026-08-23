import type { Ingredient, SizeItem } from "@/features/menu/types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { EditIcon } from "@/components/icons/EditIcon";
import { TrashIcon } from "@/components/icons/TrashIcon";
import { DotsGridIcon } from "@/components/icons/DotsGridIcon";

interface SizeRowProps {
  index:number;
  size:SizeItem;
  onEditClick: (index: number) => void;
  onDeleteClick: (index: number)=> void;
  ingredients: Ingredient[]
}

function SizeRow ({ index, size, onEditClick, onDeleteClick, ingredients }: SizeRowProps ) {

  const {attributes, listeners, setNodeRef, transform, transition, isDragging} = useSortable({id: size.name})

  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }

  const totals = calculateSizeNutrition(size, ingredients);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center justify-between bg-whitebg p-3 gap-x-8 border border-brand-grey rounded-xl select-none duration-100
      ${ isDragging && "shadow-xl scale-[1.02] z-50 cursor-grabbing"}`}
    >

      <div className="flex flex-col gap-y-1">

        {/* name&price */}
        <div className="flex gap-x-2">

          <div
            {...attributes}
            {...listeners}
            className={`cursor-grab active:cursor-grabbing  py-1 ${isDragging && "bg-brand-grey/30"} hover:bg-brand-grey/30 rounded-md`}
          >
            <DotsGridIcon className="text-text-grey"/>
          </div>

          <div className='flex items-center gap-x-2'>
            <p className="font-medium">{size.name}</p>
            <p className="text-sm text-text-grey">{size.price} EGP</p>
          </div>

        </div>

        {/* nutritionSummary */}
        <div className="flex flex-wrap gap-x-1.5 text-text-grey text-xs font-medium tabular-nums">
          <span>{Math.round(totals.calories)} Kcal</span>
          <span>|</span>
          <span>Protein {Math.round(totals.protein)}g</span>
          <span>|</span>
          <span>Fat {Math.round(totals.fat)}g</span>
          <span>|</span>
          <span>Carbs {Math.round(totals.carbs)}g</span>
        </div>

      </div>


      {/* edit & deleteButtons */}
      <div className="flex items-center gap-x-2 shrink-0">

        <button
          type="button"
          className="cursor-pointer p-1.5 rounded-full border border-brand-grey"
          onClick={() => onEditClick(index)}
        >
          <EditIcon />
        </button>

        <button
          type="button"
          className="cursor-pointer hover:scale-105 hover:text-red-500 duration-200 flex h-full items-center border-1 border-brand-grey p-1.5 rounded-full"
          onClick={() => onDeleteClick(index)}
        >
          <TrashIcon />
        </button>

      </div>

    </div>
  );

}

function calculateSizeNutrition(size: SizeItem, ingredients: Ingredient[]) {
  return size.IngredientQuantities.reduce(
    (acc, iq) => {
      const ingredient = ingredients.find((i) => i.id === iq.Id);
      if (!ingredient) return acc;

      const factor = iq.quantity / 100;
      acc.calories += (ingredient.nutritionPer100g.calories || 0) * factor;
      acc.protein += (ingredient.nutritionPer100g.protein || 0) * factor;
      acc.fat += (ingredient.nutritionPer100g.fat || 0) * factor;
      acc.carbs += (ingredient.nutritionPer100g.carbs || 0) * factor;

      return acc;
    },
    { calories: 0, protein: 0, fat: 0, carbs: 0 }
  );
}


export default SizeRow