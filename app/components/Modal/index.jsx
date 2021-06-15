import React, { useEffect } from "react";
import ReactDOM from "@hot-loader/react-dom";
import PropTypes from "prop-types";

import * as S from "./styled";

const Portal = ({ children }) => ReactDOM.createPortal(children, document.body);

const Modal = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    const downHandler = (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        if (onClose) onClose();
      }
    };

    window.addEventListener("keydown", downHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <Portal>
          <S.BackDrop onClick={onClose}>
            <S.Modal>{children}</S.Modal>
          </S.BackDrop>
        </Portal>
      )}
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.shape().isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  isOpen: false,
};

export default Modal;
