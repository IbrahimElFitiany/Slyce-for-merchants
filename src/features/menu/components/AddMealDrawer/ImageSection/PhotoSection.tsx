import { ImagePlusIcon } from "@/components/icons/ImagePlusIcon";
import ImageSelectorButton from "./ImageSelectorButton";
import ReplacePhoto from "./ReplacePhoto";
import { useRef } from "react";

interface MealPhotoSectionProps {
  imgUrl: string;
  mealName: string;
  onImageSelect: (file: File) => void;
  onEditImage?: () => void;
  error?: string;
}

function PhotoSection({ imgUrl, mealName, onImageSelect, onEditImage, error}: MealPhotoSectionProps) {

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageSelect(file);
    }
  };

  const handleReplaceClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="flex flex-col gap-y-2">

      <h2 className="text-xl font-bold">Photo</h2>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/jpeg,image/png,image/jpg"
        className="hidden"
      />

      { imgUrl && onEditImage
        ?  <ReplacePhoto
            mealImage={imgUrl}
            mealName={mealName}
            onEdit={onEditImage}
            onReplace={handleReplaceClick}
          />
        : <div className={`flex h-auto justify-between rounded-2xl p-2 border-dashed border-1 ${error ? "border-red-500": "border-brand-grey"}`}>

            <div className="flex w-1/3 max-w-32 aspect-square justify-center items-center rounded-xl bg-[hsl(0,0%,91%)]">
              <ImagePlusIcon className="text-[hsl(0,2%,71%)]" size={80} />
            </div>

            <div className="flex flex-col items-center justify-around text-sm font-medium text-text-grey mr-3">

              <ImageSelectorButton onImageSelect={onImageSelect} />

              <div className="flex flex-col items-center leading-5 text-center">
                <p>File types: JPG, PNG, JPEG</p>
                <p>Maximum file size: 5MB</p>
                <p>Minimum resolution: 300x300px</p>
              </div>

            </div>

          </div>
      }

      <span className="text-xs text-red-500 font-medium">{error}</span>

    </section>
  );
}

export default PhotoSection;