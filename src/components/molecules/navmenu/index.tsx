import React, { FC, MouseEvent } from 'react';
import NavItem from '@/components/atoms/navitem';
import styles from './navmenu.module.css';

interface NavMenuProps {
  activeTab?: string;
  setActiveTabClick: (e: MouseEvent<HTMLAnchorElement>, name: string) => void;
}

const NavMenu: FC<NavMenuProps> = ({ activeTab, setActiveTabClick }) => {
  return (
    <div className={styles.navbar_menu}>
      <div className={styles.navbar_end}>
        <NavItem
          className={`${activeTab === 'all' ? 'active_navitem' : ''}`}
          clickHandler={(e: MouseEvent<HTMLAnchorElement>) => setActiveTabClick(e, 'all')}
        >
          All Carts
        </NavItem>
        <NavItem
          className={`${activeTab === 'my' ? 'active_navitem' : ''}`}
          clickHandler={(e: MouseEvent<HTMLAnchorElement>) => setActiveTabClick(e, 'my')}
        >
          My Cart
        </NavItem>
      </div>
    </div>
  );
};

export default NavMenu;
