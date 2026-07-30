import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import Backdrop from "./Backdrop";
import type { ReactNode } from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Drawer({ isOpen, onClose, children }: DrawerProps) {

  useBodyScrollLock(isOpen);

  return (
    <>
      <Backdrop onClick={onClose} isOpen={isOpen} />
      <div className="drawer-panel">
        {children}
      </div>
    </>
  );
}

export default Drawer;