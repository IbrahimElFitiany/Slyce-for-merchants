// MenuManagementPage.tsx
import { useState } from 'react';

interface Ingredient {
  name: string;
  imageUrl?: string;
}

const mockIngredients: Ingredient[] = [
  {
    name: "Roasted Broiled or Baked Chicken Breast (Skin Not Eaten)",
    imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=100&h=100&fit=crop",
  },
  {
    name: "White Rice (Medium-Grain, Cooked)",
    imageUrl: "https://images.unsplash.com/photo-1516684669029-9eaea094d8d0?w=100&h=100&fit=crop",
  },
];

const MenuManagementPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // for demo purposes - open by default

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex-shrink-0">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-10">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
              P
            </div>
            <span className="text-xl font-semibold text-gray-800">forMerchant</span>
          </div>

          <nav className="space-y-1">
            {[
              "Dashboard",
              "Order History",
              "Subscriptions",
              "Promotions",
              "Payments",
              "Menu",
              "Opening Times",
              "Settings",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className={`flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors ${
                  item === "Menu Management" ? "bg-green-50 text-green-700 font-medium" : ""
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Menu Management</h1>

        {/* Search / Filter bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search meals..."
            className="w-full max-w-xl px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* Centered Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-xl font-bold text-gray-900">Add Ingredients</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  j
                </button>
              </div>

              {/* Modal Body - Two Columns Layout */}
              <div className="flex flex-1 overflow-hidden">
                {/* Left - Ingredients Search & Selection */}
                <div className="w-2/5 border-r flex flex-col">
                  <div className="p-5 border-b">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search ingredients and shape your meal..."
                        className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <svg
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </div>
                  </div>

                  <div className="p-5 flex-1 overflow-y-auto space-y-3">
                    {mockIngredients.map((ing) => (
                      <div
                        key={ing.name}
                        className="flex items-center gap-4 p-3 bg-gray-50 hover:bg-green-50 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-green-200 group"
                      >
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={ing.imageUrl}
                            alt={ing.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 group-hover:text-green-700 transition-colors line-clamp-2">
                            {ing.name}
                          </p>
                        </div>
                        <button className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors">
                          +
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - Meal Configuration */}
                <div className="w-3/5 flex flex-col">
                  <div className="p-8 flex-1 overflow-y-auto">
                    <h3 className="text-lg font-semibold mb-6">New Meal</h3>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. whatever"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Description
                        </label>
                        <textarea
                          placeholder="Make your meals irresistible by sharing the full story, how they're carefully crafted, the fresh ingredients and bold flavors, and the health-focused touches that make each dish unique."
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Category
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                          <option value="">Select a category</option>
                          <option value="main">Main Dish</option>
                          <option value="side">Side Dish</option>
                          <option value="salad">Salad</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Ingredients
                        </label>
                        <div className="flex flex-wrap gap-3">
                          {mockIngredients.map((ing) => (
                            <div
                              key={ing.name}
                              className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-800 rounded-full text-sm border border-green-200"
                            >
                              <span className="font-medium truncate max-w-[180px]">
                                {ing.name}
                              </span>
                              <button className="text-green-700 hover:text-red-600">
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Meal sizes define the portion size of each ingredient rather than changing the ingredient set.
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Sizes
                        </label>
                        <div className="h-32 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500">
                          Add available sizes (Small, Medium, Large...)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 border-t bg-gray-50 flex justify-end gap-4">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Cancel
                    </button>
                    <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                      Save Meal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuManagementPage;