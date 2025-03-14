import React from 'react';
import styles from './LoadMoreBtn.module.css';

// Тип для пропсів компонента
interface LoadMoreBtnProps {
  onClick: () => void; // Функція, яка викликається при натисканні кнопки
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
