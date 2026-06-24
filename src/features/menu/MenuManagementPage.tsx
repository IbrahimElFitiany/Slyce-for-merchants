import AddMealSideBar from "@/features/menu/components/AddMealSideBar";
import { Toggle } from "@/components/common/Toggle";
import { ChevronRightIcon } from "@/components/icons/ChevronRightIcon";
import { useState } from "react";

type Category = {
  id: string;
  name: string;
  productsCount: number;
};

type Meal = {
  id: string;
  categoryId: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  imageUrl: string;
  isAvailable:boolean;
};

function MenuManagementPage() {

  const categories: Category[] = [
      { id:"9814f5fc-b6a1-452e-ba63-c1e0028ee3dd",  name: "Protein Box", productsCount: 5 },
      { id:"d464151b-10d8-4902-9541-3de8957b0c95", name: "Breakfast", productsCount: 2 },
      { id:"445ab385-8fda-4929-8757-d2b39da114ed", name: "Juices", productsCount: 6 },
  ];

  const meals: Meal[] = [
      // --- PROTEIN BOX MEALS ---
      {
        id: "m1",
        categoryId: "9814f5fc-b6a1-452e-ba63-c1e0028ee3dd",
        name: "Teriyaki Chicken Box",
        price: 240.00,
        currency: "EGP",
        description: "Grilled chicken breast with teriyaki glaze, brown rice, and steamed broccoli.",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
        isAvailable: true
      },
      {
        id: "m2",
        categoryId: "9814f5fc-b6a1-452e-ba63-c1e0028ee3dd",
        name: "Flank Steak & Quinoa",
        price: 345.00,
        currency: "EGP",
        description: "Lean flank steak served with tricolor quinoa and roasted asparagus.",
        imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80",
        isAvailable: true
      },
      {
        id: "m3",
        categoryId: "9814f5fc-b6a1-452e-ba63-c1e0028ee3dd",
        name: "Salmon Power Bowl",
        price: 380.00,
        currency: "EGP",
        description: "Pan-seared Atlantic salmon, sweet potato mash, and fresh spinach.",
        imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&q=80",
        isAvailable: false // Out of stock example
      },
      {
        id: "m4",
        categoryId: "9814f5fc-b6a1-452e-ba63-c1e0028ee3dd",
        name: "Garlic Herb Tofu Box",
        price: 195.00,
        currency: "EGP",
        description: "Organic baked tofu blocks, wild rice mix, and roasted zucchini.",
        imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80",
        isAvailable: true
      },
      {
        id: "m5",
        categoryId: "9814f5fc-b6a1-452e-ba63-c1e0028ee3dd",
        name: "Shrimp Rice Box",
        price: 290.00,
        currency: "EGP",
        description: "Cajun-spiced shrimp over white jasmine rice with mixed green peppers.",
        imageUrl: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=500&q=80",
        isAvailable: true
      },

      // --- BREAKFAST MEALS ---
      {
        id: "m6",
        categoryId: "d464151b-10d8-4902-9541-3de8957b0c95",
        name: "Avocado Sourdough Toast",
        price: 140.00,
        currency: "EGP",
        description: "Crushed avocado, cherry tomatoes, and microgreens on toasted artisanal sourdough.",
        imageUrl: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=500&q=80",
        isAvailable: true
      },
      {
        id: "m7",
        categoryId: "d464151b-10d8-4902-9541-3de8957b0c95",
        name: "Protein Pancakes",
        price: 165.00,
        currency: "EGP",
        description: "Oat-based protein pancakes topped with fresh blueberries and organic maple syrup.",
        imageUrl: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&q=80",
        isAvailable: true
      },

      // --- JUICES ---
      {
        id: "m8",
        categoryId: "445ab385-8fda-4929-8757-d2b39da114ed",
        name: "Green Cleanse",
        price: 75.00,
        currency: "EGP",
        description: "Cold-pressed celery, green apple, cucumber, kale, and lemon juice.",
        imageUrl: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=500&q=80",
        isAvailable: true
      },
      {
        id: "m9",
        categoryId: "445ab385-8fda-4929-8757-d2b39da114ed",
        name: "Citrus Ginger Blast",
        price: 70.00,
        currency: "EGP",
        description: "Freshly squeezed oranges, carrots, ginger root, and turmeric powder.",
        imageUrl: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&q=80",
        isAvailable: true
      },
      {
        id: "m10",
        categoryId: "445ab385-8fda-4929-8757-d2b39da114ed",
        name: "Berry Antioxidant Shaker",
        price: 85.00,
        currency: "EGP",
        description: "Blended strawberries, raspberries, blackberries, and coconut water.",
        imageUrl: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&q=80",
        isAvailable: false // Out of stock example
      }
    ];

  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);
  const [isModalOpen ,setIsModalOpen] = useState<boolean>(false)

  return (
    <div className="flex gap-x-5 mx-10 my-20 h-full">

      <div id="categories section" className="w-2xs flex flex-col">

        <button className="flex gap-x-3 px-11 py-2 border-1 text-accent text-lg border-brand-grey rounded-xl p-2 font-bold mb-6">
          <h1>+</h1>
          <h1>Add Category</h1>
        </button>

        <div id="categories" className="flex flex-col gap-y-2">

          {categories.map((cat) => {

            const isSelected = cat.id === selectedCategory.id;

            return (
              <div
                key={cat.id}
                className={`flex border-1 px-3 py-2.5 rounded-xl justify-between ${isSelected ? "border-dark-accent" : "border-brand-grey"}`}>

                <div className="flex flex-col">
                  <h1 className={`font-bold ${isSelected ? "text-dark-accent" : "text-brand-black"}`}>{cat.name}</h1>
                  <h1 className={`text-sm font-medium ${isSelected ? " text-accent" : "text-text-grey"}`}>{cat.productsCount} Products</h1>
                </div>

                <button
                  className="cursor-pointer mx-1"
                  onClick={()=> setSelectedCategory(cat)}
                >
                    <ChevronRightIcon className={`${isSelected ? "text-accent": "text-brand-black"}`}/>
                </button>

              </div>
            )
          })}

        </div>

      </div>

      <div id="meals in category" className="h-full w-4/6 flex flex-col py-8 border-brand-grey border-1 rounded-3xl">

        <div id="header" className="flex justify-between px-6 pb-6">

          <div className="flex gap-x-4">
            <h1 className="font-bold text-brand-black text-2xl">{selectedCategory.name}</h1>

            <button className="flex items-center justify-center cursor-pointer border-1 w-8 h-8 border-brand-grey rounded-full">
              <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z" fill="#333333"></path> </g></svg>
            </button>

          </div>

          <button
            className="cursor-pointer rounded-full p-2 bg-accent font-bold text-white"
            onClick={() => {setIsModalOpen(true); console.log(isModalOpen)}}
            >Add Product</button>
        </div>

        {meals.filter(m => m.categoryId === selectedCategory.id).map((meal) => {

          return (
          <div id="meal" className="flex px-6 py-4 border-t-1 border-brand-grey justify-between">

            <div key={meal.id} className="flex gap-x-3">

              <div id="img" className="rounded-xl border-1 border-brand-grey aspect-square h-24 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={meal.imageUrl} alt={meal.name} />
              </div>

              <div className="flex flex-col gap-y-1">
                <h1 className="text-brand-black font-bold text-xl">{meal.name}</h1>
                <p className="text-text-grey font-semibold text-sm w-2/3">{meal.description}</p>
              </div>

            </div>

            <div className="flex flex-col justify-around items-end">
              <button>
                <Toggle checked={meal.isAvailable} onChange={() => {true}} />
              </button>

              <div className="flex gap-x-1 items-baseline">
                <h1 className="text-brand-black font-bold text-2xl">{meal.price.toFixed(2)}</h1>
                <h1 className="text-text-grey font-semibold text-sm">{meal.currency}</h1>
              </div>

            </div>

          </div>)
        })}

      </div>

      <AddMealSideBar isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>

  )
}
export default MenuManagementPage