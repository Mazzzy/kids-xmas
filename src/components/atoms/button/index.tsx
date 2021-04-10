import { FC, MouseEvent, KeyboardEvent } from 'react';
import styles from './button.module.css';
interface ButtonProps {
  title?: string;
  dataVal?: string;
  className?: string;
  tabIndex?: number;
  onClick?: (event: MouseEvent<HTMLAnchorElement> | KeyboardEvent<HTMLAnchorElement>) => void;
}

const Button: FC<ButtonProps> = ({ title, onClick, dataVal, className = '', tabIndex = 0 }) => {
  const dynamicClsNames = className
    .trim()
    .split(' ')
    .map((c) => styles[c])
    .join(' ');
  return (
    <a
      role="button"
      className={`${styles.button} ${dynamicClsNames || ''}`}
      onClick={onClick}
      onKeyDown={onClick}
      id={dataVal}
      tabIndex={tabIndex}
    >
      {title || ''}
    </a>
  );
};

export default Button;
