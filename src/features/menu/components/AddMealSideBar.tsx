import { useState } from "react"
import AddMealSizeModal from "@/features/menu/components/AddMealSizeModal"


type AddMealSideBarProps = {
  isOpen: boolean;
  onClose: () => void;
};

function AddMealSideBar({isOpen, onClose}: AddMealSideBarProps) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  onClose();

  return (
    <div className="flex items-start">

      <div className={
        `fixed top-0 right-0 flex flex-col text-brand-black bg-whitebg px-8 shadow-2xl h-screen w-1/4 overflow-y-auto ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>

        <div className="flex flex-col gap-y-3 border-b-1 border-brand-grey my-6 py-5">
          <h1 className="text-3xl font-bold">New Meal</h1>
          <h3 className="text-sm text-text-grey font-medium">
            You still can edit the availability of this item after saving
          </h3>
        </div>

        <div className="flex flex-col gap-y-3 w-full mb-6">
          <label htmlFor="name" className="text-xl font-bold">Name</label>
          <input
            id="name"
            type="text"
            placeholder="eg. whatever"
            className="w-full px-4 py-2 border border-brand-grey rounded-xl placeholder-text-grey outline-none focus:border-accent transition-colors"
          />
        </div>

        <div className="flex flex-col gap-y-3 w-full mb-6">
          <label htmlFor="description" className="text-xl font-bold">Description</label>
          <textarea
            id="description"
            rows={5}
            placeholder="Make your meals irresistible..."
            className="w-full px-4 py-3 border border-brand-grey rounded-xl placeholder-text-grey outline-none focus:border-accent transition-colors resize-none"
          />
        </div>

        <div className="flex flex-col gap-y-3 w-full mb-6">
          <label htmlFor="category" className="text-xl font-bold">Category</label>
          <select
            id="category"
            defaultValue=""
            className="w-full px-4 py-3 border border-brand-grey rounded-xl outline-none focus:border-accent cursor-pointer"
          >
            <option value="" disabled hidden>Select a category</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>

        <h2 className="font-bold text-xl mb-3">Ingredients</h2>

        <div className="flex flex-col border border-brand-grey rounded-2xl p-3 gap-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer bg-accent rounded-xl text-whitebg font-bold py-1 px-2"
          >
            Add
          </button>

          <div className="flex items-center gap-3">
            <img
              className="w-14 h-14 object-cover rounded-xl"
              src="https://cdn.loveandlemons.com/wp-content/uploads/2020/03/how-to-cook-rice.jpg"
              alt="Cooked rice in a bowl"
            />
            <p className="font-medium">White Rice (Medium-Grain, Cooked)</p>
          </div>
        </div>

      </div>

      {isModalOpen && (
        <AddMealSizeModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  )
}

export default AddMealSideBar