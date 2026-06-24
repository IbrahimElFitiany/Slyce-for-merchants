import NutritionVisualizer from "@/features/menu/components/NutritionVisualizer"

function AddMealSizeModal({ onClose }: { onClose: () => void }) {

  onClose()

  return (
    <div className="fixed inset-0 m-auto w-fit h-fit bg-whitebg flex flex-col border-1 border-brand-grey rounded-3xl p-6 text-brand-black shadow-2xl ">

      <p className="font-bold text-2xl">Add new meal size</p>

      <div className="flex flex-row gap-x-5 justify-between my-5">

        <div className="flex flex-col gap-y-1 w-full">
          <label className="text-md font-bold">Name</label>
          <input
            type="text"
            placeholder="e.g.Medium"
            className="px-3 py-1.5 rounded-lg border border-brand-grey text-brand-black placeholder-text-grey focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        <div className="flex flex-col gap-y-1 w-full">
          <label className="text-md font-bold">Sort Order</label>
          <input
            type="text"
            placeholder="e.g.Medium"
            className="px-3 py-1.5 rounded-lg border border-brand-grey text-brand-black placeholder-text-grey focus:outline-none focus:border-accent transition-colors"
          />
        </div>

      </div>

      <p className="font-bold text-lg mt-3">Ingredients</p>

        <div className="flex flex-col">
          <div className="flex flex-row gap-x-5 justify-between my-5">

          <div className="flex gap-x-2 font-bold w-full">

            <div className="border-brand-grey border-1 w-17 aspect-square rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://api.campbellsmeat.com/wp-content/uploads/2021/03/16221106445ChickenBreastFilletRecipesChickenFilletRecipes-1.png"
                alt="Chicken Breast Fillet"
              />
            </div>
            <h1>Roasted Broiled or Baked Chicken Breast (Skin Not Eaten)</h1>
          </div>

          <div className="flex flex-col gap-y-1 w-full">

            <label className="text-md font-bold">Grams</label>
            <input
              type="number"
              placeholder="Enter how many grams"
              className="px-3 py-1.5 rounded-lg border border-brand-grey text-brand-black placeholder-text-grey focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

      </div>


      <NutritionVisualizer/>


    </div>
  )
}
export default AddMealSizeModal