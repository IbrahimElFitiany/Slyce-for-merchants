import { useMutation } from "@tanstack/react-query";
import { uploadImage as uploadImageApi } from "../services/imageServices";

export function useMealImageUpload() {

  const { mutateAsync: uploadMealImage, isPending: isUploading, error} = useMutation({
    mutationFn: (imgUrl: string) => uploadImageApi(imgUrl),
  });

  return {
    uploadMealImage,
    isUploading,
    error
  };
}

export default useMealImageUpload;