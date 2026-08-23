import Drawer from "@/components/common/Drawer";
import CloseIcon from "@/components/icons/CloseIcon";
import { ChevronIcon } from "@/components/icons/ChevronIcon";
import type { Meal } from "../types";


interface EditMealDrawerProps {
  meal:Meal;
  isOpen:boolean;
  onClose: () => void
}

function EditMealDrawer({isOpen, onClose, meal}: EditMealDrawerProps) {

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>

      <header className="flex items-baseline justify-between mt-6">

        <h1 className="text-brand-black font-bold text-2xl ">{meal.name}</h1>

        <button className="cursor-pointer rounded-full border-1 border-brand-grey p-2" onClick={onClose}> <CloseIcon size={20} /> </button>

      </header>

      <div className="flex flex-col">

        <div className="flex gap-x-2 mt-8 mb-4">

          <div>
          ✔
          </div>

          <div className="flex flex-col">

            <h1 className="text-accent font-bold">In stock</h1>
            <h2 className="text-xs text-text-grey font-medium">Customers can view, order and subscribe to this order during branch hours</h2>

          </div>

        </div>

        <button className="flex items-center justify-between cursor-pointer border-1 border-brand-grey rounded-full p-2 px-3">
          <h1 className="grow-1 font-bold text-brand-black">Manage status</h1>
          <ChevronIcon/>
        </button>

        <div className="border-b-1 border-brand-grey my-5"></div>

        <label htmlFor="">Name</label>
        <input type="text" placeholder={meal.name} className="border-brand-grey border-1 rounded-xl p-1.5"/>

        <label htmlFor="">Description</label>
        <input type="text" placeholder={meal.description} className="border-brand-grey border-1 rounded-xl p-1.5"/>

      </div>
    </Drawer>
  )
}

export default EditMealDrawer;