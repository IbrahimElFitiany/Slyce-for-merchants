import { useEffect, useMemo } from "react";
import { useForm, Controller, useWatch, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CurrencyInput from "react-currency-input-field";
import CloseIcon from "@/components/icons/CloseIcon";
import Modal from "@/components/common/Modal";
import type { Ingredient, SizeItem } from "@/features/menu/types";
import NutritionVisualizer from "./NutritionVisualizer";
import { sizeSchema, type SizeFormValues } from "@/features/menu/schemas/addMealForm.schema";

interface MealSizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSize?: SizeItem;
  onSubmit: (size: SizeItem) => void;
  ingredients: Ingredient[];
}

function MealSizeModal({ isOpen, onClose, initialSize, onSubmit: onAdd, ingredients }: MealSizeModalProps) {

  const { register, handleSubmit, reset, control, formState: { errors } } = useForm<SizeFormValues>({
    resolver: zodResolver(sizeSchema),
    mode: "onBlur",
    defaultValues: {
      name: initialSize?.name ?? "",
      price: initialSize?.price ?? 0,
      sortOrder: initialSize?.sortOrder ?? 0,
      IngredientQuantities: initialSize?.IngredientQuantities ?? [],
    },
  });

  useEffect(() => {
  if (isOpen) {
    reset({
      name: initialSize?.name ?? "",
      price: initialSize?.price ?? 0,
      sortOrder: initialSize?.sortOrder ?? 0,
      IngredientQuantities: initialSize?.IngredientQuantities ?? [],
    });
  }
  }, [isOpen, initialSize, reset])

  const { fields: IngredientQuantities, append, update } = useFieldArray({control, name: "IngredientQuantities"});

  // live values for calculating totals
  const watchedQuantities = useWatch({ control, name: "IngredientQuantities" }) || [];

  // helper: find this ingredient's current grams value (0 if not present in the array yet)
  const getGramsFor = (ingredientId: string) => {
    const entry = watchedQuantities.find((q) => q.Id === ingredientId);
    return entry?.quantity ?? 0;
  };

  // helper: set grams for an ingredient — updates existing entry, or appends a new one
  const setGramsFor = (ingredientId: string, grams: number) => {

    const index = IngredientQuantities.findIndex((i) => i.Id === ingredientId);
    if (index >= 0) {
      update(index, { Id: ingredientId, quantity: grams });
    } else {
      append({  Id: ingredientId, quantity: grams });
    }
  };

  const totals = useMemo(() => {
    return ingredients.reduce(
      (acc, i) => {
        const grams = getGramsFor(i.id);
        const factor = grams / 100;

        acc.calories += (i.nutritionPer100g?.calories || 0) * factor;
        acc.protein += (i.nutritionPer100g?.protein || 0) * factor;
        acc.fat += (i.nutritionPer100g?.fat || 0) * factor;
        acc.carbs += (i.nutritionPer100g?.carbs || 0) * factor;

        return acc;
      },
      { calories: 0, protein: 0, fat: 0, carbs: 0 }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ingredients, watchedQuantities]);

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = (data: SizeFormValues) => {

    const size: SizeItem = {
      name: data.name.trim(),
      price: data.price,
      sortOrder: data.sortOrder,
      IngredientQuantities: data.IngredientQuantities.filter((q) => q.quantity > 0),
    };

    onAdd(size);
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} zIndex={102} className="w-3xl">

      <header className="flex justify-between items-center">

        <p className="font-bold text-3xl">
          {initialSize ? "Edit meal size" : "Add new meal size"}
        </p>

        <button
          type="button"
          className="cursor-pointer p-1.5 rounded-full border border-brand-grey"
          onClick={onClose}
        >
          <CloseIcon />
        </button>

      </header>

      <form id="meal-size-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">

        <div className="flex flex-col gap-y-4">

          <div className="flex flex-row gap-x-5 justify-between items-start">

            <div className="flex flex-col gap-y-1 w-full">

              <label className="text-lg font-bold">Name</label>
              <input
                type="text"
                placeholder="e.g. Medium"
                {...register("name")}
                className={`px-3 py-1.5 rounded-lg border text-brand-black placeholder-text-grey focus:outline-none transition-colors
                  ${errors.name ? "border-red-500" : "border-brand-grey focus:border-accent"}`
                }
              />
              {errors.name && (
                <p className="text-xs text-red-500 font-medium">{errors.name.message}</p>
              )}

            </div>

            <div className="flex flex-col gap-y-1 w-full">
              <label className="text-lg font-bold">Price</label>

              <Controller
                name="price"
                control={control}
                render={({ field }) => (
                  <div
                    className={`flex items-center px-3 py-1.5 rounded-lg border transition-colors ${
                      errors.price ? "border-red-500" : "border-brand-grey focus-within:border-accent"
                    }`}
                  >
                    <CurrencyInput
                      placeholder="0.00"
                      allowNegativeValue={false}
                      decimalsLimit={2}
                      value={field.value}
                      onValueChange={(val) => field.onChange(val ? parseFloat(val) : 0)}
                      onBlur={field.onBlur}
                      className="w-full text-brand-black placeholder-text-grey focus:outline-none bg-transparent"
                    />
                    <div className="flex items-center gap-x-2 text-text-grey select-none pl-2 shrink-0">
                      <span>|</span>
                      <span className="text-sm font-medium">EGP</span>
                    </div>
                  </div>
                )}
              />
              {errors.price && (
                <p className="text-xs text-red-500 font-medium">{errors.price.message}</p>
              )}
            </div>

          </div>

          <div>

            <div className="flex justify-between items-center my-3">

              <p className="font-bold text-lg">Ingredients</p>
              {errors.IngredientQuantities?.message && (
                <p className="text-xs text-red-500 font-medium">
                  {String(errors.IngredientQuantities.message)}
                </p>
              )}

            </div>

            <div className="flex flex-col gap-y-3">

              {ingredients.map((i) => (
                <div key={i.id} className="flex justify-between items-center">

                  <div className="flex items-center gap-x-2 font-bold">

                    <div className="w-13 h-13 rounded-xl border border-brand-grey overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={i.image?.length ? i.image : "/images/placeholder.jpg"}
                        alt={i.name}
                      />
                    </div>

                    <div>
                      <h1>{i.name}</h1>
                      <div className="flex flex-wrap gap-x-1.5 text-text-grey text-xs font-medium tabular-nums">
                        <span>{i.nutritionPer100g?.calories ?? 0} Kcal</span>
                        <span>|</span>
                        <span>Fat {i.nutritionPer100g?.fat ?? 0}g</span>
                        <span>|</span>
                        <span>Protein {i.nutritionPer100g?.protein ?? 0}g</span>
                        <span>|</span>
                        <span>Carbs {i.nutritionPer100g?.carbs ?? 0}g</span>
                      </div>
                    </div>

                  </div>

                  <input
                    type="number"
                    min="0"
                    placeholder="Enter grams"
                    value={getGramsFor(i.id) || ""}
                    onChange={(e) => {
                      const val = e.target.value;
                      const grams = val === "" ? 0 : Math.max(0, parseFloat(val) || 0);
                      setGramsFor(i.id, grams);
                    }}
                    className="px-3 py-1.5 rounded-lg border border-brand-grey text-brand-black placeholder-text-grey focus:outline-none focus:border-accent transition-colors "
                  />

                </div>
              ))}

            </div>
          </div>

          <NutritionVisualizer
            totalCalories={Math.round(totals.calories)}
            proteinGrams={Math.round(totals.protein)}
            fatGrams={Math.round(totals.fat)}
            carbGrams={Math.round(totals.carbs)}
          />
        </div>

      </form>

      <footer className="-mx-6 -mb-3 pt-3 px-6 border-t border-brand-grey flex justify-end">

        <div className="flex justify-end gap-x-3 w-1/3">

          <button
            type="button"
            onClick={handleClose}
            className="cursor-pointer flex-1 border border-brand-grey rounded-full py-2 font-bold"
          >
            Cancel
          </button>

          <button
            form="meal-size-form"
            type="submit"
            // disabled={!isValid}
            className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex-1 flex items-center justify-center bg-accent text-white rounded-full py-2 font-bold"
          >
            {initialSize ? "Save" : "Add"}
          </button>

        </div>

      </footer>

    </Modal>
  );
}

export default MealSizeModal;