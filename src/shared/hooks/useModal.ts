import { useState } from "react";

export const useModal = (defaultOpen: boolean = false) => {
  const [isModalOpen, setIsModalOpen] = useState(defaultOpen);

  const toggleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, toggleOpenModal, openModal, closeModal };
};
