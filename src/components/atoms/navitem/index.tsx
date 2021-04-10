import { FC, MouseEvent, ReactNode } from 'react';
import styles from './navitem.module.css';

interface NavItemProps {
  href?: string;
  className?: string;
  children?: ReactNode;
  clickHandler?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const NavItem: FC<NavItemProps> = ({ href, children, className = '', clickHandler }) => {
  const dynamicClsNames = className
    .trim()
    .split(' ')
    .map((c) => styles[c])
    .join(' ');
  return (
    <a className={`${styles.navbar_item} ${dynamicClsNames || ''}`} href={href || '#'} onClick={clickHandler}>
      {children}
    </a>
  );
};

export default NavItem;
