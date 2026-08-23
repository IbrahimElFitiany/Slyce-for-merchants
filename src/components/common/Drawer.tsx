import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import Backdrop from "./Backdrop";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

function Drawer({ isOpen, onClose, children, className }: DrawerProps) {

  useBodyScrollLock(isOpen);
  const portalRoot = document.getElementById("portal-root")!;

  return createPortal (
    <>
      <Backdrop onClick={onClose} isOpen={isOpen} />

      <div className="drawer-panel">

        <div className={`fixed top-0 right-0 rounded-l-4xl overflow-y-auto flex flex-col bg-whitebg px-8 text-brand-black h-screen transition-transform duration-300
          ${className}
          ${isOpen
            ? "translate-x-0 pointer-events-auto z-100 shadow-2xl"
            : "translate-x-full pointer-events-none drop-shadow-none"
          }`
        }>
          {children}

        </div>

      </div>
    </>, portalRoot);
}

export default Drawer;