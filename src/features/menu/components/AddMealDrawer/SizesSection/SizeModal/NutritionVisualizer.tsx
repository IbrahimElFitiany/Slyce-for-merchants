interface MacroCircleProps {
  totalCalories:number,
  caloriesPerGram:number,
  grams: number
  color: string
  label: string
}

function MacroCircle({ totalCalories, caloriesPerGram, grams, color, label }: MacroCircleProps )
{
  const radius = 36
  const circumference = 2 * Math.PI * radius
  const percentage = totalCalories > 0 ? Math.round(((caloriesPerGram * grams) / totalCalories) * 100) : 0
  const stroke = ( percentage / 100) * circumference


  return (
    <div className="flex flex-col items-center gap-y-2">

      <div className="relative flex items-center justify-center w-24 h-24">

        <svg className="absolute rotate-[-90deg]" width="96" height="96" viewBox="0 0 96 96">

          {/* background track */}
          <circle cx="48" cy="48" r={radius} fill="none" stroke={color} strokeWidth="1" />

          {/* colored arc */}
          <circle
            cx="48" cy="48" r={radius}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeDasharray={`${stroke} ${circumference}`}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
          />

        </svg>

        <div className="flex flex-col items-center z-10">
          <p className="text-sm font-bold text-brand-black">{percentage}%</p>
          <p className="text-sm font-semibold text-brand-black">{grams}g</p>
        </div>

      </div>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  )
}


interface NutritionVisualizerProps {
  totalCalories:number,
  proteinGrams:number,
  carbGrams:number,
  fatGrams:number
}

function NutritionVisualizer({totalCalories,proteinGrams,carbGrams,fatGrams}:NutritionVisualizerProps) {

  const macroCalories = proteinGrams * 4 + fatGrams * 9 + carbGrams * 4;

  return (
    <div className="flex flex-col gap-y-2">

      <p className="font-bold text-lg text-brand-black">Nutrition Info</p>

      <div className="flex justify-between items-center gap-x-10 text-brand-black border border-brand-grey p-6 rounded-2xl">

        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold">{totalCalories} kcal</p>
          <p className="text-text-grey font-medium text-sm">Total Calories</p>
        </div>

        <div className="flex gap-x-5">
          <MacroCircle totalCalories={macroCalories} caloriesPerGram={4} grams={proteinGrams} color="#eab308" label="Protein" />
          <MacroCircle totalCalories={macroCalories} caloriesPerGram={9} grams={fatGrams} color="#22c55e" label="Fats" />
          <MacroCircle totalCalories={macroCalories} caloriesPerGram={4} grams={carbGrams} color="#f97316" label="Carbs" />
        </div>

      </div>

    </div>
  )
}

export default NutritionVisualizer