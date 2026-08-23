import z from "zod";

const sizeIngredientQuantitySchema = z.object({
  Id: z.string(),
  quantity: z
    .number()
    .min(1, { message: "Add at least 1 portion here!" })
});

export const sizeSchema = z.object({
  name: z
    .string()
    .min(5, { message: "Give this size a nice name (at least 5 characters)." }),

  price: z
    .number()
    .min(1, { message: "Price must be at least 1" }),

  sortOrder: z
    .number()
    .min(0),

  IngredientQuantities: z
    .array(sizeIngredientQuantitySchema)
    .nonempty({ message: "Pick at least one ingredient for this size!" }),
});

export const mealFormSchema = z.object({

  name: z
    .string()
    .min(5, "A bit too short! Name your dish in 5+ characters."),

  description: z
    .string()
    .min(10, { message: "Tell us a bit more — at least 10 characters!" })
    .max(500, { message: "Keep it snappy! Under 500 characters please." }),

  imgUrl: z
    .url("Please upload a photo for this dish"),

  ingredients: z
    .array(z.guid())
    .min(1, "Add at least one ingredient"),

  sizes: z
    .array(sizeSchema)
    .min(1,"Add at least one size option")

}).refine((data) => {
  const ingredientIds = new Set(data.ingredients);
  return data.sizes.every((size) =>
    size.IngredientQuantities.every((iq) => ingredientIds.has(iq.Id))
  );
}, {
  message: "Each size's ingredients must be a subset of the meal's ingredients",
  path: ["sizes"]
});


export type MealFormValues = z.infer<typeof mealFormSchema>;
export type SizeFormValues = z.infer<typeof sizeSchema>;
