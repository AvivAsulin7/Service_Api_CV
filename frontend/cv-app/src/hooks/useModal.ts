import { useState } from "react";
import { GENERAL_ERROR_MESSAGE } from "../constants/constant";

export const useModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const handleErrorMessage = (message: string | unknown) => {
    if (typeof message === "string") {
      setError(message);
    } else {
      setError(GENERAL_ERROR_MESSAGE);
    }
    openModal();
  };
  return {
    showModal,
    openModal,
    closeModal,
    handleErrorMessage,
    error,
  };
};
