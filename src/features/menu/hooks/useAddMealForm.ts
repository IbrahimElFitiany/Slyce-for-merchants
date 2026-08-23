import { useForm, useFieldArray } from "react-hook-form";
import type { Ingredient, SizeItem } from "../types";
import {mealFormSchema, type MealFormValues}  from "../schemas/addMealForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export function useAddMealForm() {

  // using full Objs for UI , and string[] for the form
  const [selectedIngredients, setSelectedIngredients ]  = useState<Ingredient[]>([]);

  const { register, reset: resetForm, getValues, setValue, watch, handleSubmit, formState: {errors, isValid}, setError, clearErrors, control } = useForm<MealFormValues>({
    resolver: zodResolver(mealFormSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      description: "",
      imgUrl: "",
      ingredients: [],
      sizes: [],
    },
  });

  const formValues = watch();

  const { fields: sizeFields, append: appendSize, update: updateSize, remove: removeSize } = useFieldArray({ control, name: "sizes" });


  const handleImageUrlChange = (url: string) => {
    setValue("imgUrl", url, { shouldDirty: true });
  };

  // ingredients functions
  const handleAddIngredient = (ingredient: Ingredient) => {

    const ingredientExists = selectedIngredients.some((i) => i.id === ingredient.id)

    if (ingredientExists) return;

    const currentSizes = getValues("sizes");

    if (currentSizes && currentSizes.length > 0) {

      const updatedSizes = currentSizes.map((size) => ({
        ...size,
        IngredientQuantities: [
          ...(size.IngredientQuantities || []),
          { Id: ingredient.id, quantity: 0 },
        ],
      }));

      setValue("sizes", updatedSizes, { shouldDirty: true, shouldValidate: true });
    }

    setValue("ingredients", [...getValues("ingredients"), ingredient.id], {shouldDirty: true, shouldValidate: true})
    setSelectedIngredients((prev) => [...prev, ingredient]);
  };

  const handleDeleteIngredient = (ingredientId: string) => {

    const isDeletingLastIngredient =  selectedIngredients.length === 1 && selectedIngredients[0].id === ingredientId;

    // if the being deleted ingredient is a single ingredient , then delete all affected sizes
    if (isDeletingLastIngredient){

      const confirmDelete = window.confirm("Removing this ingredient will clear all meal sizes, since a meal needs at least one ingredient. Continue?");
      if (!confirmDelete) return;

      setValue("sizes", [])
      setValue("ingredients", [])
      setSelectedIngredients([])
      return;
    }

    const currentSizes = getValues("sizes");

    const affectedSizes = currentSizes.filter((size) => {
      return size.IngredientQuantities.some( (ingredient) => ingredient.Id === ingredientId && ingredient.quantity > 0);
    });

    if (affectedSizes.length > 0) {

      const sizeNames = affectedSizes.map((s) => s.name || "Unnamed Size").join(", ");

      const confirmDelete = window.confirm(
        `This ingredient is active in the following size(s): ${sizeNames}.\n\n` +
        `Removing it will clear its quantity from those sizes. Are you sure you want to continue?`
      );

      if (!confirmDelete) return;
    }


    // 3. Remove ingredient entirely from affected sizes
    const updatedSizes = currentSizes.map((size) => ({
      ...size,
      IngredientQuantities: (size.IngredientQuantities || []).filter(
        (iq) => iq.Id !== ingredientId
      ),
    }));

    setValue("sizes", updatedSizes, { shouldDirty: true, shouldValidate: true });

    const updatedIds = getValues("ingredients").filter((id) => id !== ingredientId);

    setValue("ingredients", updatedIds, { shouldDirty: true, shouldValidate: true });

    setSelectedIngredients((prev) => prev.filter((i) => i.id !== ingredientId));
  };

  // sizes functions
  const handleAddSize = (size: SizeItem) => appendSize(size);

  const handleUpdateSize = (index: number, size: SizeItem) => updateSize(index, size);

  const handleDeleteSize = (index: number) => removeSize(index);

  const handleSizesReorder = (newSizes: SizeItem[]) => {

    const resequenced = newSizes.map((size, index) => ({
      ...size,
      sortOrder: index,
    }));

    setValue("sizes", resequenced, { shouldDirty: true });
  };


  const handleCancel = () => {
    resetForm();
    setSelectedIngredients([]);
  };

  return {
    register,
    formValues,

    errors,
    setError,
    clearErrors,

    isValid,
    selectedIngredients,
    sizeFields,
    handleSubmit,

    handleDeleteIngredient,
    handleAddIngredient,

    handleAddSize,
    handleUpdateSize,
    handleDeleteSize,
    handleSizesReorder,

    handleImageUrlChange,
    handleCancel,
  };
}

export default useAddMealForm;