import { CheckIcon } from "@/components/icons/CheckIcon";
import { ChevronIcon } from "@/components/icons/ChevronIcon"
import { useBranchContext } from "@/context/BranchContext"
import useBranchesQuery from "@/hooks/useBranchesQuery"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function BranchSelect() {

  const { selectedBranch, setSelectedBranch } = useBranchContext()
  const { branches } = useBranchesQuery()

  return (
    <div className="flex items-center gap-x-3">

      <DropdownMenu.Root modal={false}>

        <DropdownMenu.Trigger asChild>
          <button className="group flex items-center gap-x-5 text-accent text-base font-bold cursor-pointer focus:outline-0 ">

            {selectedBranch?.name ?? "All branches"}

            <ChevronIcon
              direction="down"
              className="transition-transform duration-200 group-data-[state=open]:rotate-270"
            />

          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>

          <DropdownMenu.Content
            side="bottom"
            align="start"
            alignOffset={-5}
            sideOffset={1}
            className="flex shadow-xl flex-col gap-y-1 font-semibold text-brand-black bg-whitebg border-1 py-3 px-2 rounded-2xl border-brand-grey
            data-[state=open]:animate-in
            data-[state=open]:fade-in-0
            data-[state=open]:zoom-in-95
            data-[state=closed]:animate-out
            data-[state=closed]:fade-out-0
            data-[state=closed]:zoom-out-95
            duration-200"
          >
            <DropdownMenu.Item
              className={`${!selectedBranch ? "text-dark-accent" : ""} py-1 px-2 rounded-md cursor-pointer focus:outline-0 hover:bg-[#B9F4BB] hover:text-dark-accent transition-colors duration-200`}
              onSelect={() => setSelectedBranch(null)}
            >
              All branches
            </DropdownMenu.Item>

            { branches?.map((branch) => (
                <DropdownMenu.Item
                  key={branch.id}
                  className={`flex items-center gap-x-3 py-1 px-2 rounded-md cursor-pointer focus:outline-0 hover:bg-[#B9F4BB] hover:text-dark-accent transition-colors duration-200
                  ${branch.id === selectedBranch?.id ? "text-dark-accent": ""}`}
                  onSelect={() => setSelectedBranch(branch)}
                >
                  {branch.name}
                  {branch.id === selectedBranch?.id &&
                  <div className="flex items-center bg-dark-accent rounded-full p-1 text-whitebg">
                    <CheckIcon size={10}/>
                  </div>}
                </DropdownMenu.Item>
              ))
            }

          </DropdownMenu.Content>

        </DropdownMenu.Portal>

      </DropdownMenu.Root>
    </div>
  )
}