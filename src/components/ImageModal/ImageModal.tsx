import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

// Тип для властивостей зображення
interface Image {
  alt_description: string;
  urls: {
    regular: string;
  };
}

// Тип для пропсів компонента ImageModal
interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={styles.modalImage}
      />
      <button className={styles.modalBtn} onClick={onClose}>
        Close
      </button>
    </Modal>
  );
};

export default ImageModal;
