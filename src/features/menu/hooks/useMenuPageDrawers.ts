import { useState } from 'react';
import type { Meal } from '../types';

type ActiveModal = 'addMeal' | 'addCategory' | 'editCategory' | 'editMeal' | null;

function useMenuPageDrawers() {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [editingMeal, setEditingMeal] = useState<Meal | null>(null);

  const openAddCategory = () => setActiveModal('addCategory');
  const openAddMeal = () => setActiveModal('addMeal');
  const openEditCategory = () => setActiveModal('editCategory');
  const openEditMeal = (meal: Meal) => {
    setEditingMeal(meal);
    setActiveModal('editMeal');
  };
  const close = () => setActiveModal(null);

  return {
    activeModal,
    editingMeal,
    openAddCategory,
    openAddMeal,
    openEditCategory,
    openEditMeal,
    close,
  };
}

export default useMenuPageDrawers;