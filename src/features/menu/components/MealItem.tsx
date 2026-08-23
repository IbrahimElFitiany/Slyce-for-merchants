import { EditIcon } from "@/components/icons/EditIcon";
import { TrashIcon } from "@/components/icons/TrashIcon";
import type { Meal } from "../types";
import { formatCurrency } from "@/utils/formatters";

interface MealItemProps {
  meal: Meal;
  onDelete: () => void;
  onEdit: () => void;
};

function MealItem({ meal, onDelete, onEdit }: MealItemProps)
{
  return (
    <div className="flex justify-between px-6 py-4">

      {/* left section */}
      <div className="flex gap-x-3">

        {/* img */}
        <div className="shrink-0 rounded-xl border-1 border-brand-grey h-24 aspect-square overflow-hidden">
          <img className="w-full h-full object-cover" src={meal.imageUrl} alt={meal.name} />
        </div>

        {/* name & desc */}
        <div className="flex flex-col gap-y-1">

          <div className="flex items-center gap-x-2">

            <h1 className="text-brand-black font-bold text-xl">{meal.name}</h1>

            {
              !meal.reviewed &&
                <div className="flex items-center px-2 py-0.5 h-fit rounded-lg text-sm font-bold text-[#e63d3d] bg-[#f7e6de]">
                  Pending approval
                </div>
            }

          </div>

          <p className="text-text-grey font-semibold text-sm w-2/3">{meal.description}</p>
        </div>

      </div>

      {/* right section */}
      <div className="flex flex-col justify-between items-end">

        <div className="flex items-center justify-between gap-x-6">

          <button
            onClick={ onEdit}
            className="cursor-pointer border-1 border-brand-grey p-1.5 rounded-full transition-colors duration-200 hover:bg-[hsl(39,37%,95%)]">
            <EditIcon size={18}/>
          </button>

          <button
            className="cursor-pointer border-1 border-brand-grey p-1.5 rounded-full transition-colors duration-200 hover:bg-[hsl(39,37%,95%)] hover:text-red-600"
            onClick={onDelete}
          >
            <TrashIcon size={18}/>
          </button>

        </div>

        <div id="price-section" className="flex flex-col">

          <h2 className="text-text-grey text-sm font-semibold">From</h2>

          <div className="flex gap-x-1 items-baseline">
            <h1 className="text-brand-black font-bold text-2xl leading-none">{formatCurrency(meal.price)}</h1>
            <h1 className="text-text-grey font-semibold text-sm leading-none">{meal.currency}</h1>
          </div>

        </div>

      </div>

    </div>
  )
}

export default MealItem