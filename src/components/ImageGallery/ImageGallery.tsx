// ImageGallery.tsx
import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: { id: string; urls: { small: string }; alt_description: string }[];
  handleImageClick: (image: {
    id: string;
    urls: { small: string };
    alt_description: string;
  }) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  handleImageClick,
}) => {
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
