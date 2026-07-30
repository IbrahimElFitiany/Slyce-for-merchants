interface BackdropProps {
  isOpen: boolean;
  onClick?: () => void;
  zIndex?: string;
}

function Backdrop({ isOpen, onClick, zIndex = "z-90" }: BackdropProps) {
  return (
    <div
      onClick={onClick}
      className={`fixed inset-0 bg-black/45 transition-opacity duration-300 ${
        isOpen
          ? `opacity-100 pointer-events-auto ${zIndex}`
          : "opacity-0 pointer-events-none"
      }`}
    />
  );
}

export default Backdrop;