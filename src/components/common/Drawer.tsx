import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import Backdrop from "./Backdrop";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react"

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

function Drawer({ isOpen, onClose, children, className }: DrawerProps) {

  useBodyScrollLock(isOpen);
  const portalRoot = document.getElementById("portal-root")!;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <Backdrop onClick={onClose} isOpen={isOpen} />

          <motion.div
            className={`fixed top-0 right-0 rounded-l-4xl overflow-y-auto flex flex-col bg-whitebg px-8 text-brand-black h-screen shadow-2xl z-100 ${className}`}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    portalRoot
  );
}

export default Drawer;