function MealSizesComponenent() {
  return (
    <section id="meal-sizes-section" className="border border-brand-grey rounded-3xl px-8 py-6">

      <h2 className="text-2xl text-brand-black font-bold mb-4">Meal Sizes</h2>
      <div className="flex flex-col gap-4">
        {[1, 2].map((v) => (
          <div key={v} className="border border-brand-grey rounded-2xl p-5 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-brand-black">Size #{v}</h3>
              <button className="cursor-pointer border-1 border-brand-grey p-2 rounded-xl hover:scale-110 transition-all duration-200">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20L18.4199 20.2209C18.3074 21.2337 17.4512 22 16.4321 22H7.56786C6.54876 22 5.69264 21.2337 5.5801 20.2209L4 6Z" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.34491 3.14716C7.67506 2.44685 8.37973 2 9.15396 2H14.846C15.6203 2 16.3249 2.44685 16.6551 3.14716L18 6H6L7.34491 3.14716Z" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 6H22" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10 11V16" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 11V16" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Size Name</label>
                <input type="text" placeholder="e.g. Medium" className="w-full border border-gray-300 rounded-md p-2" />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Base Price</label>
                <input type="text" placeholder="$0.00" className="w-full border border-gray-300 rounded-md p-2" />
              </div>

              {/* Nutrition Lookup */}
              <div className="col-span-2">
                <label className="block text-sm text-gray-600 mb-1">Select from Food Database</label>
                <input
                  type="text"
                  placeholder="Search food database..."
                  className="w-full border border-gray-300 rounded-md p-2"
                />
                <p className="text-xs text-gray-500 mt-1">* Nutrition values will auto-fill from your backend</p>
              </div>

              <div className="grid grid-cols-4 gap-3 col-span-2">
                <div className="text-center border border-gray-200 rounded-md p-2">
                  <p className="text-xs text-gray-500">Calories</p>
                  <p className="font-medium">—</p>
                </div>
                <div className="text-center border border-gray-200 rounded-md p-2">
                  <p className="text-xs text-gray-500">Protein</p>
                  <p className="font-medium">—</p>
                </div>
                <div className="text-center border border-gray-200 rounded-md p-2">
                  <p className="text-xs text-gray-500">Fat</p>
                  <p className="font-medium">—</p>
                </div>
                <div className="text-center border border-gray-200 rounded-md p-2">
                  <p className="text-xs text-gray-500">Carbs</p>
                  <p className="font-medium">—</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 border border-gray-300 rounded-md px-4 py-2 text-sm">
        + Add Variant
      </button>
    </section>
  )
}
export default MealSizesComponenent
