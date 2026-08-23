import { useEffect, useRef } from "react";
import type { Ingredient } from "@/features/menu/types";
import { MoonLoader } from "react-spinners";

interface IngredientSearchDropdownProps {
  isLoading: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => void;
  searchResult: Ingredient[];
  onSelect: (ingredient: Ingredient) => void;
}

function IngredientSearchDropdown({searchResult, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage, onSelect }: IngredientSearchDropdownProps) {

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = loadMoreRef.current;

    if (target === null || !hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <div className="absolute top-full left-0 right-0 mt-2 z-50 rounded-2xl border-1 border-brand-grey bg-whitebg shadow-lg overflow-hidden pr-1 pt-1.5">

      {isLoading
        ? <div className="flex justify-center items-center p-4">
            <MoonLoader size={26} loading={isLoading} />
          </div>
        : searchResult.length === 0
          ? <div className="px-3 py-2 text-sm text-text-grey">No items found</div>
          : <div className="flex flex-col gap-y-1 w-full max-h-90 overflow-y-auto px-1.5">

              {searchResult.map((ingredient) => (
                <ResultItem key={ingredient.id} onSelect={onSelect} ingredient={ingredient} />
              ))}

              {/* Sentinel element to trigger next page load */}
              <div ref={loadMoreRef} className="flex justify-center items-center">
                {isFetchingNextPage && <MoonLoader size={18} />}
              </div>
            </div>
      }
    </div>
  );
}

export default IngredientSearchDropdown;

function ResultItem({ onSelect, ingredient }: { onSelect: (ingredient: Ingredient) => void; ingredient: Ingredient;})
{
  return (
    <div
      onClick={() => onSelect(ingredient)}
      className="cursor-pointer hover:bg-[hsl(0,0%,89%)] rounded-xl flex gap-x-3 p-2 items-center transition-colors duration-300 min-w-0"
    >
      <div className="w-11 h-11 shrink-0 rounded-xl border-1 border-brand-grey overflow-hidden bg-white">
        <img
          src={ingredient.image || "./images/placeholder.jpg"}
          alt={ingredient.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center min-w-0">
        <h1 className="text-brand-black font-semibold text-sm md:text-base truncate">
          {ingredient.name}
        </h1>

        <h2 className="text-text-grey text-xs truncate">
          100g: {ingredient.nutritionPer100g.calories}kcal | Fats:{" "}
          {ingredient.nutritionPer100g.fat}g | Protein: {ingredient.nutritionPer100g.protein}g
          | Carbs: {ingredient.nutritionPer100g.carbs}g
        </h2>
      </div>
    </div>
  );
}