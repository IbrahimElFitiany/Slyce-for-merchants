import { CheckIcon } from "@/components/icons/CheckIcon";

interface BranchCardProps {
  id: string;
  name:string;
  location: string
  isSelected: boolean;
  onSelect: (branchId:string) => void;
};

function BranchCard({id, name, location, isSelected, onSelect }: BranchCardProps) {
  return (
    <div
      className={`border flex items-center justify-between rounded-2xl p-4 cursor-pointer transition-colors  ${
        isSelected
          ? "border-accent bg-accent/10"
          : "border-brand-grey hover:border-accent"
      }`}
      onClick={() => onSelect(id)}
    >
      <div className="flex flex-col">
        <h3 className={`font-bold text-lg ${isSelected ? "text-accent": "text-text-grey"}`}>{name}</h3>
        <p className={`text-sm ${isSelected ? "text-accent/90": "text-text-grey"}`}>{location}</p>
      </div>

      {
        isSelected &&
        <div className="flex items-center justify-center rounded-full w-6 h-6 bg-accent/80 text-whitebg">
          <CheckIcon size={18}/>
        </div>
      }


    </div>
  );
}

export default BranchCard