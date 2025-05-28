import { createPortal } from "react-dom";

interface Props {
  className?: string;
  children: React.ReactNode;
  closeModal: (value: boolean) => void;
  classNameInnerDiv?: string;
}

const Modal = ({
  className,
  children,
  closeModal,
  classNameInnerDiv,
}: Props) => {
  const rootModal = document.getElementById("rootModal");

  if (!rootModal) return null;

  return (
    <div>
      {createPortal(
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black/50 z-50 ${className}`}
          onClick={() => closeModal(false)}
        >
          <div className={`${classNameInnerDiv}`}>{children}</div>
        </div>,
        rootModal
      )}
    </div>
  );
};

export default Modal;
