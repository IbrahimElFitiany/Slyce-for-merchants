import { useState } from "react";
import CloseIcon from "@/components/icons/CloseIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import { GroceryBasketIcon } from "@/components/icons/GroceryBasketIcon";
import SelectedIngredients from "./SelectedIngredients";
import IngredientSearchDropdown from "./IngredientSearchDropdown";
import type { Ingredient } from "@/features/menu/types";
import NutritionDetailsView from "./NutritionDetailsView";
import { ChevronIcon } from "@/components/icons/ChevronIcon";
import Modal from "@/components/common/Modal";
import useIngredientSearch from "@/features/menu/hooks/useIngredientSearch";

interface IngredientsModalProps {
  isOpen: boolean;
  selectedIngredients: Ingredient[]
  onClose: () => void;
  onAddIngredient: (ingredient: Ingredient) => void;
  onDelete: (ingredientId: string) => void;
}

function IngredientsModal({isOpen, selectedIngredients = [], onClose, onAddIngredient, onDelete}: IngredientsModalProps) {

  const [searchTerm, setSearchTerm] = useState("");
  const [activeView, setActiveView] = useState<"search" | "nutrition">("search");
  const [detailIngredientId, setDetailIngredientId] = useState<string | null>(null);

  const {isLoading, isFetchingNextPage, hasNextPage, fetchNextPage, searchResult, debouncedTerm} = useIngredientSearch(searchTerm, isOpen)

  const handleSelectIngredient = (ingredient: Ingredient) => {
    onAddIngredient(ingredient);
    setSearchTerm("");
  };

  const handleViewNutritionDetails = (ingredient: Ingredient) => {
    setDetailIngredientId(ingredient.id);
    setActiveView("nutrition");
  };

  const handleClose = () => {
    setSearchTerm("");
    setActiveView("search");
    setDetailIngredientId(null);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} zIndex={102} className="w-2xl">

      <div className="[clip-path:inset(-9999px_0_-9999px_0)]">
        <div
          className={`flex w-[200%] duration-300 ${
            activeView === "search" ? "translate-x-0" : "-translate-x-1/2"
          }`}
        >
          {/* search view */}
          <div className="w-1/2 flex flex-col items-center">

            <header className="w-full flex justify-between items-center">
              <h1 className="text-brand-black text-3xl font-bold">{selectedIngredients.length === 0 ?  "Add ingredients" : "Manage ingredients"}</h1>
              <button
                className="cursor-pointer p-1.5 border-1 border-brand-grey rounded-full"
                onClick={handleClose}
              >
                <CloseIcon />
              </button>
            </header>

            {/* search-bar */}
            <div className="self-start relative flex items-center p-2 gap-x-2 my-6 text-text-grey border-1 border-brand-grey rounded-full w-3/4">
              <SearchIcon />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search ingredients..."
                className="grow-1 placeholder:text-text-grey text-text-grey font-medium outline-0"
              />

              {debouncedTerm.trim().length > 0 && (
                <IngredientSearchDropdown
                  isLoading={isLoading}
                  isFetchingNextPage={isFetchingNextPage}
                  hasNextPage={!!hasNextPage}
                  fetchNextPage={fetchNextPage}
                  searchResult={searchResult}
                  onSelect={handleSelectIngredient}
                />
              )}
            </div>

            {selectedIngredients.length > 0 ? (
              <SelectedIngredients
                selectedIngredients={selectedIngredients}
                onViewNutritionDetails={handleViewNutritionDetails}
                onDelete={onDelete}
              />
            ) : (
              <EmptyIngredientsPlaceHolder />
            )}

            <h3 className="mt-10 text-xs text-text-grey">
              Meal sizes define the portion size of each ingredient rather than changing the ingredient set.
            </h3>
          </div>

          {/* nutritionDetailsView */}
          <div className="w-1/2 flex flex-col">
            <header className="w-full flex justify-between items-center">
              <button
                className="border-1 border-brand-grey rounded-full p-1.5"
                onClick={() => setActiveView("search")}
              >
                <ChevronIcon direction="left" />
              </button>

              <button
                className="cursor-pointer p-1.5 border-1 border-brand-grey rounded-full"
                onClick={handleClose}
              >
                <CloseIcon />
              </button>
            </header>

            {activeView === "nutrition" && detailIngredientId && (
              <NutritionDetailsView ingredientId={detailIngredientId} />
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default IngredientsModal;

function EmptyIngredientsPlaceHolder() {
  return (
    <div className="flex flex-col gap-y-5 my-10 items-center justify-center w-full min-h-14 h-fit text-text-grey">
      <GroceryBasketIcon size={58} />
      <div className="flex flex-col items-center">
        <p>Your ingredient list is empty.</p>
        <p>Type a search term above to find ingredients.</p>
      </div>
    </div>
  );
}