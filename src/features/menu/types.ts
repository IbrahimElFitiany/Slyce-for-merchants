export interface Meal {
  id:string;
  name: string;
  description: string;
  imageUrl: string;
  reviewed: boolean;
  price: number;
  currency: string;
};

export interface SizeItem {
  name: string;
  price: number;
  sortOrder: number;
  IngredientQuantities: { Id: string; quantity: number }[];
}


export interface Category {
  id: string;
  name: string;
  meals: Meal[];
}

export interface MerchantMenu {
  menu: Category[];
}

export interface NutritionInfo {
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

export interface Ingredient {
  id: string;
  name: string;
  image: string;
  nutritionPer100g: NutritionInfo;
}

export interface FoodDetails {
  id: string;
  name: string;
  imageUrl: string;
  nutritionPer100g: {
    calories: number;
    caloriesFromFat: number;
    fat: number;
    saturatedFat: number;
    transFat: number;
    cholesterol: number;
    sodium: number;
    carbs: number;
    dietaryFiber: number;
    sugars: number;
    protein: number;
    vitaminA: number;
    vitaminC: number;
    calcium: number;
    iron: number;
  };
}