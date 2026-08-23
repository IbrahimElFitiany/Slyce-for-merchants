import { MoonLoader } from "react-spinners";
import Drawer from "@/components/common/Drawer";
import CloseIcon from "@/components/icons/CloseIcon";
import { InfoCircleIcon } from "@/components/icons/InfoCircleIcon";
import { useAddMealDrawer } from "../../hooks/useAddMealDrawer";
import PhotoSection from "./ImageSection/PhotoSection";
import IngredientsSection from "./IngredientsSection/IngredientsSection";
import SizesSection from "./SizesSection/SizesSection";
import IngredientsModal from "./IngredientsSection/IngredientsModal/IngredientsModal";
import MealSizeModal from "./SizesSection/SizeModal/MealSizeModal";
import ImagePreviewModal from "./ImageSection/ImagePreview/ImagePreviewModal";

interface AddMealDrawerProps {
  categoryId: string;
  isOpen: boolean;
  onClose: () => void;
}

function AddMealDrawer({ categoryId, isOpen, onClose }: AddMealDrawerProps) {

  const drawer = useAddMealDrawer({ categoryId, onClose });
  const { form } = drawer;

  console.log(form.formValues)
  console.log(form.errors)
  console.log(form.errors.sizes)

  return (
    <Drawer className="max-w-lg" isOpen={isOpen} onClose={onClose}>

      <header className="flex flex-col gap-y-3 border-b-1 border-brand-grey my-6 py-5">
        <div className="flex items-end justify-between">
          <h1 className="text-3xl font-bold">Add new meal</h1>
          <button
            type="button"
            className="cursor-pointer p-1.5 rounded-full border-1 border-brand-grey"
            disabled={drawer.isAddingMeal}
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex items-center gap-x-1 text-sm text-text-grey font-medium">
          <InfoCircleIcon size={16} />
          <h3>You still can edit the availability of this item after saving</h3>
        </div>
      </header>

      <form id="add-meal-form" onSubmit={drawer.handleFormSubmit} className="flex-1 flex flex-col gap-y-4">

        <div className="flex flex-col gap-y-2">
          <label className="text-xl font-bold">Name</label>
          <input
            {...form.register("name")}
            type="text"
            placeholder="Give this dish a name..."
            className={`w-full px-2.5 py-2 border border-brand-grey rounded-xl placeholder-text-grey outline-none focus:border-accent transition-colors
              ${form.errors.name && "border-red-500"}`}
          />
          {form.errors.name && <span className="text-sm text-red-500 ">{form.errors.name.message}</span> }
        </div>

        <div className="flex flex-col gap-y-2">

          <label className="text-xl font-bold">Description</label>
          <textarea
            {...form.register("description")}
            placeholder="What makes this dish special? Ingredients, craft, health perks."
            rows={4}
            className={`w-full px-2.5 py-2 border border-brand-grey rounded-xl placeholder-text-grey outline-none focus:border-accent transition-colors
            ${form.errors.description && "border-red-500"}`}
          />

          {form.errors.description && <span className="text-sm text-red-500">{form.errors.description.message}</span> }

        </div>

        <PhotoSection
          imgUrl={form.formValues.imgUrl}
          mealName={form.formValues.name}
          onImageSelect={drawer.handleImageSelect}
          onEditImage={drawer.handleEditImage}
          error={form.errors.imgUrl?.message}
        />

        <IngredientsSection
          ingredients={form.selectedIngredients}
          onAddClick={drawer.openIngredientModal}
          error={form.errors.ingredients?.message}
        />

        <SizesSection
          sizes={form.sizeFields}
          sizesError={drawer.sizesError}
          ingredients={form.selectedIngredients}
          onOrderChange={form.handleSizesReorder}
          onAddClick={drawer.handleOpenSizeModal}
          onDeleteClick={drawer.handleDeleteSize}
          onEditClick={drawer.handleEditSize}
          error={form.errors.sizes?.message}
        />

      </form>

      <footer className="sticky bottom-0 bg-whitebg -mx-8 mt-10 px-8 py-4 border-t border-brand-grey">
        <div className="flex gap-x-3">
          <button
            type="button"
            className="cursor-pointer flex-1 border border-brand-grey rounded-full py-2 font-bold"
            onClick={drawer.handleDrawerCancel}
            disabled={drawer.isAddingMeal}
          >
            Cancel
          </button>

          <button
            type="submit"
            form="add-meal-form"
            disabled={drawer.isAddingMeal}
            className={`cursor-pointer disabled:cursor-not-allowed flex-1 flex items-center justify-center bg-accent text-white rounded-full py-2 font-bold ${
              drawer.isAddingMeal ? "bg-accent/70" : ""
            }`}
          >
            {drawer.isAddingMeal ? <MoonLoader size={20} color="#ffffff" /> : "Add"}
          </button>
        </div>
      </footer>


      {drawer.selectedImage && (
        <ImagePreviewModal
          isOpen={drawer.activeModal === "editImage"}
          mealImage={drawer.selectedImage}
          mealName={form.formValues.name}
          onClose={drawer.closeModal}
          onSubmit={drawer.handleImageSubmit}
        />
      )}

      <IngredientsModal
        isOpen={drawer.activeModal === "addIngredient"}
        selectedIngredients={form.selectedIngredients}
        onClose={drawer.closeModal}
        onAddIngredient={form.handleAddIngredient}
        onDelete={form.handleDeleteIngredient}
      />

      <MealSizeModal
        initialSize={
        drawer.editingSizeIndex !== null
          ? form.sizeFields[drawer.editingSizeIndex]
          : undefined
        }
        isOpen={drawer.activeModal === "addSize"}
        ingredients={form.selectedIngredients}
        onClose={drawer.closeModal}
        onSubmit={drawer.handleSaveSize}
      />

    </Drawer>
  );
}

export default AddMealDrawer
