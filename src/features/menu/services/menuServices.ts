import apiClient from "@/services/apiClient";
import type { Ingredient } from "../components/AddIngredientsModal";
import type { Category } from "../types";


export async function getMerchantMenu():Promise<Category[]> {

  const response = await apiClient.get("/merchant/menu")

  return response.data;

}

export async function searchIngredients(term:string, pageNumber = 1, pageSize = 20 ) : Promise<Ingredient[]>
{
  const res = await apiClient.get(`/food`, { params: { term, pageSize, pageNumber } });

  return res.data.items.map((item: any): Ingredient => ({
    id: item.id,
    image: item.imageUrl,
    name: item.name,
    nutritionPer100g: {
      calories: item.calories,
      fat: item.fat,
      protein: item.protein,
      carbs: item.carbs,
    },
  }));

}

export async function createCategory(name: string): Promise<Category> {

  const restaurantId = 123;

  const res = await apiClient.post(`/restaurants/${restaurantId}/categories`, {"name": name});
  return res.data;

}

export async function addNewMeal() {

  await apiClient.post("/meals")

}