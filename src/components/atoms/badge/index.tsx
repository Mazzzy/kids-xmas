import { FC } from 'react';
import styles from './badge.module.css';
interface BadgeProps {
  title?: string;
  className?: string;
}

const Badge: FC<BadgeProps> = ({ title, className = '' }) => {
  return <span className={`${styles.badge} ${className}`}>{title || ''}</span>;
};

export default Badge;
