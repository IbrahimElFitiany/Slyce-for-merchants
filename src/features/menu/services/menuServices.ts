import apiClient from "@/services/apiClient";
import type { Category, FoodDetails, Ingredient, Meal, MerchantMenu } from "../types";
import type { CreateMealRequest, GetMerchantMenuResponseDto, MealDto, MenuCategoryDto } from "./menuServices.dto";


const mapMealDtoToMeal = (dto: MealDto): Meal => ({
  id: dto.mealId,
  name: dto.name,
  description: dto.description,
  price: dto.originalPrice,
  currency: dto.priceCurrency,
  imageUrl: dto.imgUrl,
  reviewed: dto.reviewed,
});

const mapCategoryDtoToCategory = (dto: MenuCategoryDto): Category => ({
  id: dto.categoryId,
  name: dto.name,
  meals: (dto.meals ?? []).map(mapMealDtoToMeal),
});

export async function getMerchantMenu(): Promise<MerchantMenu> {

  const response = await apiClient.get<GetMerchantMenuResponseDto>('/merchant/menu');

  return {
    menu: response.data.menu.map(mapCategoryDtoToCategory),
  };
}


export interface PaginatedIngredients {
  items: Ingredient[];
  nextPage: number | null;
}

export async function searchIngredients(
  term: string,
  pageNumber = 1,
  pageSize = 20
): Promise<PaginatedIngredients> {
  const res = await apiClient.get("/food", { params: { term, pageSize, pageNumber } });

  const rawItems = res.data?.items ?? [];
  const hasNext = res.data?.hasNext ?? false;
  const currentPage = res.data?.currentPage ?? pageNumber;

  const items: Ingredient[] = rawItems.map((item: any) => ({
    id: item.id,
    name: item.name,
    image: item.imageUrl ?? "",
    nutritionPer100g: {
      calories: item.calories ?? 0,
      fat: item.fat ?? 0,
      carbs: item.carbs ?? 0,
      protein: item.protein ?? 0,
    },
  }));

  return {
    items,
    nextPage: hasNext ? currentPage + 1 : null,
  };
}

export async function createCategory(name: string): Promise<Category> {

  const restaurantId = 123;

  const res = await apiClient.post(`/restaurants/${restaurantId}/categories`, {"name": name});
  return res.data;

}

export async function addNewMeal (data: CreateMealRequest): Promise<void> {
  await apiClient.post("/meals", data);
};

export async function  getFoodDetails (foodId: string): Promise<FoodDetails> {
  const res = await apiClient.get(`/food/${foodId}`);
  const item = res.data;
  const macros = item.nutritionPer100g ?? {};

  return {
    id: item.id,
    name: item.name,
    imageUrl: item.imageUrl ?? "",
    nutritionPer100g: {
      calories: macros.calories ?? 0,
      caloriesFromFat: macros.caloriesFromFat ?? 0,
      fat: macros.fat ?? 0,
      saturatedFat: macros.saturatedFat ?? 0,
      transFat: macros.transFat ?? 0,
      cholesterol: macros.cholesterol ?? 0,
      sodium: macros.sodium ?? 0,
      carbs: macros.carbs ?? 0,
      dietaryFiber: macros.dietaryFiber ?? 0,
      sugars: macros.sugars ?? 0,
      protein: macros.protein ?? 0,
      vitaminA: macros.vitaminA ?? 0,
      vitaminC: macros.vitaminC ?? 0,
      calcium: macros.calcium ?? 0,
      iron: macros.iron ?? 0,
    },
  };
};

export async function deleteMeal(mealId:string) {
  await apiClient.delete(`/meals/${mealId}`)
}

export async function uploadMealImage(localImageUrl: string): Promise<string> {

  await new Promise((resolve) => setTimeout(resolve, 500));
  return localImageUrl;
}