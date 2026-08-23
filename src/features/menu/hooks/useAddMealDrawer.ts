import { useState } from "react";
import useAddMealForm from "./useAddMealForm";
import { useMealMutations } from "./useMealMutations";
import type { SizeItem } from "../types";

type ActiveModal = "addSize" | "addIngredient" | "editImage" | null;

interface UseAddMealDrawerArgs {
  categoryId: string;
  onClose: () => void;
}

export function useAddMealDrawer({ categoryId, onClose }: UseAddMealDrawerArgs) {

  const [activeModal, setActiveModal] = useState<ActiveModal>(null);

  const [selectedImage, setSelectedImage] = useState<File|null>(null);
  const [sizesError, setSizesError] = useState(false);

  const [editingSizeIndex, setEditingSizeIndex] = useState<number | null>(null);

  const form = useAddMealForm();
  const { addMealMutation, isAddingMeal } = useMealMutations();


  const handleDrawerCancel = () => {
    form.handleCancel();
    closeModal();
    onClose();
  };

  const closeModal = () => {
    setActiveModal(null);
    setEditingSizeIndex(null);
  };


  // image functions
  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
    setActiveModal("editImage");
  };

  const handleImageSubmit = (modifiedImage: string) => {
    form.handleImageUrlChange(modifiedImage);
    closeModal();
  };

  const handleEditImage = () => {
    if (form.formValues.imgUrl) {
      setActiveModal("editImage");
    }
  };




  const handleEditSize = (index: number) => {
    setEditingSizeIndex(index);
    setActiveModal("addSize");
  };

  const handleDeleteSize = (index: number) => form.handleDeleteSize(index);

  const handleOpenSizeModal = () => {

    if (form.selectedIngredients.length === 0) {

      setSizesError(true);
      setTimeout(() => setSizesError(false), 500);

      form.setError("sizes", {
        type: "manual",
        message: "Please add at least one ingredient before creating a size.",
      });

      return;
    }

    // Clear manual error if requirements are now met
    form.clearErrors("sizes");
    setEditingSizeIndex(null);
    setActiveModal("addSize");
  };

  const handleSaveSize = (size: SizeItem) => {
    if (editingSizeIndex !== null) {
      form.handleUpdateSize(editingSizeIndex, size);
    } else {
      form.handleAddSize(size);
    }
    closeModal();
  };

  const handleFormSubmit = form.handleSubmit((values) => {
    console.log("form errors:", form.errors);
    addMealMutation(
      { ...values, categoryId },
      {
        onSuccess: () => {
          form.handleCancel();
          onClose();
        },
      }
    );
  });

  return {
    form,
    activeModal,
    editingSizeIndex,
    isAddingMeal,
    closeModal,
    handleImageSelect,
    selectedImage,
    openIngredientModal: () => setActiveModal("addIngredient"),
    handleImageSubmit,
    handleDrawerCancel,
    handleOpenSizeModal,
    handleDeleteSize,
    handleEditSize,
    handleSaveSize,
    handleEditImage,
    handleFormSubmit,
    sizesError,
  };
}

export default useAddMealDrawer;