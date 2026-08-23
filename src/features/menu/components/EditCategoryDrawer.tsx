import Drawer from "@/components/common/Drawer";

interface EditCategoryDrawerProps {
  categoryName:string;
  isOpen:boolean;
  onClose: () => void
}

function EditCategoryDrawer({categoryName, isOpen, onClose} : EditCategoryDrawerProps) {

  return (

    <Drawer isOpen={isOpen} onClose={onClose}>

      <div className="flex flex-col gap-y-3 border-b-1 border-brand-grey my-6 py-5">
        <h1 className="text-3xl font-bold">Edit category</h1>
      </div>

      <div className="flex flex-col gap-y-3 w-full mb-6">

        <label htmlFor="name" className="text-xl font-bold">Name</label>
        <input
          id="name"
          type="text"
          placeholder={categoryName}
          className="w-full px-4 py-2 border border-brand-grey rounded-xl placeholder-text-grey outline-none focus:border-accent transition-colors"
        />

        <button
          className="cursor-pointer bg-accent rounded-xl text-xl font-semibold py-1.5 text-white hover:brightness-105 transition-all duration-200"
          onClick={()=> console.log("m4 now")}>
          save
        </button>

      </div>

    </Drawer>

  );
}
export default EditCategoryDrawer