import React, { ReactNode } from "react";
import "./Modal.css";
import Button from "../Button/Button";

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  children: ReactNode;
  name?: string;
}

const Modal: React.FC<ModalProps> = ({
  showModal,
  closeModal,
  children,
  name,
}) => {
  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-content">
        {children}
        {!name && <Button onClick={closeModal}>Close</Button>}
      </div>
    </div>
  );
};

export default Modal;
