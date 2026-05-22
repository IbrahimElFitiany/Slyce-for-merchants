import Header from "../../../components/AppHeader";
import MealInformationComponenent from "../components/MealInformationComponenent";
import MealSizesComponenent from "../components/MealSizesComponenent";
import SideBar from "../../../components/SideBar";

function AddMenuItemPage() {
  return (
    <div className="flex font-[InterVariable] bg-whitebg">
      <SideBar/>
      <div className="flex flex-col flex-1">
        <Header/>
        <main className="flex-1 px-10 font-[InterVariable]">
          {/* Main Content */}
          <div className="mt-6 grid grid-cols-3 gap-8">
            {/* Left Section */}
            <div className="col-span-2 flex flex-col gap-8">
              <MealInformationComponenent/>
              <MealSizesComponenent/>
              {/* Tags / Preferences */}
              <section className="border border-gray-200 rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Meal Preferences</h2>

                <div className="flex flex-wrap gap-2">
                  {["Chicken", "Meat", "Vegan", "High Protein", "Low Carb"].map((tag) => (
                    <button key={tag} className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:bg-green-100">
                      {tag}
                    </button>
                  ))}
                </div>

                <button className="mt-4 border border-gray-300 rounded-md px-4 py-2 text-sm">
                  + Add New Preference
                </button>
              </section>

              {/* Allergies */}
              <section className="border border-gray-200 rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Allergies</h2>

                <div className="flex flex-wrap gap-2">
                  {["Nuts", "Dairy", "Gluten", "Soy", "Eggs"].map((allergy) => (
                    <button key={allergy} className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:bg-red-100">
                      {allergy}
                    </button>
                  ))}
                </div>

                <button className="mt-4 border border-gray-300 rounded-md px-4 py-2 text-sm">
                  + Add New Allergy
                </button>
              </section>

              {/* Add-ons */}
              <section className="border border-gray-200 rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Add-ons & Extras</h2>
                <div className="flex flex-col gap-3">
                  {["Extra Cheese", "Fries", "Soft Drink"].map((extra) => (
                    <div key={extra} className="flex items-center justify-between border border-gray-300 rounded-md p-3">
                      <p>{extra}</p>
                      <input type="checkbox" />
                    </div>
                  ))}
                </div>
                <button className="mt-4 border border-gray-300 rounded-md px-4 py-2 text-sm">
                  + Add New Extra
                </button>
              </section>
            </div>

            <div className="flex flex-col gap-8">
              <section id="image-upload" className="border-1 border-brand-grey rounded-3xl p-6">
                <h2 className="text-lg font-semibold mb-4">Upload Image</h2>
                <div className="w-full h-48 border border-gray-300 rounded-md flex items-center justify-center text-gray-400 mb-4">
                  <span>Image Placeholder</span>
                </div>
                <button className="border border-gray-300 rounded-md px-4 py-2 w-full text-sm">Upload Image</button>
              </section>
            </div>
          </div>
        </main>
      </div>

    </div>
  );
}

export default AddMenuItemPage;
