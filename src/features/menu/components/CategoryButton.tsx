import { ChevronIcon } from "@/components/icons/ChevronIcon";
import type { Category } from "../types";

interface CategoryButtonProps {
  category: Category;
  isSelected: boolean;
  onClick: (cateogry:Category) => void;
}

function CategoryButton({ onClick, category, isSelected }: CategoryButtonProps)
{
  return (
    <div
      className={`cursor-pointer select-none flex border-1 px-3 py-2.5 rounded-xl justify-between items-center transition-color duration-200
        ${isSelected ? "border-dark-accent" : "border-brand-grey"}`}
        onClick={() => onClick(category)}
    >

      <div className="flex flex-col">
        <h1 className={`font-bold ${isSelected ? "text-dark-accent" : "text-brand-black"}`}>{category.name}</h1>
        <h1 className={`text-sm font-medium ${isSelected ? " text-accent" : "text-text-grey"}`}>{category.meals.length} Products</h1>
      </div>

      <ChevronIcon className={`${isSelected ? "text-accent": "text-brand-black"}`}/>

    </div>
  )
}

export default CategoryButton