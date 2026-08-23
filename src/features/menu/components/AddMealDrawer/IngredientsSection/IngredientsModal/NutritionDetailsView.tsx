import { useQuery } from "@tanstack/react-query";
import { getFoodDetails } from "@/features/menu/services/menuServices";
import { MoonLoader } from "react-spinners";


const DAILY_VALUES = {
  fat: 78,
  saturatedFat: 20,
  cholesterol: 300,
  sodium: 2300,
  carbs: 275,
  dietaryFiber: 28,
} as const;

function toDV(amount: number, nutrient: keyof typeof DAILY_VALUES): number {
  return Math.round((amount / DAILY_VALUES[nutrient]) * 100);
}

interface NutritionDetailsViewProps {
  ingredientId: string;
}

function NutritionDetailsView({ ingredientId }: NutritionDetailsViewProps) {

  const { data: food, isLoading } = useQuery({
    queryKey: ["food", ingredientId],
    queryFn: () => getFoodDetails(ingredientId),
    enabled: !!ingredientId,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-10">
        <MoonLoader size={26} />
      </div>
    );
  }

  if (!food) return null;

  const macros = food.nutritionPer100g;

  const rows = [
    { name: 'Total Fat', value: `${macros.fat}g`, dv: `${toDV(macros.fat, 'fat')}%`, bold: true },
    { name: 'Saturated Fat', value: `${macros.saturatedFat}g`, dv: `${toDV(macros.saturatedFat, 'saturatedFat')}%`, indent: true },
    { name: 'Trans Fat', value: `${macros.transFat}g`, dv: '', indent: true },
    { name: 'Cholesterol', value: `${macros.cholesterol}mg`, dv: `${toDV(macros.cholesterol, 'cholesterol')}%`, bold: true },
    { name: 'Sodium', value: `${macros.sodium}mg`, dv: `${toDV(macros.sodium, 'sodium')}%`, bold: true },
    { name: 'Total Carbohydrate', value: `${macros.carbs}g`, dv: `${toDV(macros.carbs, 'carbs')}%`, bold: true },
    { name: 'Dietary Fiber', value: `${macros.dietaryFiber}g`, dv: `${toDV(macros.dietaryFiber, 'dietaryFiber')}%`, indent: true },
    { name: 'Total Sugars', value: `${macros.sugars}g`, dv: '', indent: true },
    { name: 'Protein', value: `${macros.protein}g`, dv: '', bold: true },
  ];

  return (
    <div className="w-full text-brand-black p-3 text-sm">

      <h1 className="text-4xl font-extrabold border-b-8 border-brand-black pb-1 leading-none">
        Nutrition Facts
      </h1>

      <div className="border-b border-brand-black py-1">
        <p className="font-bold">Serving Size 100g</p>
        <p>Serving Per Container 1</p>
      </div>

      <div className="border-b-8 border-brand-black py-1">
        <p className="font-bold">Amount Per Serving</p>
        <div className="flex justify-between items-end">
          <p className="text-3xl font-extrabold leading-none">Calories <span className="font-medium text-4xl">{macros.calories}</span></p>
          <p className="text-xs">Calories from Fat {macros.caloriesFromFat}</p>
        </div>
      </div>

      <div className="border-b border-brand-black text-right font-bold text-xs py-1">
        % Daily Value*
      </div>

      <div className="space-y-1">
        {rows.map((item, index) => (
          <div key={index} className={`${item.indent ? 'pl-4 border-t border-brand-black/20' : 'border-t border-brand-black'} flex justify-between py-0.5`}>
            <p className={item.bold ? 'font-bold' : ''}>{item.name} {item.value}</p>
            <p className="font-bold text-right w-12">{item.dv}</p>
          </div>
        ))}
      </div>

      <div className="border-t-8 border-brand-black pt-2 space-y-1 text-xs">
        <div className="flex justify-between"><span>Vitamin A {macros.vitaminA}%</span> <span>Vitamin C {macros.vitaminC}%</span></div>
        <div className="flex justify-between"><span>Calcium {macros.calcium}%</span> <span>Iron {macros.iron}%</span></div>
      </div>

      <p className="text-[10px] leading-tight pt-2">
        *Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.
      </p>
    </div>
  );
}

export default NutritionDetailsView;