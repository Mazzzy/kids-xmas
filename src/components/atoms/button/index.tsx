import { FC, ReactNode, MouseEvent, KeyboardEvent } from 'react';
import styles from './button.module.css';
interface ButtonProps {
  id?: string;
  className?: string;
  tabIndex?: number;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLAnchorElement> | KeyboardEvent<HTMLAnchorElement>) => void;
}

const Button: FC<ButtonProps> = ({ children, onClick, id, className = '', tabIndex = 0 }) => {
  return (
    <a
      role="button"
      className={`${styles.button} ${className || ''}`}
      onClick={onClick}
      onKeyDown={onClick}
      id={id}
      tabIndex={tabIndex}
    >
      {children}
    </a>
  );
};

export default Button;
