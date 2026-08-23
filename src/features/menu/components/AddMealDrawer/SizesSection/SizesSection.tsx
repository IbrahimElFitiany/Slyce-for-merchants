import PlusIcon from '@/components/icons/PlusIcon';
import type { Ingredient, SizeItem } from '../../../types';
import { closestCenter, DndContext, type DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis, restrictToParentElement } from '@dnd-kit/modifiers';
import SizeRow from './SizeRow';

interface SizesSectionProps {
  sizesError: boolean;
  sizes: SizeItem[];
  ingredients: Ingredient[];
  onOrderChange: (newSizes: SizeItem[]) => void;
  onAddClick: () => void;
  onEditClick: (index: number) => void;
  onDeleteClick: (index: number) => void;
  error?:string;
}

function SizesSection({ sizes, sizesError, ingredients, onOrderChange, onAddClick, onEditClick, onDeleteClick, error}: SizesSectionProps) {

  const getSizesPos = (name:string) => sizes.findIndex(size => size.name === name )

  const handleDragEnd = (event: DragEndEvent) => {

    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const originalPos = getSizesPos(active.id.toString());
    const newPos = getSizesPos(over.id.toString());

    const updatedSizes = arrayMove(sizes, originalPos, newPos);
    onOrderChange(updatedSizes);
  };


  return (
    <section className="flex flex-col gap-y-2">

      <h2 className="font-bold text-xl">Sizes</h2>

      <div className={`flex flex-col border border-brand-grey rounded-2xl p-3 gap-y-3
        ${sizesError && "animate-shake border-red-500"}
        ${error && "border-red-500"}
        `}>
        {
          (sizes.length === 0)
          ? <EmptyState onAddClick={onAddClick} sizesError={sizesError} />
          : <div className='flex flex-col gap-y-2'>

              <div>
                <DndContext
                  onDragEnd={handleDragEnd}
                  modifiers={[restrictToVerticalAxis, restrictToParentElement]}
                  collisionDetection={closestCenter}
                >

                  <SortableContext
                    strategy={verticalListSortingStrategy}
                    items={sizes.map((item) => item.name)}
                  >
                    <div className='flex flex-col gap-y-2'>
                      {
                        sizes.map((size, index) =>
                          <SizeRow
                            key={size.name}
                            index={index}
                            ingredients={ingredients}
                            size={size}
                            onDeleteClick={onDeleteClick}
                            onEditClick={onEditClick}
                          /> )
                      }
                    </div>

                  </SortableContext>

                </DndContext>
              </div>

              <button
                  type='button'
                  className="w-full hover:brightness-105 duration-300 text-md py-1.5 rounded-lg bg-accent text-whitebg font-bold cursor-pointer mt-2"
                  onClick={onAddClick}
                >
                  Add
             </button>

            </div>

        }
      </div>

      <span className="text-xs text-red-500 font-medium">{error}</span>

    </section>

  );
}

export default SizesSection;

function EmptyState({onAddClick, sizesError}:{ onAddClick: () => void, sizesError:boolean }) {

  return (
    <div className="flex flex-col items-center">

      <button
        type="button"
        className={`flex items-center border-3 text-text-grey border-brand-grey p-3 my-4 rounded-full cursor-pointer
          ${sizesError && " border-red-200"}`}
        onClick={onAddClick}
      >
        <PlusIcon className={`${sizesError && "text-red-500 border-red-400"}`} />
      </button>

      <h3 className="text-lg font-semibold text-brand-black">No Sizes added yet</h3>

      <p className="text-sm font-medium text-text-grey">
        Click the add button to add sizes for this meal
      </p>

    </div>
  );
}