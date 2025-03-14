// ImageCard.tsx
import React from 'react';
import styles from './ImageCard.module.css';

interface ImageCardProps {
  image: {
    id: string;
    urls: { small: string; regular: string };
    alt_description: string;
  };
  handleImageClick: (image: {
    id: string;
    urls: { small: string; regular: string };
    alt_description: string;
  }) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, handleImageClick }) => {
  const handleClick = () => {
    handleImageClick(image);
  };

  return (
    <div className={styles.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClick}
        className={styles.img}
      />
    </div>
  );
};

export default ImageCard;
