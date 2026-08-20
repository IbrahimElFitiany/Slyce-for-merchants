import { useRef } from "react";

interface ImageSelectorButtonProps {
  onImageSelect: (file: File) => void;
}

function ImageSelectorButton({ onImageSelect }: ImageSelectorButtonProps) {

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const file = e.target.files?.[0];
    if (!file) return;

    onImageSelect(file);

    e.target.value = "";
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png"
        onChange={handleFileChange}
        className="hidden"
      />

      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="py-1.5 px-3 border-1 border-brand-grey rounded-full cursor-pointer"
      >
        Upload new
      </button>
    </>
  );
}

export default ImageSelectorButton;