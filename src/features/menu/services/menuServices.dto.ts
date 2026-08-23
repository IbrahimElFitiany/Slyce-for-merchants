export interface IngredientQuantityDto {
  ingredientId: string;
  quantity: number;
}

export interface CreateMealSizeDto {
  name: string;
  price: number;
  sortOrder: number;
  IngredientQuantities: IngredientQuantityDto[];
}

export interface CreateMealRequest {
  categoryId: string;
  name: string;
  description: string;
  imgUrl: string;
  ingredients: string[]; // List of ingredient UUIDs
  sizes: CreateMealSizeDto[];
}


export interface GetMerchantMenuResponseDto {
  menu: MenuCategoryDto[];
}

export interface MenuCategoryDto {
  categoryId: string;
  name: string;
  meals: MealDto[];
}

export interface MealDto {
  mealId: string;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number | null;
  priceCurrency: string;
  lowestCalorieOption: number;
  imgUrl: string;
  reviewed: boolean;
}