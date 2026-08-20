import Cropper, { type Area, type Point } from 'react-easy-crop'
import { useState } from "react";
import { MagnifierMinusIcon } from '@/components/icons/MagnifierMinusIcon';
import { MagnifierPlusIcon } from '@/components/icons/MagnifierPlusIcon';
import { RotateIcon } from '@/components/icons/RotateIcon';

interface ImageEditorProps {
  imageSrc: string;
  onCropAreaChange: (croppedAreaPixels: Area, rotation: number) => void;
}

function ImageEditor({ imageSrc, onCropAreaChange }: ImageEditorProps) {

  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);

  const handleRotate = () => {
    const newRotation = (rotation + 90) % 360;
    setRotation(newRotation);
  };

  return (
    <div className="flex flex-col grow-1">

      {/* cropper wrapper */}
      <div className="relative rounded-t-xl w-full aspect-square overflow-hidden">

        <Cropper
          image={imageSrc}
          rotation={rotation}
          onRotationChange={setRotation}
          aspect={1}
          crop={crop}
          onCropChange={setCrop}
          onCropComplete={(_, croppedAreaPixels) => onCropAreaChange(croppedAreaPixels, rotation)}
          zoom={zoom}
          onZoomChange={setZoom}
          restrictPosition={true}
          objectFit="cover"
        />

      </div>

      {/* buttons */}
      <div className="flex rounded-b-xl py-3 px-5 justify-between text-brand-grey bg-brand-black">

        <div className="flex gap-x-5">

          <button
            className="flex items-center rounded-full p-1.5 cursor-pointer hover:bg-[hsl(0,0%,25%)] hover:brightness-105 duration-200"
            onClick={() => setZoom(Math.max(1, zoom - 0.5))}
          >
            <MagnifierMinusIcon size={18}/>
          </button>

          <input
            type="range"
            min="1"
            max="3"
            step="0.1"
            value={zoom}
            className="cursor-pointer accent-accent"
            onChange={(event) => setZoom(Number(event.target.value))}
          />

          <button
            className="flex items-center rounded-full p-1.5 cursor-pointer hover:bg-[hsl(0,0%,25%)] hover:brightness-105 duration-200"
            onClick={() => setZoom(Math.min(3, zoom + 0.5))}
          >
            <MagnifierPlusIcon size={18}/>
          </button>

        </div>

        <button
          onClick={handleRotate}
          className="flex items-center rounded-md gap-x-1.5 px-2 py-0.5 cursor-pointer hover:bg-[hsl(0,0%,25%)] hover:brightness-105 duration-200"
        >
          <RotateIcon size={18}/>
          <h1>Rotate</h1>
        </button>

      </div>

    </div>
  );
}

export default ImageEditor;