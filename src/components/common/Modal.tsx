import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
import type { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  zIndex?: number; // was string
  children: ReactNode;
  className?: string;
}

function Modal({ isOpen = false, onClose, zIndex = 90, children, className }: ModalProps) {

  if (!isOpen) return null;

  const portalRoot = document.getElementById("portal-root")!;

  return createPortal(
    <>
      <Backdrop isOpen={isOpen} onClick={onClose} zIndex={zIndex} />

      <div
        style={{ zIndex: zIndex + 1 }}
        className={`flex flex-col fixed inset-0 m-auto ${className} max-w-200 h-fit bg-whitebg border-1 border-brand-grey rounded-3xl gap-y-4 p-6 text-brand-black shadow-2xl`}
      >
        {children}
      </div>
    </>,
    portalRoot
  );
}

export default Modal