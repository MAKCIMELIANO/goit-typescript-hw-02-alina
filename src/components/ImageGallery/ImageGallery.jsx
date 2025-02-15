import React from 'react';
import ImageCard from '../ImageCard/ImageCard';

import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, handleImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <li key={image.id} className={styles.galleryItem}>
          <ImageCard image={image} handleImageClick={handleImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
