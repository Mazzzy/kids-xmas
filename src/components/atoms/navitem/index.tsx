import { FC, MouseEvent } from 'react';
import styles from './navitem.module.css';

interface NavItemProps {
  href?: string;
  className?: string;
  children?: any;
  clickHandler?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const NavItem: FC<NavItemProps> = ({ href, children, className, clickHandler }) => {
  const activeClass = className === 'active_navitem' ? styles.active_navitem : className;
  return (
    <a className={`${styles.navbar_item} ${activeClass || ''}`} href={href || '#'} onClick={clickHandler}>
      {children}
    </a>
  );
};

export default NavItem;
