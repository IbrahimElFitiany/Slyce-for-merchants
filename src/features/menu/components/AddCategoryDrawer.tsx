import { useForm } from "react-hook-form";
import Drawer from "@/components/common/Drawer";
import { createCategory } from "../services/menuServices";
import { InfoCircleIcon } from "@/components/icons/InfoCircleIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { useMutation } from "@tanstack/react-query";
import { MoonLoader } from "react-spinners";



interface FormValues {
  name: string;
}

interface AddCategoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCategoryAdded: () => void;
}

function AddCategoryDrawer({ isOpen, onClose, onCategoryAdded }: AddCategoryDrawerProps) {

  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors:formErrors }
  } = useForm<FormValues>({ mode: "onSubmit" });

  const { mutate, isPending, error, reset: resetMutation } = useMutation({
    mutationFn: (categoryName: string) => createCategory(categoryName),
    onSuccess: () => {
      onCategoryAdded();
      resetForm();
      onClose();
    }
  });

  const handleCancel = () => {
    resetMutation();
    resetForm();
    onClose();
  };

  const onSubmit = (data: FormValues) => {
    mutate(data.name.trim());
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>

      <header className="flex flex-col gap-y-3 border-b-1 border-brand-grey my-6 py-5">
        <div className="flex items-end justify-between">
          <h1 className="text-3xl font-bold">Add new category</h1>
          <button
            className="cursor-pointer p-1.5 rounded-full border-1 border-brand-grey disabled:opacity-75 disabled:cursor-not-allowed disabled:text-text-grey"
            disabled={isPending}
            onClick={onClose}>
            <CloseIcon/>
          </button>
        </div>
        <div className="flex items-center gap-x-1 text-text-grey ">
          <InfoCircleIcon size={16}/>
          <h3 className="text-xs font-medium"> You still can edit the name of this category after saving </h3>
        </div>
      </header>

      <form id="add-category-form" className="flex-1 flex flex-col gap-y-3 w-full mb-6" onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="name" className="text-xl font-bold">Name</label>

        {formErrors.name &&
          <p className="flex items-center gap-x-1 text-red-500 text-xs font-medium">
            <InfoCircleIcon size={14}/>
            {formErrors.name.message}
          </p>
        }

        {error &&
          <p className="flex items-center gap-x-1 text-red-500 text-xs font-medium">
            <InfoCircleIcon size={14}/>
            {"Failed to create category. Please try again later."}
          </p>
        }

        <input
          id="name"
          type="text"
          disabled={isPending}
          placeholder="e.g. Breakfast"
          {...register("name", {
            required: "You must type a category name",
            validate: (value) => value.trim().length > 0 || "You must type a category name",
            onChange: () => { if (error) resetMutation(); }
          })}
          className={`w-full px-4 py-2 border-1 rounded-xl placeholder-text-grey outline-none transition-colors disabled:opacity-50 disabled:bg-brand-grey/20 disabled:cursor-not-allowed ${
            formErrors.name
              ? "border-red-500 focus:border-red-500"
              : "border-brand-grey focus:border-accent"
          }`}
        />

      </form>

      <footer className="sticky bottom-0 bg-whitebg -mx-8 mt-10 px-8 py-4 border-t border-brand-grey">
        <div className="flex gap-x-3">
          <button
            className="cursor-pointer disabled:cursor-not-allowed disabled:text-text-grey flex-1 border border-brand-grey rounded-full py-2 font-bold"
            onClick={handleCancel}
            disabled={isPending}
          >
            Cancel
          </button>

          <button
            type="submit"
            form="add-category-form"
            className={`cursor-pointer disabled:cursor-not-allowed flex-1 flex items-center justify-center bg-accent text-white rounded-full py-2 font-bold ${isPending && "bg-accent/70"}`}
            disabled={isPending}
          >
            {isPending ? <MoonLoader size={20}/> : "Add"}
          </button>
        </div>
      </footer>

    </Drawer>
  );
}

export default AddCategoryDrawer;