import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMeal, addNewMeal } from '../services/menuServices';
import type { SizeItem } from '../types';

interface AddMealArgs {
  categoryId: string;
  name: string;
  description: string;
  imgUrl: string;
  ingredients: string[];
  sizes: SizeItem[];
}

export function useMealMutations() {

  const queryClient = useQueryClient();

  const invalidateMenu = () => {
    queryClient.invalidateQueries({ queryKey: ['menu'] });
  };

  const { mutate: deleteMealMutation } = useMutation({
    mutationFn: (mealId: string) => deleteMeal(mealId),
    onSuccess: invalidateMenu,
    onError: (error) => {
      console.error("Failed to delete meal:", error);
    },
  });

  const { mutate: addMealMutation, isPending: isAddingMeal } = useMutation({
    mutationFn: (args: AddMealArgs) =>
      addNewMeal({
        categoryId: args.categoryId,
        name: args.name,
        description: args.description,
        imgUrl: args.imgUrl,
        ingredients: args.ingredients,
        sizes: args.sizes,
      }),
    onSuccess: invalidateMenu,
    onError: (error) => {
      console.error("Failed to add meal:", error);
    },
  });


  const handleMealDelete = (mealId: string) => {
    if (window.confirm("Are you sure you want to delete this meal?")) {
      deleteMealMutation(mealId);
    }
  };

  return { handleMealDelete, addMealMutation, isAddingMeal, invalidateMenu };
}