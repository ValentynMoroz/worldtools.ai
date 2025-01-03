import { useState } from 'react';

// Кастомний хук для управління модалками
const useModal = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [isOpening, setIsOpening] = useState(false);
  const openModal = modalName => {
    setIsOpening(true);

    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
    setIsOpening(false);
    document.body.classList.remove('overflow-hidden-body');
  };

  const isModalOpen = modalName => {
    if (activeModal === modalName) {
      document.body.classList.add('overflow-hidden-body');
    }

    return activeModal === modalName;
  };

  return { openModal, closeModal, isModalOpen, isOpening };
};

export default useModal;
