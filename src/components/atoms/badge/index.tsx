import { FC } from 'react';
import styles from './badge.module.css';
interface BadgeProps {
  title?: string;
}

const Badge: FC<BadgeProps> = ({ title }) => {
  return <span className={styles.badge}>{title || ''}</span>;
};

export default Badge;
