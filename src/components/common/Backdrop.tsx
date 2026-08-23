interface BackdropProps {
  isOpen: boolean;
  onClick?: () => void;
  zIndex?: number;
}

function Backdrop({ isOpen, onClick, zIndex = 90 }: BackdropProps) {
  return (
    <div
      onClick={onClick}
      style={{ zIndex }}
      className={`fixed inset-0 bg-black/45 transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    />
  );
}

export default Backdrop;