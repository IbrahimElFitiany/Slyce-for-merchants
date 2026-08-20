import { CropIcon } from "@/components/icons/CropIcon"
import { SwapIcon } from "@/components/icons/SwapIcon"

interface ReplacePhotoProps {
  mealImage: string;
  mealName: string;
  onEdit: () => void;
  onReplace: () => void;
}

function ReplacePhoto({ mealImage, mealName, onEdit, onReplace }: ReplacePhotoProps) {

  return (
    <div className="flex items-stretch gap-x-5 rounded-2xl p-2 border-dashed border-1 w-full border-brand-grey overflow-hidden">

      {/* Image Container */}
      <div className="flex shrink-0 w-1/3 max-w-32 aspect-square justify-center items-center outline-1 outline-brand-grey rounded-xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={mealImage}
          alt={mealName}
        />
      </div>

      <div className="flex flex-col flex-1 min-w-0 w-0 h-full justify-end py-1 overflow-hidden">


        <div className="flex font-medium gap-x-2 shrink-0">
          <button
            type="button"
            onClick={onEdit}
            className="cursor-pointer flex gap-x-1 px-2.5 py-1 h-fit items-center border-1 border-brand-grey rounded-full"
          >
            <CropIcon size={20} />
            Edit
          </button>

          <button
            type="button"
            onClick={onReplace}
            className="cursor-pointer flex gap-x-1 px-2.5 py-1 h-fit items-center border-1 border-brand-grey rounded-full"
          >
            <SwapIcon size={20} />
            Replace
          </button>
        </div>

      </div>

    </div>
  )
}

export default ReplacePhoto