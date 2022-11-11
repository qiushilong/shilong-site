import { useState, useEffect, ReactNode, FC } from "react";
import { createPortal } from "react-dom";
interface ModalProps {
  children: ReactNode;
  width?: number;
  height?: number;
  visibile?: boolean;
  onClose?: Function;
}

const Modal: FC<ModalProps> = (props) => {
  const [clientFlag, setClientFlag] = useState<boolean>(false);
  const { children, width = 300, height = 200, visibile, onClose } = props;

  useEffect(() => {
    setClientFlag(true);
  }, []);

  const modalStyles = {
    width,
    height,
  };

  const handleClose = () => {
    onClose?.();
  };

  if (clientFlag && visibile) {
    return createPortal(
      <div className="cmp_modal" style={modalStyles}>
        {children}
        <span onClick={handleClose} className="cmp_modal_closeBtn">
          x
        </span>
      </div>,
      document.body
    );
  } else {
    return <></>;
  }
};

export default Modal;
