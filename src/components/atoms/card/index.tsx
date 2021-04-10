import { FC, ReactNode } from 'react';
import styles from './card.module.css';

interface CardProps {
  title?: string;
  children?: ReactNode;
}

const Card: FC<CardProps> = ({ title, children }) => {
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
    <div className={styles.card}>
      {title ? renderCardTitle() : ''}
      <div className={styles.card_content}>{children}</div>
    </div>
  );
};

export default Card;
