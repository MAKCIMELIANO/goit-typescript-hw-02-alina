import React from 'react';
import styles from './ImageCard.module.css';

const ImageCard = ({ image, handleImageClick }) => {
  const handleClick = () => {
    handleImageClick(image);
  };
  return (
    <li>
      <div className={styles.card}>
        <img
          src={image.urls.small}
          alt={image.alt_description}
          onClick={handleClick}
          className={styles.img}
        />
      </div>
    </li>
  );
};

export default ImageCard;
