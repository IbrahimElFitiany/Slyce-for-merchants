function MacroCircle({ percentage, grams, color, label }: {
  percentage: number
  grams: number
  color: string
  label: string
}) {
  const radius = 36
  const circumference = 2 * Math.PI * radius
  const stroke = (percentage / 100) * circumference

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

function NutritionVisualizer() {
  return (
    <div className="flex flex-col gap-y-3">

      <p className="font-semibold text-brand-black">Nutrition Info</p>

      <div className="text-brand-black flex border border-brand-grey p-8 justify-between items-center rounded-2xl">

        <div className="flex flex-col">
          <p className="text-4xl font-bold">472 kcal</p>
          <p className="text-gray-400 text-sm">Total Calories</p>
        </div>

        <div className="flex gap-x-6">
          <MacroCircle percentage={25} grams={32} color="#eab308" label="Protein" />
          <MacroCircle percentage={10} grams={12} color="#22c55e" label="Fats" />
          <MacroCircle percentage={65} grams={56} color="#f97316" label="Carbs" />
        </div>

      </div>
    </div>
  )
}

export default NutritionVisualizer