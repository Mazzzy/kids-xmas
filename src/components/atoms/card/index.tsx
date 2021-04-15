import { FC, ReactNode } from 'react';
import styles from './card.module.css';

interface CardProps {
  title?: string;
  children?: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ title, children, className = '' }) => {
  const renderCardTitle = () => {
    return (
      <div className={styles.card_header}>
        <p className={styles.card_header_title}>
          <span>{title || ''}</span>
        </p>
      </div>
    );
  };
  return (
    <div className={`${styles.card} ${className}`}>
      {title ? renderCardTitle() : ''}
      <div className={styles.card_content}>{children}</div>
    </div>
  );
};

export default Card;
