import CloseIcon from "@/components/icons/CloseIcon";
import ImageEditor from "./ImageEditor";
import MealImagePreview from "./MealImagePreview";
import MealImageListingPreview from "./MealImageListingPreview";
import { useEffect, useMemo, useState } from "react";
import type { Area } from "react-easy-crop";
import { SyncLoader } from "react-spinners";
import Modal from "@/components/common/Modal";
import getCroppedImg from "@/features/menu/utils/cropImage";
import useMealImageUpload from "@/features/menu/hooks/useMealImageUpload";

interface ImagePreviewModalProps {
  mealImage: File;
  mealName?: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (finalImage: string) => void;
}

function ImagePreviewModal({mealImage, mealName, isOpen, onClose, onSubmit}: ImagePreviewModalProps) {

  const displayName = mealName?.trim() || "Untitled meal";

  const [finalImageUrl, setFinalImageUrl] = useState<string>("");

  const [currentPixels, setCurrentPixels] = useState<Area | null>(null);
  const [currentRotation, setCurrentRotation] = useState<number>(0);

  const { uploadMealImage , isUploading, error} = useMealImageUpload();

  const sourceUrl = useMemo(() => URL.createObjectURL(mealImage), [mealImage]);

  useEffect(() => {
    return () => URL.revokeObjectURL(sourceUrl);
  }, [sourceUrl]);

  useEffect(() => {
    const fetchCroppedImage = async () : Promise<string | undefined> => {

      if (!currentPixels) return;

      const croppedUrl = await getCroppedImg(sourceUrl, currentPixels, currentRotation);

      setFinalImageUrl(croppedUrl);
    };

    fetchCroppedImage();
  }, [sourceUrl, currentPixels, currentRotation]);

  const handleCropAreaChange = (pixels: Area, rotation: number) => {
    setCurrentPixels(pixels);
    setCurrentRotation(rotation);
  };

  const handleSubmit = async () => {

    if (!finalImageUrl) return;

    const storageUrl = await uploadMealImage(finalImageUrl);

    onSubmit(storageUrl);

  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} zIndex={102}>

      <header className="flex gap-x-10 items-center justify-between">

        <h1 className="text-3xl font-bold">Preview and adjust your photo</h1>

        <button
          className="cursor-pointer border-1 border-brand-grey rounded-full p-1.5 disabled:opacity-50"
          onClick={onClose}
          disabled={isUploading}
        >
          <CloseIcon />
        </button>

      </header>

      <div className="flex justify-between w-full">

        {sourceUrl && <ImageEditor imageSrc={sourceUrl} onCropAreaChange={handleCropAreaChange}/>}

        <div className="flex flex-col gap-y-2 ml-4 w-1/3">

          <h1 className="text-xs">How your photo appears to customers</h1>

          {finalImageUrl &&
            <>
              <MealImagePreview finalImage={finalImageUrl} mealName={displayName} />
              <MealImageListingPreview finalImage={finalImageUrl} mealName={displayName} />
            </>
          }

        </div>

      </div>

      {error && <p className="text-sm text-red-500 mt-2">{error.message}</p>}

      <footer className="flex gap-x-3 justify-end font-semibold border-t-1 -mx-6 px-7 border-brand-grey -mb-3 pt-3">

        <button
          className="cursor-pointer border-1 border-brand-grey rounded-full px-3 py-1 text-brand-black disabled:opacity-50"
          disabled={isUploading}
          onClick={onClose}
        >
          Close
        </button>

        <button
          className="cursor-pointer bg-accent rounded-full px-5 py-1 text-whitebg disabled:opacity-70 flex items-center justify-center min-w-[80px]"
          disabled={isUploading || !finalImageUrl}
          onClick={handleSubmit}
        >
          {isUploading ? <SyncLoader size={6} color="#ffffff" /> : "Submit"}
        </button>

      </footer>

    </Modal>
  );
}

export default ImagePreviewModal;