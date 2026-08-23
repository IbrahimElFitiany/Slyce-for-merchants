import PlusIcon from '@/components/icons/PlusIcon';
import { MealIcon } from '@/components/icons/MealIcon';
import { EditIcon } from '@/components/icons/EditIcon';
import AddCategoryDrawer from './components/AddCategoryDrawer';
import AddMealDrawer from './components/AddMealDrawer/AddMealDrawer';
import MealItem from './components/MealItem';
import CategoryButton from './components/CategoryButton';
import EditCategoryDrawer from './components/EditCategoryDrawer';
import EditMealDrawer from './components/EditMealDrawer';
import useMenuPageDrawers from './hooks/useMenuPageDrawers';
import { useState } from 'react';
import { useMealMutations } from './hooks/useMealMutations';
import { useMenuQuery } from './hooks/useMenuQuery';

function MenuManagementPage() {

  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const {menu, isLoading, error} = useMenuQuery();
  const { handleMealDelete, invalidateMenu } = useMealMutations();

  const {
    activeModal,
    editingMeal,
    openEditMeal,
    openAddMeal,
    openAddCategory,
    openEditCategory,
    close
  } = useMenuPageDrawers();

  if (isLoading)
    return <MenuSkeleton/>

  if (error || !menu )
    return <div className="p-10 text-center text-red-500">Failed to load menu</div>;

  const isMenuEmpty = menu.length === 0;
  const selectedCategory = isMenuEmpty ? null : menu.find((cat) => cat.id === selectedCategoryId) ?? menu[0];
  const isCategoryEmpty = !isMenuEmpty && selectedCategory!.meals.length === 0;

  return (
    <div className="my-20 flex gap-x-5">

      <title>Slyce · Menu Management</title>

      {/* categories section */}
      <section className="flex w-2xs flex-col">

        <button
          className={
            `text-accent outline-brand-grey mb-6 flex cursor-pointer items-center justify-center gap-x-3 rounded-xl p-2 px-11 py-2 text-lg font-bold outline-1
            transition-colors duration-150 ease-in-out hover:outline-accent hover:text-dark-accent hover:bg-[#b6ffb9] hover:outline-2`
          }
          onClick={openAddCategory}
        >
          <PlusIcon />
          <span>Add category</span>
        </button>

        {/* categories list */}
        {!isMenuEmpty && (
          <section className="flex flex-col gap-y-2">
            {menu.map((category) => {
              const isSelected = category.id === selectedCategory!.id;
              return (
                <CategoryButton
                  key={category.id}
                  category={category}
                  isSelected={isSelected}
                  onClick={() => setSelectedCategoryId(category.id)}
                />
              );
            })}
          </section>
        )}

      </section>

      {/* Meals section */}
      {isMenuEmpty
      ? <section className="border-brand-grey flex w-4/6 flex-col items-center gap-y-4 rounded-3xl border-1 h-150 text-center">

          <header className="border-brand-grey flex w-full items-center justify-end border-b-1 px-6 py-5">

            <button
              className=" bg-brand-grey cursor-not-allowed rounded-full px-5 py-2 font-bold text-text-grey"
              disabled
            >
              Add product
            </button>
          </header>

          <div className="flex flex-1 flex-col items-center justify-center gap-y-4 px-10">
            <MealIcon className={"text-text-grey"} size={150}/>

            <div className="flex flex-col gap-y-1">
              <h1 className="text-brand-black text-xl font-bold">Your menu is empty</h1>
              <p className="text-text-grey font-semibold max-w-xs">
                Start by adding a category, then fill it in with your first product.
              </p>
            </div>
          </div>

        </section>
      : <section className="border-brand-grey flex w-4/6 flex-col rounded-3xl border-1 pb-2 h-fit">

          <header className="border-brand-grey flex justify-between border-b-1 px-6 py-5">

            <div className="flex items-center gap-x-4">

              <h1 className="text-brand-black text-2xl font-bold flex items-center justify-center leading-none">
                {selectedCategory!.name}
              </h1>

              <button
                className="border-brand-grey flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-1"
                onClick={openEditCategory}
              >
                <EditIcon />
              </button>
            </div>

            <button
              className="bg-accent cursor-pointer rounded-full p-2 font-bold text-white"
              onClick={openAddMeal}
            >
              Add product
            </button>
          </header>

          <section className="divide-brand-grey divide-y">
            {
            isCategoryEmpty
            ? <div className="flex flex-col items-center justify-center gap-y-3 py-16 text-center">

                <MealIcon className="text-text-grey" size={80} />
                <div className="flex flex-col gap-y-1">
                  <h2 className="text-brand-black font-bold">No products yet</h2>
                  <p className="text-text-grey text-sm font-semibold max-w-xs">
                    Add your first product to "{selectedCategory!.name}".
                  </p>
                </div>

              </div>
            : selectedCategory!.meals.map((meal) => (
                <MealItem
                  key={meal.id}
                  meal={meal}
                  onDelete={() => handleMealDelete(meal.id)}
                  onEdit={() => openEditMeal(meal)} />
              ))
            }
          </section>

        </section>
      }

      {/* ---------------------------drawers --------------------- */}

      {/* bug: no animation will handle it with framer motion or smth idk  */}
      {
        editingMeal &&
        <EditMealDrawer
          isOpen={activeModal === 'editMeal'}
          onClose={close}
          meal={editingMeal}/>
      }

      {
        selectedCategory &&
        <EditCategoryDrawer
          isOpen={activeModal === 'editCategory'}
          onClose={close}
          categoryName={selectedCategory.name}/>
      }

      {
        selectedCategory &&
        <AddMealDrawer
          isOpen={activeModal === 'addMeal'}
          onClose={close}
          categoryId={selectedCategory.id}/>
      }

      <AddCategoryDrawer
        isOpen={activeModal === 'addCategory'}
        onClose={close}
        onCategoryAdded={invalidateMenu}/>

    </div>
  );
}

export default MenuManagementPage;


function MenuSkeleton() {
  return (
    <div className="my-20 flex gap-x-5 animate-pulse">

      <div className="flex w-2xs flex-col">

        <div className="mb-6 h-[46px] w-full rounded-xl bg-gray-200" />

        <div className="flex flex-col gap-y-2">

          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-14 w-full rounded-xl bg-gray-200" />
          ))}

        </div>

      </div>

      <div className="border-brand-grey flex w-4/6 flex-col rounded-3xl border-1 pt-8 pb-2">

        <header className="border-brand-grey flex justify-between border-b-1 px-6 pb-6">
          <div className="flex items-center gap-x-4">
            <div className="h-8 w-40 rounded-md bg-gray-200" />
            <div className="h-8 w-8 rounded-full bg-gray-200" />
          </div>

          <div className="h-10 w-32 rounded-full bg-gray-200" />
        </header>

        <div className="divide-brand-grey divide-y">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-x-4">
                <div className="h-16 w-16 rounded-xl bg-gray-200" />
                <div className="flex flex-col gap-y-2">
                  <div className="h-5 w-36 rounded-md bg-gray-200" />
                  <div className="h-4 w-56 rounded-md bg-gray-200" />
                </div>
              </div>
              <div className="h-6 w-16 rounded-md bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}